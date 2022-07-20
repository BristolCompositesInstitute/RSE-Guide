---
title: "Write small functions that do _one thing_, and do that _one thing_ well"
---

Also known as the 
[Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single-responsibility_principle) 
and closely related to 
[Separation of Concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns).

Writing small functions with a _single responsibility_ makes it significantly 
easier to verify that it is doing what you expect, modify behaviours, and/or 
re-use the function later - all of which save significant amounts of time.

It is important to note that this _single responsibility_ might be something 
fairly complex and can change over time. 
Consider the code underneath a `plot()` function.
To the user, `plot()` does only one thing - "plots some data" - but underneath 
there are lots of steps, each potentially quite complex, which need to take 
place; axes need determining and drawing, data needs drawing, labels need 
printing, etc.
Therefore, `plot()`'s single responsibility is simply to coordinate, or act 
as 'glue' between, these steps. 
It would process the inputs and then call sub-functions which themselves have a 
single responsibilty - `draw_axes()`, `plot_data()`, `print_labels()`, or 
`plot_linear_trendline()` and so on. 
These might also be broken down further: `plot_data()` may likely need 
separate sub functions to `plot_data_points()` and `plot_interpolating_line()`. 
This way, when working with `print_labels()` I don't need to concern or distract
myself with the details of `draw_axes()` or `plot_data()`. 

```{admonition} Best Practice
Break code down into functions which do _one thing_ and do 
that _one thing_ well. When the _one thing_ is particularly complex, use sub
functions to break problems down into small manageable chunks.
```

Thinking of a meaningful function name can help us to recognise when we are 
trying to do too much at once. 
If we find ourselves wanting to use the word 'and' in a function name, 
e.g. `do_x_and_y()`, `load_and_process()`, `solve_and_output()`, this is often
the first indication that we should stop and think about breaking the function
into smaller chunks.

```{tip}
Functions which need 'and' to describe what they do are 
possibly doing too much.
```


## Benefits

* Validation and testing
    * I can easily verify that a function, e.g. `sort_data()`, is correct by 
    creating some mock data, calling the function, and checking the output is 
    expected. 
    * We don't have to endure the painful experience of a long running code, 
    taking hours or even days, failing at the last step because of a simple 
    mistake in the code. 
    * Debugging is much easier, for example: 
        * Since each function is doing less, I can more easily spot when 
        assumptions or implementation details are incorrect.
        * If I know that a function behaves as expected with a simple example, 
        but the function is not giving me the right answer, then we now know 
        the problem lies with the input data, narrowing the search for the bug.
        * Because functions have their own local variables, I don't have to 
        worry about name collisions, i.e. a bug caused by accidentally 
        overwriting another variable (which can be incredibly hard to notice). 
        This is because the code is less 
        [_coupled_](https://en.wikipedia.org/wiki/Coupling_(computer_programming))
* Re-use
    * Once I have verified that my function works correctly; I can use it 
    anywhere, without having to modify any code or risk mis-typing something.
    * I can document precisely what a function does and what it expects 
    (i.e. inputs and outputs), which makes it easier to
    * I don't have to worry about changing variable names when reusing the 
    function, 
* Code extension
    * I can relatively easily add new functionality, for example adding a 
    `plot_polynomial_trendline()` function that can be used instead of a linear
    trendline, rather than duplicating and editing one big single function
* Re-factoring 
    * If I realise there is a more efficient way to, for example, draw the 
    axes, I can easily change the implementation, ensuring it still returns a 
    set of axes, and let all code using `draw_axes()` share the benefits.
* Cognitive load
    * Humans only have a certain amount of 'working memory' - if you fill this 
    with the details of _how_ the labels are printed, or _how_ the data 
    is being plotted, then you have less capacity to work out what is causing 
    a bug or add new feature.


