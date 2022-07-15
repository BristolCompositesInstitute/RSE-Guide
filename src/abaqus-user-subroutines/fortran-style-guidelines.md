---
title: "Fortran Style Guidelines"
---

## Visual Layout

The visual layout of code heavily influences how easy it is to read by those
unfamiliar with it. Code with a good layout allows you to quickly recognise
familiar constructs such as functions, loops, if/else blocks, _etc._, and where
they start and end. Code layout is largely governed by whitespace, specifically:

- Indentation
- Blank lines
- Spacing around variables and operators
- Line length


### Format

Fortran has two standard formats for code layout:

- Fixed-form (legacy)
- Free-form

```{admonition} Recommendation
Where possible, use modern free-form Fortran instead of fixed-form.

<details>
<summary>Rationale</summary>
Fixed-form Fortran is a legacy format that should be avoided for several
reasons:
it reduces readability of the code;
it needlessly increases developer workload and;
it permits ambiguities that lead to obscure errors.
```

```{seealso}
__Abaqus:__ see [this guide](free-form-fortran-abaqus) for how to use free-form with Abaqus user subroutines.
```


### Indentation

```{admonition} Recommendation
Always indent the body of functions, subroutines, loops,
if/else blocks and similar such constructs.

<details>
<summary>Rationale</summary>
Indentation is a standard technique for visually communicating the structure of code
</details>
```

```{admonition} Recommendation
Do not use a different indentation for comments; always align comments __with__
their associated code.

<details>
<summary>Rationale</summary>
Using a different indentation for comments breaks up the indentation of code
constructs making it difficult to visualise where they start and end.
Comment visibility is enhanced by using a code editor with proper syntax highlighting.
</details>
```

__Example:__ *indent the function body and that of the `if` construct*

```fortran
function dot(a,b)
  real, intent(in) :: a(3)
  real, intent(in) :: b(3)
  real :: dot
  
  dot = sum(a*b)

  if (dot < 1d-8) then
    dot = 0
  end if
end function
```

```{caution}
Use SPACEs, __not TABs__, for indentation. TABs are not valid input characters
for Fortran.
```

Choose either 2, 3 or 4 spaces to representation 'one indentation level' and be
consistent throughout your code. Most code editors let you configure how many
spaces to indent when the TAB key is pressed.


### Blank lines

```{admonition} Recommendation
- Separate related blocks of code with 1 blank line
- Separate subroutines and functions with 2 blank lines
<details>
<summary>Rationale</summary>
Spacing out code with blank lines improves readability
</details>
```


### Line Length

```{admonition} Recommendation
Continue long statements onto newlines. Lines should not exceed 100 characters.
<details>
<summary>Rationale</summary>
Long lines may necessitate horizontal scrolling which obscures code.
Side-by-side editor configurations, which typically limit editor width to
half a screen, are increasingly common and useful for code development.
</details>
```

- In __fixed-form__ Fortran, statements are continued onto new lines by placing
any character in the 6th column of the next line
- In modern __free-form__ Fortran, statements are continued by terminating the line
with an ampersand `&`

__Example:__ *continuing a long statement in __fixed-form__ Fortran*

```fortran
      y = a0 + a1 * x**2 + a2 * x**3
     &    + a3 * x**4 + a4 * x**5 
```

__Example:__ *continuing a long statement in __free-form__ Fortran*

```fortran
y = a0 + a1 * x**2 + a2 * x**3  &
    + a3 * x**4 + a4 * x**5 
```


```{admonition} Recommendation
Do not use semicolons to place multiple statements on the same line.
<details>
<summary>Rationale</summary>
Placing multiple statements on one line reduces the readability of the code
by obscuring assignments and procedure calls since they are not immediately
visible upon reading through.
</details>
```


### Naming & Capitalisation

The naming of variables and procedures is important for conveying the
purpose and functionality of your code to those not familiar with it.

It is therefore important that your names are meaningful and accurately
describe the variable or procedure. Moreover, you should follow the
following recommendations for consistency and readability.


```{admonition} Recommendation
Use [__snake case__](https://en.wikipedia.org/wiki/Snake_case) for variables and
functions:

- All lowercase
- Separate words with underscores

__Examples:__ `linear_tolerance`, `calculate_damage()`

<details>
<summary>Rationale</summary>
Fortran is case-insensitive, so the same variable or function can be referenced
differently using different capitalisations. Using all lowercase is therefore
recommended to encourage consistency and avoid confusion for readers of the code.
</details>
```


