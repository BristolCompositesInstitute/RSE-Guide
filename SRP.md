# Write small functions that do _one thing_, and do that _one thing_ well

Also known as the [Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single-responsibility_principle) and closely related to [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

Writing small functions with a single responsibility makes it significantly easier to verify that it is doing what you expect, modify behaviours, as well as re-use the function later - all saving significant amounts of time.

Let's say we want to gather some data from a file:

    # check filename is valid and open file   (a few lines)

    # read through file and collect data into arrays, converting the data from ft to M and fahrenheit to C at the same time  (possibly tens of lines)

    # Work with the data to solve a problem according to some settings (possibly hundreds of lines)

    # Process (sort/filter/normalise) values and plot data (possibly tens of lines)


If this is just a quick experiment/prototype then this might be acceptable, but there are a number of challenges here. We'll briefly go over the challenges, but feel free to skip to the 'Best Practice' section to see how this should be done.


## Validation (debugging and testing)


## Code re-use


## Code extension or modification

* Input data format modified
* Want to run the code on different files




* what if the plot isn't what we expect? 
* How do we check each section is working properly? 
* What if we want to re-use sections in some other code?
    * What if we want to use the code to load data, but don't want the conversion?
    * What if we want to use the plotting code, but don't want the sorting/filtering?
* What if the input data needs to change format?

These challenges are, of course, all able to be overcome; we can add breakpoints in the code to check the previous code is working, we can strip out the bits we don't want when re-using the code, we can change the variables the data is read in to (and update the rest of the script accordingly). 

However, this means we need to debug the entire script, that we need to modify and write extra code to re-use past efforts, and need to remember  humans are forgetful andthis is all error-prone. 


More often than not we might also be tempted to, for example, convert the units as we load the data. Or perhaps we process the data as we plot it. Again, this is probably acceptable for a small throwaway script, but if we try to re-use the plotting code (which is a very common thing to do) then we spend some time trying to debug the plotting code which "works fine in my other script" to then realise that our data isn't in the right units.

The point is, humans are forgetful and when code tries to do too many things we make mistakes. 
We call this code tightly [_coupled_](https://en.wikipedia.org/wiki/Coupling_(computer_programming)). 

This is where the _Single Responsibility Principle_ comes in. (Closely related is the [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)) 

## Best practice

Write small functions that do one thing, and do that one thing well. 
These functions should ideally have enough documentation to describe what they do, 

    filename = ...
    filetype = ...
    file = open_file(filename)

    data = load_from_file(file, filetype)
    data.force = kN_to_N(data.force)
    data.temperature = f_to_c(data.temperature)
    data.distance = ft_to_m(data.distance)

    settings = configure_settings(method, timestep, constants, etc)
    solution = solve_problem(data, settings)

    processed_solution = filter_data(solution)

    axis_handle = plot(processed_solution)

This approach has a number of benefits. 

* Validation and testing
    * I can easily verify that a function, e.g. `filter_data`, is correct by creating some mock data, calling the function, and checking the output is expected - I don't need to wait for a possibly slow code to run to find out I made a mistake.
    * I can very easily verify that `f_to_c` works correctly.
* Re-use
    * I can use the function `f_to_c` or `ft_to_m` anywhere, without having to modify any code or risk mis-typing the conversion factors.
* Code extension
    * I can relatively easily allow different filetypes by modifying `load_from_file`. I may not even need to touch the analysis script, provided `load_from_file` still returns the data in the format needed by `solve_problem`. (Rather than duplicating the script, and changing the section which loads the file)
    * I can relatively easily extend the code to process multiple files, by wrapping the code in a loop. (rather than duplicating the script, and changing the filename)
* cognitive load
    * Humans only have a certain amount of 'working memory' - if you fill this with the details of _how_ the data is being converted, or _how_ the solution is being plotted, then it will be harder to comprehend the bigger picture. 


