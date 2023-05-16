---
title: "Reading Material Properties from a Namelist File"
---

This guide describes an alternative approach to loading user subroutine material properties
from a separate 'namelist' file, instead of defining them in the `inp` file.


## Motivation

The standard approach to defining material properties variables for a `umat`/`vumat`
is to define a list of floating-point numbers in the `inp` file.


__Example:__
```fortran
*Material, name=UMAT
*Density
 0.0001,
*Depvar
     10,
*User Material, constants=8
    0.2,    1.0,    60.,    90.,  100000., 100000.,    1.,    2.,
```

This has several disadvantages:

1. Properties are limited to floating-point values - no proper support
   for integers, strings and booleans

2. Limited support for arrays

3. Poor readability - difficult to determine which value correponds to which property

4. Poor maintainability - difficult to modify or redefine property array order


## The Fortran NameList Format

*NameList* is an input format that is build into the Fortran language.
It is therefore very portable, robust and simple to use.

__Example:__ *namelist input file*

```fortran
&data
tolerance = 0.1
num_sample = 1
check = .True.
data_file = 'data.csv'
norm_vec = [1, 0, 0]
/
```

With namelist files, can use key-value pairs to associate a property to a **named variable**.

The general format of a namelist file is

```text
& <group name>
<var_name> = <value>
...
/
```

- __Line 1:__ an ampersand (`&`) followed by the name of your namelist group
- __Definitions:__ a variable name followed by equals (`=`) followed by the intended value
- __Final line:__ a single forward slash (`/`) on its own to close the namelist group


Variable names in the namelist file correspond to variables of the same name in the
Fortran code that reads the namelist file (see next section).

```{note}
Multiple namelist groups (with different names) can be stored in the same namelist file
and read separately.
```

## Reading a NameList file in Fortran

To read a namelist file in Fortran, you must first define which Fortran variables
are part of the namelist group:

__Example:__ *define a namelist group of variables*

```fortran
! Define variables to read in
real :: tolerance
integer :: num_sample
logical :: check
character(len=256) :: data_file
integer :: norm_vec(3)

! Define the namelist group with name 'data'
namelist /data/ tolerance, num_sample, data_file, norm_vec

```

```{note}
If a variable is not part of the namelist definition, then it is not allowed
in the namelist file - it will be rejected as an error.
```

Once the namelist has been defined with a specific name, then we can open the 
file and load the namelist data from it:

__Example:__ *read a namelist file*

```fortran
integer :: fh, stat
...

open(newunit=fh, file='data.nml', action='read')
read(fh, nml=data, iostat)
close(fh)
```

The variables defined in the namelist group will be populated with the values in the
namelist file.

```{note}
If a variable is absent from the namelist file, then its value will not be changed
when the namelist file is read.
```


## Error Detection
If a namelist file is incorrectly formatted, it will fail to load. In these situations
it is useful to print a message identifying where the error occured.

__Example:__ *check for read error*[^1]

```fortran
read(fh, nml=data, iostat)

if (stat /= 0) then
  backspace(fh)
  read(fh,fmt='(A)') line
  write(*,'(A)') ' Invalid line in namelist : '//trim(line)
end if

```

[^1]: <http://degenerateconic.com/namelist-error-checking.html>



## Using NameList Files for User Subroutines

Material properties can be read into shared module variables once at the first increment

__Example:__ *module to load and store material properties from a namelist input file*


```fortran
module Material_Properties
  implicit none

  logical :: props_loaded = .False.   ! Indicates if properties already loaded

  ! Property variables to load
  real :: tolerance
  integer :: num_sample
  logical :: check
  character(len=256) :: data_file
  integer :: norm_vec(3)

  contains

  subroutine load_mat_props(mat_name)
    character(*), intent(in) :: mat_name

    integer :: fh, get_thread_id, n, stat
    character(256) :: jobdir, line
    character(:), allocatable :: mat_props_file

    ! Define the namelist group 'material'
    namelist /material/ tolerance, num_sample, check, data_file, norm_vec

    ! Skip if already loaded or not on primary thread
    if (props_loaded .or. get_thread_id() /= 0) return
    
    ! Look for namelist file in job output directory
    call vgetoutdir(jobdir,n)
    mat_props_file = jobdir(1:n)//'/'//trim(mat_name)//'.nml'

    ! Load namelist data from file
    open(newunit=fh, file=mat_props_file, action='read')
    read(fh, nml=material, iostat=stat)

    ! Handle IO error
    if (stat /= 0) then
        backspace(fh)
        read(fh,fmt='(A)') line
        write(*,'(A)') ' Invalid line in namelist : '//trim(line)
    end if

    close(fh)

    props_loaded = .True.

  end subroutine load_mat_props

end module Material_Properties
```


## Advanced: NameLists with Derived Types (Structures)

For complex user subroutines, with many properties or multiple different materials, Fortran derived types
can be used to collect material variables into a single structured variable

In this case, you must also define the derived type to contain the material properties:

__Example:__ *custom derived type to encapsulate material properties*

```fortran
module Material_Properties
  implicit none

  logical :: props_loaded = .False.   ! Indicates if properties already loaded

  type mat_props_t
    real :: tolerance
    integer :: num_sample
    logical :: check
    character(len=256) :: data_file
    integer :: norm_vec(3)
  end type mat_props_t
    
  type(mat_props_t) :: props_cached

  contains

  subroutine load_mat_props(mat_name, props)
    character(*), intent(in) :: mat_name
    type(mat_props_t), intent(out) :: props

    integer :: fh, n, stat
    character(256) :: jobdir, line
    character(:), allocatable :: mat_props_file

    ! Define the namelist group 'material'
    namelist /material/ props

    ! Skip if already loaded or not on primary thread
    if (props_loaded) then
      props = props_cached
      return
    end if
    
    ! Look for namelist file in job output directory
    call vgetoutdir(jobdir,n)
    mat_props_file = jobdir(1:n)//'/'//trim(mat_name)//'.nml'

    ! Load namelist data from file
    open(newunit=fh, file=mat_props_file, action='read')
    read(fh, nml=material, iostat=stat)

    ! Handle IO error
    if (stat /= 0) then
        backspace(fh)
        read(fh,fmt='(A)') line
        write(*,'(A)') ' Invalid line in namelist : '//trim(line)
    end if

    close(fh)

    props_cached = props
    props_loaded = .True.

  end subroutine load_mat_props

end module Material_Properties
```

Members of a Fortran derived type are accessed using the percent operator (`%`) in
both the Fortran code and namelist files that use the type:

__Example:__ *namelist input file with derived type*

```fortran
&data
props % tolerance = 0.1
props % num_sample = 1
props % check = .True.
props % data_file = 'data.csv'
props % norm_vec = [1, 0, 0]
/
```