---
title: "Using Fortran Modules"
---

This guide explains how to organise your Abaqus user subroutine code using
Fortran modules.

## About Fortran Modules

```{include} include/fortran-modules.md
```


## Modularising your User Subroutine

Modularising a user subroutine entails breaking it up into functions or
subroutines, and storing these in one or more modules where each module is kept
in a separate source file.

```{note}
The examples in this guide will use [free-form Fortran](free-form-fortran-abaqus)
and [explicit typing](explicit-typing-abaqus).
You can read more about these in the linked guides, however they are not
prerequisites to understand this guide.
```

We will consider a simple example, where we only have one Fortran module.
In this case we will have two Fortran source files:

1. __The main user subroutine file:__ this is the top-level file that gets
   passed to Abaqus with `user=<file>`. It only contains the user subroutine
   interface, which calls procedures in our module.

2. __The Fortran module file:__ this source file contains a Fortran
   module where we will place all the functionality of our user subroutine
   broken up into functions and subroutines.

In this example we will call these `usub.f` and `elastic_mod.f` respectively.


```{important}
All source files should be placed in the same folder. It is convention to
call this folder `src`
```

```{seealso}
See the [__sample repository__](https://github.com/BristolCompositesInstitute/abaqus-modern-fortran)
on Github which gives a complete working example of the concepts presented
in this guide.
```

### `usub.f`

```{code-block} fortran
---
lineno-start: 1
---
!DIR$ FREEFORM
#include 'elastic_mod.f'

subroutine umat(stress,statev,ddsdde,sse,spd,scd, &
  rpl,ddsddt,drplde,drpldt, &
  stran,dstran,time,dtime,temp,dtemp,predef,dpred,cmname, &
  ndi,nshr,ntens,nstatv,props,nprops,coords,drot,pnewdt, &
  celent,dfgrd0,dfgrd1,noel,npt,layer,kspt,jstep,kinc)

  use iso_fortran_env, only: dp=>real64
  use elastic_mod, only: get_properties, plane_strain_jacobian, &
                         update_stress
  implicit none

  real(dp), intent(inout) :: stress(ntens), statev(nstatv), ddsdde(ntens,ntens)
  real(dp), intent(inout) :: sse, spd, scd, rpl, ddsddt(ntens), drplde(ntens)
  real(dp), intent(inout) :: drpldt
  real(dp), intent(in) :: stran(ntens), dstran(ntens), time(2), dtime, temp
  real(dp), intent(in) :: dtemp, predef(1), dpred(1)
  character(len=80), intent(in) :: cmname
  integer, intent(in) :: ndi, nshr, ntens, nstatv, nprops
  real(dp), intent(in) :: props(nprops), coords(3), drot(3, 3), pnewdt
  real(dp), intent(in) :: celent, dfgrd0(3,3), dfgrd1(3,3)
  integer, intent(in) :: noel, npt, layer, kspt, jstep(4), kinc
  
  real(wp) :: e,xnu
  integer i,j

  call get_properties(props, e, xnu)

  call plane_stress_jacobian(ddsdde,e,xnu)

  call update_stress(dstran,ddsdde,stress)

end subroutine umat
```

Note how the top-level user subroutine does very little itself, but
rather all the functionality has been organised into subroutines that are
contained within the module `elastic_mod.f`.

There are two important steps required to access the subroutines defined
in the module:

1. __`Line 2` : include the module source --__
*We must include the module source file at the top of our main user subroutine
file in order for it to be compiled when Abaqus is run.*
    - With multiple modules, the source files must be included in the correct order,
      whereby modules are included before other modules that use them
    - The module files should only be included in the top-level user-subroutine
      file, and not in other module files; this is to avoid accidently including
      the same module more than once
    - We use the preprocessor syntax `#include`, instead of `include`, since this
      allows us to easily generate a single self-contained source file by running
      the preprocessor

2. __`Line 11` : use the module to access its members --__
*We must add a `use` statement to any module, subroutine or function that needs
to access the contents of the module. Here we also specify which subroutines
we are going to use from the module.*


