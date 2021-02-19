---
title: "Write code for readability, maintainability, and clarity"
---

It is generally accepted that reading code is harder than writing code (even 
when reading our own code). This is because when we write code we have some 
amount of contextual information in our brain's 'working' memory; When we read 
code, particularly code that isn't ours, this context isn't available, making 
it harder to connect the dots.
This is why we write comments to help explain the context, or the _why_. 

When writing code, it is helpful to bear readability in mind, so that we can 
make small tweaks now, e.g. variable names, comments, code layout etc, that 
will help save time in the future.


## Whitespace and parentheses

When programming, whitespace can be a really helpful tool to improve readability as it helps to demonstrate _intent_. 

Consider the following expression, taken from the one Dimensional [DefGen model](https://github.com/ACCIS/DefGen_1D), without any whitespace:

    value = 2*xsi_l**0.5*(h/h0)*k*((k/(xsi_f**0.5*(h/h0)-k))**2+3)

Not only is this incredibly hard to read, but is prone to errors, for example, parentheses in the wrong place or incorrect [order of operations](https://en.wikipedia.org/wiki/Order_of_operations). 
If value is wrong, it will be hard to diagnose the problem. 

At the very least, adding whitespace to separate sections of the expression can help readability.

    value = 2*xsi_l**0.5 * (h/h0) * k * ((k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3)

This can help to identify mistakes such as those mentioned above. 

This can be taken one step further by using line continuation to spread the expression over several lines, as it is [in practice](https://github.com/ACCIS/DefGen_1D/blob/main/src/defgen/defgen.py#L301):

    value = ( 2*xsi_l**0.5 * 
             (h/h0) * 
             k * ( 
               (k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3
             ))

It is now clear what was _intended_, and so errors can be fixed more easily. Consider if we had forgotten to add the parentheses around the 4th term, such that rather than `a * (b + 3)` we were evaluating as `(a * b) + 3`. 

    value = ( 2*xsi_l**0.5 * 
             (h/h0) * 
             k * 
             (k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3
             )

Is much easier to diagnose than:

    value = 2*xsi_l**0.5 * (h/h0) * k * (k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3


Another option for improving readability, would be to introduce intermediate variables such as:

    tmp = (k / (xsi_f**0.5 * (h/h0) - k) )**2  
    value = (2*xsi_l**0.5) * (h/h0) * k * (tmp + 3)    

However, it is important to be careful and clear with variable naming here as
`tmp` may already be used (and still needed) elsewhere in the code, and may also
cause the reader to think "Why are we holding on to this value? Is it important?"
which may distract from the main code. 
[Writing functions that do _one thing_, and do that _one thing_ well]() can help 
to reduce such name collisions, though. 

### Indentation
Indentation is another form of whitespace that can be used to help readability. 
Indeed, languages like Python enforce correct use of indentation and will throw
errors if incorrect.
Consider the difference between:

    if (a > b){
    int another_var = 5;
    for(int i = 0; i < a; i++){
    my_function(i, a, another_var);
    if (i == 3){
    print("Fourth iteration")
    }
    }
    }

and:

    if (a > b){
        int another_var = 5;
        for(int i = 0; i < a; i++){
            my_function(i, a, another_var);
            if (i == 3){
                print("Fourth iteration")
            }
        }
    }

## Comments and docstrings
As mentioned above, comments should describe "why" the code is the way it is, 
not simply describe "what" the code does. 

We should strive to write self-documenting code where possible, that is, the 
"what" should be obvious from the code itself. 
If it isn't, then it is a sign that the code needs re-structuring or variable/function names rethinking. 
Of course, this is not always possible and these inherently complex/confusing 
sections of code should be commented with the 'what' to make the job of reading 
easier.

Comments that describe the "what" often simply duplicate our reading, and are 
"lies waiting to happen":

    # loop from 1 to 10  -- this is obvious and unnecessary
    for i = 1:10
        # if i is less than 5, do something, otherwise do other thing
        if i < 5:
            do_something
        else:
            do_other_thing

Not only is the comment adding nothing that isn't clear from the code, but if we
later change the threshold from, say, 5 to 7, then we need to be careful to also
update the comment.
Otherwise the comment and the code no longer agree and it can be extremely 
difficult, and often impossible, to work out which is the 'correct' value. 

Rather, it is better to include contextual comments, for example:

    for i = 1:10
        # when i is below 5, some physical property <...> is different and so we
        # need to solve the problem in a different way
        if i < 5:
            do_something
        else:
            do_other_thing

Although this is a contrived example, it shows that now I understand _why_ we
are switching between different functions. It is, of course, still possible that
the comment becomes out of sync with the if statement value, however, 
because I know _why_ we switching I can more easily work out which value is 
correct (and update the wrong value).

### Docstrings
As well as comments at the line-level, it is incredibly helpful to have comments
at the function-level too. 
These are often referred to as "Docstrings".

A Docstring gives information about:

* what the function does
* what inputs it expects, and in what format
* what will be returned
* An example of usage
* Any other relevant information - extra reading, computational complexity, related functions, etc

There is no one particular format that works best for docstrings, and any format
which makes the above details clear is fine. 
With that being said, it can be helpful to format such docstrings in a 
particular way, to allow for automated documentation tools (e.g. 
[DoxyGen](https://www.doxygen.nl/index.html) 
or 
[Sphinx](https://www.sphinx-doc.org/en/master/)) 
to parse them and automatically create pretty docs. 

Sticking to such formats, particularly within a project, can be useful to make
documentation easier. A popular format in Python is the 
[Numpy](https://numpydoc.readthedocs.io/en/latest/format.html) 
format, which looks like:

    def my_function(quantity, price):
        """ One line summary of function

        More verbose/extended description of function

        Parameters
        ----------
        quantity : int
            The first argument. Describe acceptable values and units.
            The quantity of units to process, must be integral and >= 0.
        price : float
            The price per item in GBP
        
        Returns 
        -------
        float
            The total cost to buy `quantity` items at `price` per item. 

        See Also
        --------
        Link to a document/paper that the function is based on

        Examples
        --------
        >>> quant = 5
        >>> price = 1.54
        >>> my_function(quant, price)
        7.7
        """

A more complete example can be found [here](https://numpydoc.readthedocs.io/en/latest/example.html#example)

The other benefit to using an existing format is that you can install plugins 
to your editor to fill out the boilerplate for you. This makes the process of 
documenting your code much, much, quicker. 

Using Docstrings in a particular format can also allow your editor to read them
and provide helpful tooltips while coding. 
Rather than having to find the file the function is in, find the function, 
and then spend some time trying to work out what format the inputs should be, 
you can have the editor prompt you as you type. 

See [TODO ADD LINK TO IDE AUTOMATION] for more.


When writing modules of code which are passed around as a single file, rather 
than as part of a larger project, it is often common to also include information
such as developer name and contact details, version number, and a changelog. 
Although this can be helpful, this information is already contained 
elsewhere when using [version control (TODO LINK TO VERSION CONTROL)] and so
adding this information at the top of a file is mostly optional.


## Style Guides
Style guides help developers be consistent within a project. By adopting a 
uniform style, it becomes easier to read other people's code.
Although the particular style guide that you adopt (or create!) does not matter, 
it is important that all developers within the project agree to the same guide. 

Various languages have their own recommended style and these should be adopted
in the first instance, unless there is good motivation to deviate. 

See 
TODO: add links to language specific pages 
for more information on each language.

## Miscellaneous
As well as the main points of guidence above, there are a few other things that
can help make software development more straightforward

* Folder structure
    * Organise your code into a `src` folder
    * Put reference/example data in `data` or `test_data`
    * Have a folder `docs` for documentation such as user guides and tutorials
    * Put scripts that run simulations into `scripts`
    * If you include other code in your project, consider an `include` folder
    * Add a README.md file at the top level that tells users how to install, 
    run, and get started with your code.
* Variable scope
    * Reducing the scope of your variables can make it easier to read and debug
    code. If I declare a variable, `my_var`, at the start of a script, and then
    don't use it until 10's or 100's of lines later, I may need to check all 
    these lines of code to make sure none have modified `my_var` when looking
    for a bug. Conversely, if I declare the variable and then immediately use 
    it, then I don't need to spend time checking the other code. This is, 
    unfortunately, not possible when using Fortran
