---
title: "Using Named State Variables"
---

This guide explains how to improve readability of your Abaqus user subroutine
by using named pointer variables to refer to state variables.


## Motivation

The standard approach to referencing state variables is to index
directly into the array in which they are defined:

__Example:__
```fortran

stateNew(i,1) = stateOld(i,2)*props(1) + props(2)

```

This has several disadvantages for code readability and maintainability:

1. __Obscurity:__ to readers unfamiliar with the code, it is unclear what
   state and property variables are being referenced. Readers must refer to
   separate documentation to explain which state variables are used.

2. __Robustness:__ as code evolves, state array definitions change.
   Documentation may easily become out-of-date with the code that it describes.

3. __Maintainability:__ adding, removing and redefining state variables
   is onerous and highly prone to error when they are not defined centrally.


This guide will demonstrate how to centralise the mapping of named state
variables to their respective arrays and thereby improve code readability and maintainability.


## Using Named State Pointer Variables

In Abaqus user subroutines, state variables are stored in a two-dimensional array
where the first subscript indexes the element/IP number and the second subscript
indexes the different state variables.

__Example:__
```fortran
stateNew(i,1)   ! First state variable for element i
```

As described above, this code is not self-describing and difficult to maintain
when changing the definition of the state variables array.

We can introduce named pointer variables to create aliases to columns of the state array.

__Example:__
```fortran
real(dp), pointer, contiguous :: damage(:)
real(dp), pointer, contiguous :: sig0(:)
...
damage => stateNew(:,1)
sig0 => stateNew(:,2)
```

In this example, `damage` is a 1D pointer variable __that behaves like any other Fortran array__
but which __refers to same memory__ as the first column of `stateNew`.

Hence we can refer the the first state variable using `damage` instead of `stateNew(:,1)`.

Moreover, we can add, remove or reorder our state variables by only changing the code
that defines the pointer mapping.


## Organising State Pointers into a Type (structure)

We can further organise our code by defining a custom type (structure) that contains all our
state variable pointers, and a corresponding subroutine to define the pointer mappings.

__Example:__ *Fortran type containing our state array pointers*

```fortran
type statevar_t
  real(dp), pointer, contiguous :: damage(:)
  real(dp), pointer, contiguous :: sig0(:)
  real(dp), pointer, contiguous :: failure(:)
  real(dp), pointer, contiguous :: elem_delete(:)
end type statevar_t
```

__Example:__ *Fortran subroutine to define the pointer mapping*

```fortran
subroutine get_statevars(state,state_array)
  type(statevar_t), intent(out) :: state
  real(wp), intent(in), target :: state_array(:,:)

  state%damage => state_array(:,1)
  state%sig0 => state_array(:,2)
  state%failure=> state_array(:,3)
  state%elem_delete => state_array(:,4)

end subroutine get_statevars
```

__Example:__ *Usage in your user subroutine*

```fortran
! Subroutine inputs
real :: stateOld_array(nblock,nstate)
real :: stateNew_array(nblock,nstate)

! Declare typed structures
type(statevar_t) :: stateOld, stateNew

! Setup pointer mapping
call get_statevars(stateOld,stateOld_array)
call get_statevars(stateNew,stateNew_array)

! Use the named structure variables
stateNew%sig0(i) = stateOld%sig0(i)
if (stateNew%damage(i) > 0.99) then
  stateNew%failure(i) = 1
  stateNew%elem_delete(i) = 0
end if

```

```{note}
- Readability of the user subroutine code is greatly improved since state variables
  are refered to by name
- Redefining state variables only requires modifying the `get_statevars` subroutine,
  not the main user subroutine code
- The layout of the state variables array is self-documented in the `get_statevars`
  subroutine - no need for separate/duplicate documentation
```