Some other points to note about this code:

- __`Line 1` :__ directive to indicate free-form source
  (see [using free-form Fortran with Abaqus](free-form-fortran-abaqus))

- __`Line 10` :__ define the double-precision kind using the built-in
  `iso_fortran_env` module

- __`Line 13` :__ disable implicit typing
  (see [explicit typing with Abaqus](explicit-typing-abaqus))




### `elastic_mod.f`

```{code-block} fortran
---
lineno-start: 1
---
!DIR$ FREEFORM
module elastic_mod
  use iso_fortran_env, only: dp=>real64
  implicit none

  contains

  subroutine get_properties(props, e, xnu)
    real(dp), intent(in) :: props(:)
    real(dp), intent(out) : e, xnu

    e = props(1)
    xnu = props(2)
  end subroutine get_properties

  subroutine plane_stress_jacobian(ddsdde,e,xnu)
    real(dp), intent(out) :: ddsdde(:,:)
    real(dp), intent(in) :: e, xnu

    ddsdde(1,1) = 1.d0
    ddsdde(1,2) = xnu
    ddsdde(2,1) = xnu
    ddsdde(2,2) = 1.d0
    ddsdde(3,3) = 0.5d0*(1.d0-xnu)
    ddsdde = ddsdde*e/( (1.d0+xnu*xnu) )
  end subroutine plane_stress_jacobian

  subroutine update_stress(dstran,ddsdde,stress)
    real(dp), intent(in) :: dstran(:)
    real(dp), intent(in) :: ddsdde(:,:)
    real(dp), intent(out) :: stress(:)
    
    do i = 1,size(ddsdde,1)
      do j = 1,size(ddsdde,2)
        stress(i) = stress(i) + ddsdde(i,j)*dstran(j)
      end do
    end do
  end subroutine update_stress

end module elastic_mod
!DIR$ NOFREEFORM
!DIR$ FIXEDFORMLINESIZE:132
```

This file contains our module definition (called `elastic_mod`) and all the
subroutines that we call in the top-level user-subroutine file.

- `Line 3` : the double precision `dp` parameter is accesible to all
  subroutines in the module

- `Line 4` : everything in this module is explicitly typed
  (see [explicit typing with Abaqus](explicit-typing-abaqus))

- Note how we don't have to pass in the size of each arrays as separate
  arguments - this is one advantage of using module files, which is that they
  enable the use of assumed-shape array arguments[^fortran90_assumed_shape]

- This excerpt is cut-down for brevity; the
  [Fortran Code Guidelines](fortran-style-guidelines) would recommend extra
  line spacing for readability, as well as some comments to describe
  each subroutine and their arguments.



[^fortran90_assumed_shape]: <https://www.fortran90.org/src/best-practices.html#arrays>


## Running Abaqus with Modular Code

Running Abaqus with modularised code is no different to normal, simply make
sure that the user subroutine file and the module files are in the same folder
and pass the top-level (non-module) source file to Abaqus.

```{admonition} Recommendation
It is a good idea to copy source files to the job folder when running Abaqus
jobs. This means that you always know which version of the code produced
which set of results; this is important when evaluating the effect of 
code changes.
```

If the source files are in the same folder as a job file `job.inp` then,
using the example above, you would run Abaqus with:

```shell
abaqus job=job.inp user=usub.f double interactive
```

There is no need to list the module files for Abaqus since they are specified with the
`#include` statements at the top of `usub.f`.



## Generating a Single-Source Version

If you require a self-contained single-source file to distribute, you can generate one by
invoking the Intel Fortran preprocessor at the command line.

First navigate to the directory containing your source files in your command
window, then run the following command:

```shell
ifort -EP usub.f > usub_single.f
```

This will output `usub_single.f` which contains all the code, including
the modules, in one file.

```{caution}
For this single-source command to work, make sure that you use the `#include` syntax to 
include the modules and not `include`.
```