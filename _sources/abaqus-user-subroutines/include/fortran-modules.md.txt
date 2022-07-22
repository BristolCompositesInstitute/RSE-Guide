Fortran modules contain definitions that are made accessible to programs, procedures,
and other modules through the `use` statement.
They can contain parameters, variables, type definitions, procedures, and interfaces.

Placing variables and procedures into modules has several important benefits:

1. Modules provide a scoped namespace for related variables and procedures
   which have to be explicitly imported
2. Modules automatically generate explicit interfaces which are required for
   modern procedures and which allow for better compile-time error detection
3. Modules can be used to logical organise code by collecting related procedures
   and variables together in the same module
4. Module code can be easily reused and combined by other subroutines without
   duplication

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


```{admonition} Further Recommendations
- Always use explicit typing in modules by adding the `implicit none`
  statement at the top. (See <a href="explicit-typing-abaqus.html">Explicit Typing with Abaqus<a/>)
- Only store one module per file, and keep the module name and filename
  the same.
```

