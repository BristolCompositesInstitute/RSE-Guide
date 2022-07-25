---
title: "Free-form Fortran with Abaqus"
---

## Free form vs. Fixed-form

Fortran has two standard formats for code layout:

- Fixed-form (legacy)
- Free-form

The default in Abaqus is to expect Fortran user subroutines to be written
in fixed-form Fortran.
However, fixed-form Fortran is a legacy format that should be avoided
for a number of reasons:

- it reduces readability of the code
- it needlessly increases developer workload
- it permits ambiguities that lead to obscure errors

__For these reasons, it is recommended that free-form Fortran is used
as much as possible.__

This guide will demonstrate how to override the default Abaqus behaviour
and allow the use of Free-form Fortran in your user subroutines.

__Further reading:__ Learn more about Fixed-form vs Free-form in
*"Source Form Just Wants to be Free"*[^dr_fortran_freeform]

## Using Free-form with Abaqus

```{caution}
The information in this guide refers to the Intel Fortran compiler only.
```

There are two approaches to using free-form Fortran with Abaqus:

1. Add the `-free`/`/free` flag to the compiler options in the `abaqus_v6.env` file
2. Use compiler directives to indicate free-form source files

The second approach is recommended here since it does not introduce reliance
of the user subroutine on the contents of the `abaqus_v6.env` file.

```{seealso}
See the [__sample repository__](https://github.com/BristolCompositesInstitute/abaqus-modern-fortran)
on Github which gives a complete working example of the concepts presented
in this guide.
```

### Indicating Free-form with Compiler Directives

```{note}
Compiler directives are special comments added to code, that are not part
of the Fortran code, but which convey information to the compiler about
the code.
```

The compiler directive for indicating that code is free-form is:

```fortran
!DIR$ FREEFORM
```

This is placed at the start of the file to indicate that all code following
the directive is in free-form.

We also need to place the following directives at the end of the file to
'deactivate' the free-form mode when this file is included with other files:

```fortran
!DIR$ NOFREEFORM
!DIR$ FIXEDFORMLINESIZE:132
```

__Example:__

```fortran
!DIR$ FREEFORM

! This subroutine is written in free-form
subroutine free_form_example(a,b)
  integer, intent(in) :: a
  integer, intent(out) :: b

  if (a > 0) then
    b = a
  else
    b = 0
  end if

end subroutine free_form

!DIR$ NOFREEFORM
!DIR$ FIXEDFORMLINESIZE:132
```


### Abaqus Include Files

Abaqus user subroutines typically need to include one or more Abaqus definition
files such as `aba_param.inc`/`vaba_param.inc` and `SMAAspUserSubroutines.hdr`.

These files are written in fixed-form and so errors will occur if you include
them in a source file marked as free-form.

We can remedy this by using compiler directives around the include statements
to temporarily enter fixed-form mode:

```fortran
subroutine free_form_example(a)

!DIR$ NOFREEFORM
!DIR$ FIXEDFORMLINESIZE:132
      include "aba_param.inc"
!DIR$ FREEFORM

end subroutine free_form_example
```

```{seealso}
See the guide on [Explicit Typing with Abaqus](explicit-typing-abaqus)
for how to avoid Abaqus include files completely.
```


[^dr_fortran_freeform]: <https://stevelionel.com/drfortran/2013/01/11/doctor-fortran-in-source-form-just-wants-to-be-free/>