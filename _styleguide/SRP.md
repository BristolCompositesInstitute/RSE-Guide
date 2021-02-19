---
title: "Write small functions that do _one thing_, and do that _one thing_ well"
---

Also known as the [Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single-responsibility_principle) and closely related to [Separation of Concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns).

Writing small functions with a single responsibility makes it significantly easier to verify that it is doing what you expect, modify behaviours, as well as re-use the function later - all saving significant amounts of time.

Let's say we want to solve some problem, which needs some data loaded from a file. We could write a script that does this.

    # check filename is valid and open file   
    (a few lines)

    # read through file and collect data into arrays, converting the data at 
    # the same time, e.g. from ft to M and fahrenheit to C 
    (possibly tens of lines)

    # Work with the data to solve a problem according to some settings 
    (possibly hundreds of lines)

    # Process (sort/filter/normalise) values and plot data 
    (possibly tens of lines)


If this is just a quick experiment/prototype then this might be acceptable, but the code will be difficult (slower and more prone to mistakes) to debug/validate, modify or extend, or re-use elsewhere. 

## Best practice

Write small functions that do one thing, and do that one thing well. 
These functions should ideally have enough documentation to describe what they do, 

    filename = ...
    filetype = ...
    file = open_file(filename)

    data = load_from_file(file, filetype)
    data.temperature = f_to_c(data.temperature)
    data.distance = ft_to_m(data.distance)

    settings = configure_settings(method, timestep, constants, etc)
    solution = solve_problem(data, settings)

    processed_solution = filter_data(solution)

    axis_handle = plot(processed_solution)

This approach has a number of benefits. 

* Validation and testing
    * I can easily verify that a function, e.g. `filter_data`, is correct by creating some mock data, calling the function, and checking the output is expected - I don't need to wait for a possibly slow code to run to find out I made a mistake.
    * Debugging is much easier, for example: 
        * Since each function is doing less, I can more easily spot when assumptions or implementation details are incorrect.
        * If I know that a function behaves as expected, then I know the problem lies with the input data - I have narrowed my search.
        * Because functions have their own local variables, I don't have to worry about name collisions, i.e. a bug caused by accidentally overwriting another variable (which can be incredibly hard to notice). 
        This is because the code is less [_coupled_](https://en.wikipedia.org/wiki/Coupling_(computer_programming))
* Re-use
    * Once I have verified that `f_to_c` or `ft_to_m` works correctly; I can use the functions anywhere, without having to modify any code or risk mis-typing the conversion factors.
    * I can document precisely what a function does and what it expects (i.e. inputs and outputs), which makes it easier to
    * I don't have to worry about changing variable names when reusing the function, 
* Code extension
    * I can relatively easily allow different filetypes by modifying `load_from_file`, as long as it still returns the data in the format needed by `solve_problem`. 
    (Rather than duplicating the script, and changing the section which loads the file)
    * I can relatively easily extend the code to process multiple files, by wrapping the code in a loop. 
    (Rather than duplicating the script, and changing the filename)
* Re-factoring 
    * If I realise there is a more efficient way to, for example, filter the data, I can change the implementation of the function; Provided the output is still the same, all code that relies on `filter_data` will now benefit from the performance improvements.
* cognitive load
    * Humans only have a certain amount of 'working memory' - if you fill this with the details of _how_ the data is being converted, or _how_ the solution is being plotted, then you have less capacity to work out why what is causing the bug, or how to add some new feature.


