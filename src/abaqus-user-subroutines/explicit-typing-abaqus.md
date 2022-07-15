---
title: "Explicit Typing with Abaqus"
---

## Implicit Typing

Backwards-compatibility is very important for the Fortran standard due to the
age of the language and consequently large amount of legacy code still in use.
This means that many legacy features remain in the language standard despite
their use being discouraged or them being made obsolete.

One such legacy feature that is strongly discouraged is *implicit typing* which
describes a feature where variables need not have their type declared
explicitly, but rather it is implicitly inferred based on the first
letter of the variable.

```{note}
The default rules of implicit typing are that variables with names beginning
with the letters `i`,`j`,`k`,`l`,`m`,`n` are `integer` and all other variables
are `real`.
```

```{important}
__The use of implicit typing is strongly discouraged since it easily leads to
errors which are difficult to detect.__
```

Abaqus user subroutines are usually implicitly typed, this guide will explain
how to write Abaqus user subroutines with explicit typing.


## Explicit Typing

```{admonition} Info
When implicit typing is disabled, all variables must have their type explicitly
declared - this is __explicit typing__.
```

Implicit typing is disabled by adding the following statement to the beginning
of all program units:

```fortran
implicit none
```

The statement is placed after any module `use` statements but before any
variable declarations.

__Example:__ *explicit typing in a subroutine*

```fortran
subroutine test(a,b)
  use iso_fortran_env, only: dp=>real64
  implicit none

  integer, intent(in) :: a
  real(dp), intent(out) :: b
  b = 3.0d0*a
end subroutine test
```


## Explicit Typing with Abaqus

Abaqus uses implicit typing to define the floating point (real) precision
to be used; this allows it to switch between single precision and double
precision. The implicit precision is defined in the include files:

- `aba_param.inc` for Abaqus/Standard
- `vaba_param.inc` for Abaqus/Explicit

The precision in these files depends one whether you are running Abaqus
in single precision or double precision, and it determines the precision
of real variables that are passed into your user subroutine.

-------------------------------------------------------------------------

Instead of including these files directly in our code, we can define an implicitly
typed module which extracts this information from Abaqus. We can then use
this module in the rest of our code, which will be explicitly typed.

__Step 1:__
See the `Abaqus_Definitions.f` file printed below and add it to your source files

__Step 2:__
Include the `Abaqus_Definitions.f` file at the beginning of your top-level
user subroutine file.

```fortran
#include 'Abaqus_Definitions.f'
```

__Step 3:__
Import the module in your explicitly typed modules/subroutines and define the
*working precision* (`wp`) with the following syntax:

```fortran
use Abaqus_Definitions, only: wp=>abaqus_real_kind
implicit none
```

__Step 4:__
Define real variables that come from Abaqus with the following syntax:

```fortran
real(wp) :: stateNew(:,:)
```

### `Abaqus_Definitions.f`

```fortran
!DIR$ FREEFORM
module Abaqus_Definitions
  ! This module exports a kind parameter "abaqus_real_kind" that defines
  ! the real kind (precision) currently in use by Abaqus.
  ! This allows explict typing in Fortran user subroutines.

!DIR$ NOFREEFORM
!DIR$ FIXEDFORMLINESIZE:132
      include "vaba_param.inc"     ! Abaqus/Explicit
!DIR$ FREEFORM

  private

  ! Detect and export the Abaqus real kind precision
  parameter(a = 0)
  integer, parameter, public :: abaqus_real_kind = kind(a)

end module Abaqus_Definitions
!DIR$ NOFREEFORM
!DIR$ FIXEDFORMLINESIZE:132
```

### Example Usage

```fortran
module demo
  use iso_fortran_env, only: sp=>real32, dp=>real64
  use Abaqus_Definitions, only: wp=>abaqus_real_kind
  implicit none

  contains

  subroutine check_precision()
    real(sp), parameter :: pi_sp = 4.0*atan(1.0)      ! single precision
    real(dp), parameter :: pi_dp = 4.0d0*atan(1.0d0)  ! double precision
    real(wp), parameter :: pi_wp = 4.0d0*atan(1.0d0)  ! working precision

    write(*,*) "Single precision: ",pi_sp
    write(*,*) "Double precision: ",pi_dp
    write(*,*) "Abaqus precision: ",pi_wp
  end subroutine check_precision

end module demo
```