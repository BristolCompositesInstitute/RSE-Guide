---
title: "Fortran Guidelines"
---

This section provides general guidelines for Fortran code developed in the
Bristol Composites Institute. These guidelines have been developed to encourage
best-practices that avoid common pitfalls and to ensure consistency across all
projects.


```{contents}
---

---
```


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

Be consistent with the number of spaces used per indentation level.

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


## Style

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

__Examples:__
- `linear_tolerance`
- `calculate_damage()`

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


### Comments

Code should ideally be as self-documenting as possible, not requiring
excessive comments to explain it. This means:
- Using informative names for variables and functions
- Break code into self-contained functions/subroutines that each have
  a single clearly defined task

```{admonition} Recommendation
Write clear code that does not need excessive comments to explain
```

```{seealso}
See the <a href="../best-practices/code-for-readability.html#comments">Best Practices Guide on Comments</a>.
```

There are some scenarios where the use of comments is recommended:

- Use comments to concisely explain the purpose and methodology of each
  function or subroutine in your code
  (see <a href="../best-practices/code-for-readability.html#docstrings">Docstrings</a>)

- Use comments to explain obscure bug-fixes or workarounds that have no
  obvious interpretation alone

- Use comments to label the end of loops for nested loops



### Variable Declarations

````{admonition} Recommendation
Use the full double-colon syntax for all parameter and variable declarations.

__Examples:__
```fortran
integer, parameter :: n = 100
integer :: m
real :: tolerance
real :: parameters(n)
```

<details>
<summary>Rationale</summary>
Using the double-colon syntax everywhere improves
readability and ensures all declarations are consistent with those
that include attributes.
</details>
````


````{caution}

__Do NOT assign to variables in the declaration statement:__

```fortran
integer :: iter = 10  ! NOT RECOMMENDED
```

This is not normal initialisation, it implies the `save` attribute which
means that the variable retains its value between procedure calls.

Good practice is to initialise your variables separately to their declaration:

```fortran
integer :: iter
iter = 10
```

This does not affect assignment to parameters at declaration which is okay:

```fortran
integer, parameter :: N_MAX = 1E6    ! This is okay
```

````



## Numerical


### Declaring Double Precision Reals

```{admonition} Recommendation
Define a parameter `dp` at the top of your module and use it
to declare double precision reals.

<details>
<summary>Rationale</summary>
Other forms of double precision declaration are not portable across
different platforms and compilers.
</details>
```


__Option 1 (recommended):__ *Use the intrinsic 64 bit (double precision) floating point kind*
```fortran
  use iso_fortran_env, only: dp=>real64
```

__Option 2:__ *Request a specific (minimum) precision `p` and exponent range `r`*
```fortran
  integer, parameter, private :: dp = selected_real_kind(p=15, r=307)
```

__Example usage:__
```fortran
module demo
  use iso_fortran_env, only: sp=>real32, dp=>real64
  implicit none

  real(sp), parameter :: pi_sp = 3.141593_sp
  real(dp), parameter :: pi_dp = 3.14159265358979_dp

end module demo
```


```{caution}
You must use a precision __suffix__ when writing double precision constants
anywhere within your code, otherwise they will be truncated to single precision.

__Example:__ `real(dp), parameter :: a1 = 0.588375419731621_dp`

```

__Further reading:__ Learn more about Fortran variable kinds in *"It Takes All KINDS"*[^dr_fortran_kinds]


### Integer Division


```{caution}
Be careful when performing division with integer variables:
- If all variables in the expression are integers, then an integer division
will occur which will return the result rounded-down to the nearest integer.

Floating-point division will occur if at least one of the variables in the
expression is a `real`:
- You can use the `real()` function to convert an integer to a real, *e.g.* `real(N,dp)`

```


## Program Units

### Modules

```{seealso}
See the [Using Fortran Modules](using-fortran-modules) for more information
on how to modularise your user subroutine code.
```

