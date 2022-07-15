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

Whitespace can be a really helpful tool to improve readability as it helps to 
demonstrate _intent_. 

Consider the following expression, taken from the one dimensional 
[DefGen model](https://github.com/ACCIS/DefGen_1D), without whitespace:

```python
value = 2*xsi_l**0.5*(h/h0)*k*((k/(xsi_f**0.5*(h/h0)-k))**2+3)
```

Not only is this hard to read, but is prone to errors, for example, 
parentheses in the wrong place or incorrect 
[order of operations](https://en.wikipedia.org/wiki/Order_of_operations). 
If `value` is wrong, it will be hard to diagnose the problem. 

At the very least, adding whitespace to the expression can help.

```python
value = 2*xsi_l**0.5 * (h/h0) * k * ((k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3)
```

This can be taken one step further by using line continuation to spread the 
expression over several lines, as it is 
[in practice](https://github.com/ACCIS/DefGen_1D/blob/main/src/defgen/defgen.py#L301):

```python
value = ( 2*xsi_l**0.5 * 
         (h/h0) * 
         k * ( 
         (k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3
        ))
```

It is now more clear what was _intended_, and so errors can be fixed more easily. 
Consider if we had forgotten to add the parentheses around the 4th term, such 
that rather than `a * (b + 3)` we had `a * b + 3` 
(which evaluates as `(a * b) + 3`)

```python
value = ( 2*xsi_l**0.5 * 
         (h/h0) * 
         k * 
         (k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3
        )
```

Is much easier to diagnose than:

```python
value = 2*xsi_l**0.5 * (h/h0) * k * (k / (xsi_f**0.5 * (h/h0) - k) )**2 + 3
```


Another option for improving readability, is to introduce intermediate 
variables like:

```python
tmp = (k / (xsi_f**0.5 * (h/h0) - k) )**2  
value = (2*xsi_l**0.5) * (h/h0) * k * (tmp + 3)    
```

Most of the time, this is perfectly OK, however, it is important to be careful 
with variable naming here as `tmp` may already be used (and still needed) 
elsewhere in the code ([Writing small functions](./single-responsibility) can help with this, 
though). 
Additionally, this may add distract the reader ("Why are we holding on to this 
value? Is it important?") and can even sometimes affect the performance of code. 


```{admonition} Best Practice
Use whitespace to make code easier to read
```



### Indentation
Indentation is another form of whitespace that can be used to help readability. 
Some languages, like Python, enforce correct use of indentation and will not
run if incorrect.
Consider the difference between:

```c++
if (a > b){
int another_var = 5;
for(int i = 0; i < a; i++){
my_function(i, a, another_var);
if (i == 3){
print("Fourth iteration")
}
}
}
```

and:

```c++
if (a > b){
    int another_var = 5;
    for(int i = 1; i < a; i++){
        my_function(i, a, another_var);
        if (i == 3){
            print("Third iteration")
        }
    }
}
```

```{admonition} Best Practice
Use indentation to visually show nesting
```


## Comments
As mentioned above, comments should describe "why" the code is the way it is, 
not simply describe "what" the code does. 

Ideally, code should be self-documenting where possible, i.e. the "what" should 
be obvious from the code structure and variable names itself. 
Often, code which doesn't make sense without a comment is a sign that the code 
needs refactoring. 
Of course this is not always possible and these inherently complex/confusing 
sections of code should be commented with the 'what' to make the job of reading 
easier.

```{admonition} Best Practice
Try to write code that is 'self-documenting'
```

Comments that describe the "what" often simply duplicate our reading, and are 
"lies waiting to happen":

```python
# loop from 1 to 10  -- this is 'obvious' and unnecessary
for i = 1:10
    # if i is less than 5, do something, otherwise do other thing
    if i < 5:
        do_something
    else:
        do_other_thing
```

If we later change the threshold then we need to be careful to also update the 
comment.
Otherwise the comment and the code no longer agree and it can be extremely 
difficult, and often impossible, without more context to work out which is the 
'correct' value. 


Rather, it is better to include contextual comments, for example:

```python
for i = 1:10
    # when i is below 5, some physical property <...> is different and so we
    # need to solve the problem in a different way
    if i < 5:
        do_something
    else:
        do_other_thing
```

Although this is a contrived example, it shows that now I understand _why_ we
are switching between different functions. It is, of course, still possible that
the comment becomes out of sync with the code, however, because I know _why_ 
we are switching (thanks to the comment) I can more easily work out which value 
is correct, and update the wrong value. 

```{admonition} Best Practice
Use comments to explain _why_ you are doing something or add
extra context. Only use comments to explain "what" the code is doing when it 
isn't obvious from the code itself.
```

## Docstrings
As well as comments at the line-level, it is incredibly helpful to have comments
at the function-level too. 
These are often referred to as "Docstrings".

A Docstring gives information about:

* what the function does
* what inputs it expects, and in what format
* what will be returned
* An example of usage
* Any other relevant information - extra reading, computational complexity, 
  related functions, etc

There is no one particular format that works best for docstrings, and any format
which makes the above details clear is fine. 
With that being said, it can be helpful to format such docstrings in a 
particular way, to allow for automated documentation tools (e.g. 
[DoxyGen](https://www.doxygen.nl/index.html) 
or 
[Sphinx](https://www.sphinx-doc.org/en/master/)) 
to parse them and automatically create pretty docs. 

Sticking to such formats, particularly within a project, can make documentation 
an easier task. A popular format in Python is the 
[Numpy](https://numpydoc.readthedocs.io/en/latest/format.html) 
format, which looks like:

```python
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
```

A more complete example can be found 
[here](https://numpydoc.readthedocs.io/en/latest/example.html#example)

The other benefit to using an existing format is that you can install plugins 
to your editor to fill out the boilerplate for you. This makes the process of 
documenting your code much, much, quicker. 
See [IDEs and tools](IDEs-and-tools) for more.

Using Docstrings can also enable your editor to provide helpful tooltips while 
coding. 
Rather than having to search for the function and then spend some time 
working out how to use it, you can have the editor prompt you as you type. 

```{admonition} Best Practice
Write docstrings that explain what a function does and how
to use it. Configure your editor to automate parts of this process.
```


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
* Consistent coding style
    * Style guides, like this document, help developers be consistent within a 
    project. By adopting a consistent style it becomes easier to read other 
    people's code, as there is less to 'work out'.
    * The particular style that you choose tends to matter less than having 
    all developers on a project adhering to the guidelines. 
* Variable scope
    * Reducing the scope of your variables can make it easier to read and debug
    code. If I declare a variable, `my_var`, at the start of a script, and then
    don't use it until 10's or 100's of lines later, I may need to check all 
    these lines of code to make sure none have modified `my_var` when looking
    for a bug. Conversely, if I declare the variable and then immediately use 
    it, then I don't need to spend time checking the other code. This is, 
    unfortunately, not possible when using Fortran
