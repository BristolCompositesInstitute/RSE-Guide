# Write code for readability, maintainability, and clarity

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

## Function and variable naming


## Comments and docstrings


## Miscellaneous

* Folder structure
* Line Length
* Global variables
* Indentation