```{include} include/fortran-modules.md
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

As a general rule, it is recommended to choose between subroutines and functions based on the following:

__Use a function:__ 
 - if your procedure calculates and returns a single scalar, or a small fixed-size array __and__;
 - if your procedure does not modify its input arguments

__Use a subroutine:__ 
 - if your procedure calculates and returns multiple values and/or;
 - if your procedure returns a large or variable-sized array and/or;
 - if your procedure modifies its input arguments



### Procedure Arguments

```{admonition} Recommendation

Always specify the `intent` of procedure arguments:

- `intent(in)`: *read-only within the procedure*
- `intent(out)`: *modifiable, but undefined on entry to procedure*
- `intent(inout)`: *modifiable*

__Rationale:__
Specifying argument intent has two important benefits:
- It is self-documenting, providing important information to readers of the code
- It is enforced by compile-time checks to avoid common errors
```

__Example:__

```fortran
subroutine intent_example(a,b)

  ! We can read from a but not modify it
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



## Checking Code Correctness

```{caution}
Even if your code compiles and runs, this is __no guarantee__ that your code is correct.
Memory errors and undefined behaviour can easily hide in your code without symptom
if you're not using extra checks and testing.
 - Always use testing and compiler checks to ensure there are no errors
```

Most Fortran compilers can enable additional compile-time and runtime checks to
ensure the correctness of the code you have written.

```{admonition} Recommendation
If you are developing Abaqus user subroutines, you can easily enable these extra code checks
using the [Abaci](https://bristolcompositesinstitute.github.io/abaci/) tool with the
`--debug` option.
```

The following compiler options are recommended for enabling extra checks:


| Compiler                | Compiler Options for Extra Checks                 |
|-------------------------|---------------------------------------------------|
| Intel Fortran (Linux)   | `-g -check all -gen-interfaces -warn interfaces`  |
| Intel Fortran (Windows) | `/Z7 /check:all /gen-interfaces /warn:interfaces` |
| gfortran                | `-g -fbacktrace -Wall -fcheck=bounds`             |


These options will:

- Check for out-of-bounds array accesses
- Check if a variable is used before it is defined or allocated
- Check that argument types match between interface definitions and routine calls (Intel compiler only)


```{hint}
Always use compiler checks when you are writing and testing new code, but don't
forget to disable them when you're finished since the added checks slow down code execution.
```


## Banned Features

```{admonition} Background
Backwards-compatibility is very important for the Fortran standard due to the
age of the language and consequently large amount of legacy code still in use.
This means that many legacy features remain in the language standard despite
their use being strongly discouraged or them being made obsolete.
```

The following features of Fortran __should not be used:__

### `goto` statement

`goto` statements are universally acknowledged as bad programming practice
since they obscure the control flow of the program and are highly error-prone.
Moreover, they have been entirely superseded by
structured programming constructs[^structured_programming]
which includes familiar concepts such as conditional blocks (`if/else`), loops
and functions.

```{hint}
The following statements __can be__ used instead of `goto` for common scenarios:

- __`return`__ - return from a function or subroutine early
- __`cycle`__ - jump straight to the next loop iteration, skipping the rest of the loop body
- __`exit`__ - exit out of a loop, skipping all remaining iterations
```


### `common` block

A common block defines an area of memory which is globally accessible by all
functions and subroutines and which persists between invocations thereof.

Commmon blocks __should not be used__ since their definition is allowed to
vary between different functions, which can permit subtle errors to occur
without an obvious symptom.

```{admonition} Recommendation
Use modules for persistent variables, that need to be accessible from multiple
functions.
```


### `equivalence` statement

Equivalence statements __should not be used__, they are complex and error-prone.
Pointers or derived types should be used instead.


### Labelled `do` loop

Use an `end do` statement instead.




[^all-caps-readability]: <https://en.wikipedia.org/wiki/All_caps#Readability>

[^structured_programming]: <https://en.wikipedia.org/wiki/Structured_programming>

[^dr_fortran_kinds]: <https://stevelionel.com/drfortran/2017/03/27/doctor-fortran-in-it-takes-all-kinds/>