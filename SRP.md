## Write small functions that do _one thing_, and do that _one thing_ well

Also known as the [Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single-responsibility_principle).

Writing small functions with a single responsibility makes it significantly easier to verify that it is doing what you expect, modify behaviours, as well as re-use the function later - all saving significant amounts of time.

Let's say we want to gather some data from a file, we might create a script which does all of this in one go:

    # check filename is valid
        
    # open file

    # read through file and collect data into arrays, converting the data from kN to N at the same time

    # Work with the data to solve a problem

    # Process (sort/filter/normalise) values and plot data
    

If this is just a quick experiment/prototype then this might be acceptable, but:

* what if the plot isn't what we expect? 
* How do we check each section is working properly? 
* What if we want to re-use sections in some other code? We might need to change variable names to match up, we might forget to load the data in a certain way, we might forget to convert units? 
* What if the input data needs to change format?

More often than not we might also be tempted to, for example, convert the units as we load the data. Or perhaps we process the data as we plot it. Again, this is probably acceptable for a small throwaway script, but if we try to re-use the plotting code (which is a very common thing to do) then we spend some time trying to debug the plotting code which "works fine in my other script" to then realise that our data isn't in the right units.

The point is, humans are forgetful and when code tries to do too many things we make mistakes. 
We call this code tightly [_coupled_](https://en.wikipedia.org/wiki/Coupling_(computer_programming)). 

This is where the _Single Responsibility Principle_ comes in. (Closely related is the [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)) 