```{admonition} Recommendation
Use __all lowercase__ for fortran keywords such as `if`, `end`, `function` *etc.*.

__All caps should not be used__ for fortran keywords - it is well known that all
caps has measurably reduced readability[^all-caps-readability]

<details>
<summary>Rationale</summary>
There is no need to highlight fortran keywords using case, since Fortran is
case-insensitive. Keyword visibility is enhanced by using a code editor with
proper syntax highlighting.
</details>
```


[^all-caps-readability]: <https://en.wikipedia.org/wiki/All_caps#Readability>




## Program Units

### Modules

Fortran modules contain definitions that are made accessible to programs, procedures,
and other modules through the `use` statement.
They can contain parameters, variables, type definitions, procedures, and interfaces.

Placing variables and procedures into modules has several important benefits:

1. Modules provide a scoped namespace for related variables and procedures
   which have to be explicitly imported
2. Modules automatically generate explicit interfaces which are required for
   modern procedures and which allow for better compile-time error detection

```{admonition} Recommendation

It is __strongly recommended__ that all auxilliary procedures and shared
variables are stored in modules.

<details>
<summary>Rationale</summary>
Modules enable the use of modern Fortran features and provide automatic
compile-time checking of procedure interfaces.

Module variables are shared
but do not suffer from the same problems as common block variables.
</details>
```

__Example:__
*Modules allow the use of __assumed-shape__ array arguments,*
*which do not need their dimensions to be passed in separately*

```fortran
module example_mod
! Everything in this module will be explicitly typed
implicit none

  integer, parameter :: dim = 3          ! shared constant
  integer, allocatable :: buckets(:)     ! shared dynamic array

contains

  ! Print matrix A to screen
  subroutine print_matrix(A)
    real, intent(in) :: A(:,:)  ! An assumed-shape dummy argument

    integer :: i

    do i = 1, size(A,1)
      print *, A(i,:)
    end do

  end subroutine print_matrix

end module example_mod
```

```{admonition} Further Recommendations

- Always use explicit typing in modules by adding the `implicit none`
  statement at the top. (See [Explicit Typing with Abaqus](./explicit-typing-abaqus))

- Only store one module per file, and keep the module name and filename
  the same.

```


### Subroutines and Functions

```{admonition} Recommendation
It is __strongly recommended__ that complex procedures are broken
down into multiple functions or subroutines to reduce complexity.

__Rationale:__
- Breaking up long procedures into smaller ones is a natural way to abstract
complex functionality and clarify code structure and intent.
- Small procedures with a clearly defined functionality are:
  - easier to conceptualise
  - easier to explain to others
  - easier to test and debug
```

```{tip}
Possible indications that a procedure is too long include:
- There are a large number of variable declarations are the start
- The procedure contains duplicated code
- The procedure spans more than twice the standard screen height
- The procedure has a large number of input arguments
```

```{note}
There is no need to place `return` at the end of a function or subroutine.
It serves no purpose, except to increase the number of lines of code.
```


### Procedure Arguments

```{admonition} Recommendation

Always specify the `intent` of procedure arguments:

- `intent(in)`: *read-only within the procedure*
- `intent(out)`: *modifiable, but undefined on entry to procedure*
- `intent(inout)`: *modifiable*

__Rationale:__
Specifying argument intent has two important benefits:
- It is self-documenting, providing vital information to readers of the code
- It is enforced by compile-time checks to avoid common errors
```

__Example:__

```fortran
subroutine intent_example(a,b)

  ! We read from a but not modify it
  integer, intent(in) :: a

  ! We can modify b, but it is not defined initially
  integer, intent(out) :: b

  if (a > 0) then
    b = a
  else
    b = 0
  end if

end subroutine intent_example
```


### End Statements

```{admonition} Recommendation
Always use the full end statement for a block instead of just `end` on its own

- `end if`
- `end do`
- `end block`

<details>
<summary>Rationale</summary>
Using the full end statement makes it easier to understand deeply nested code.
</details>

```


```{admonition} Recommendation
Always include the procedure or module name in the end statement

- `end module <module-name>`
- `end subroutine <subroutine-name>`
- `end function <function-name>`

<details>
<summary>Rationale</summary>
Using the full end statement makes it easier to navigate files with many procedures.
</details>

```