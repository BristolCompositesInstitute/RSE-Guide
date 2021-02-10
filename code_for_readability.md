# Write code for readability, maintainability, and clarity
There is a 



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


## Function and variable naming


## Comments and docstrings


## Miscellaneous

* Folder structure
* Line Length
* Global variables
* Indentation

