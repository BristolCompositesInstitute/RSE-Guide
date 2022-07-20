---
title: "IDEs and automatic tools"
---

The key message of this section is that using a good editor, and spending time
to learn its features effectively, will make developing code more 
straightforward, quicker, and less error-prone as less effort must be spent on
mundane or tedious tasks.

Useful features such as keyboard shortcuts, auto-completion, linting, and
quick 'jump-to' navigation, may seem like trivial bonus features, but using 
them will make software development significantly easier. 

First, these features reduce the time we need to spend on mundane tasks and 
boilerplate code, and are much less error prone at doing so. 
Second, by reducing the mental cost of these mundane tasks it is easier to 
focus on the problem at hand.

There is a course on the topic of IDEs and debugging run by the UoB RSE group. 
Although the course focuses on PyCharm and VSCode, the principles remain fairly
general to most IDEs. 
[RSE Course on IDEs and Debugging](https://milliams.com/courses/ides_debugging/)

```{admonition} Best Practice
Use a good editor and spend time familiarising yourself with
the features and keyboard shortcuts available. 
```

## Syntax Highlighting and Linting
Syntax highlighting is perhaps the most visually obvious difference when using 
a more advanced editor. Consider the difference between:

```text
def apply_discount(price, rel_discount, abs_discount=0):
    """Applies a discount to a price
    """
    return (price - abs_discount) * (1 - rel_discount)

my_values = np.arange(10)
for value in my_values:
    print(f"Original price: {value}. 10% off: {apply_discount(value, 0.1)}"))
```

```python
def apply_discount(price, rel_discount, abs_discount=0):
    """Applies a discount to a price
    """
    return (price - abs_discount) * (1 - rel_discount)

my_values = np.arange(10)
for value in my_values:
    print(f"Original price: {value}. 10% off: {apply_discount(value, 0.1)}")

```

By using different colours to represent different types of word or term, it is
easier to visually separate sections of code and spot errors. There are many 
different colour themes out there - pick the one that works best for you.

```{admonition} Best Practice
Use syntax highlighting to emphasise key features in code
```


Code linting is very similar to the spelling and grammar checks (and squiggly 
lines) we are all familiar with in programs like Microsoft Word. 
A linter will look through your code for grammatical mistakes and/or formatting
issues, such as typos and missing semi-colons, using functions incorrectly, or
even just that the code layout could be better.

```{admonition} Best Practice
Configure code linting in your IDE.
```

## Auto completion (Intellisense), Snippets, and Auto Documentation
Auto completion is a fantastically helpful tool for writing code, as it makes 
us less prone to typos, encourages better naming (without having to type more),
and reduces the amount of variable and function names we need to hold in our
memory. 

A snippet (similar to a macro) allow you to easily insert boilerplate text
into your document to reduce typing and the risk of mistakes. 
For example, to print something to the screen in C++ you need to type

```c++
std::cout << "Text to print" << std::endl;
```

Most of this text is just there to tell the computer I want to print something 
and add a newline at the end, which is tedious write, typo-prone, and not 
particularly important to the programmer. 
To speed this up I can create a snippet in my editor so that when I type `cout`
and press tab, it automatically expands to 

```c++
std::cout << "" << std::endl;
```

and places the cursor between the quotes, ready to type. 

```{admonition} Best Practice
Write snippets for commonly used boiler plate code.
```

We can also apply snippets for helping us to write documentation in a 
consistent format.
For example 'doc' could be configured to expand to

```
<summary here>

Parameters
----------
<param_name> : <param_type>
    <param_description>

Returns
-------
<return_type>
    <return_value_description>
```

We can then replace the hints with the useful information, without having to 
remember the required layout or forgetting to add certain information - 
allowing us more mental capacity to focus on the content.

These snippets can be tailored (or multiple versions created) to the particular
format required, e.g. for Doxygen:

```
/**
* @brief <one line summary>
*
* <extended summary (optional)>
*
* @param <param_name> <param_description>
* @return <what is returned>
*/
```

Building upon these relatively simple snippets, many editors allow for plugins 
that automatically configure these snippets for us. 
In addition, many will even attempt to fill certain parts in automatically - 
such as parameter names and types. 

```{admonition} Best Practice
Use automatic documentation plugins to make writing docs 
more straightforward. If plugins aren't available, create snippets that do 
most of the heavy lifting for us.
```


## Keyboard shortcuts
Shortcuts can be incredibly helpful for improving your productivity, and making
tedious/laborious tasks trivial. 
As a result, they allow us to focus on the complex task at hand, rather than 
the steps required to manipulate the code. 

For example, most people would prefer to use `ctrl + c` and `ctrl + v`, as it 
is far less distracting, and more subconcious, than having to click through an 
options menu. 

```{admonition} Best Practice
Spend time learning the keyboard shortcuts for your editor. 
```

Here are a few useful shortcuts, in VS Code, for writing software:

* Jump to function definition (`F12`)
* Move to start/end of line (`home/end`)
* Move cursor to next word (`ctrl + left/right`)
* Select text by word (`ctrl + shift + left/right`)
* Move a line up or down (`alt + up/down`)
* Delete a line (`shift + del`)
* Copy a line up or down (`shift + alt + up/down`)
* un-indent (`shift + tab`)
* multi-line edit (`ctrl + alt + up/down`)

## Debugging
A good IDE will make debugging code significantly easier, as they make it
possible to step through code line-by-line. 
Quite often, bugs are introduced because the programmer incorrectly _assumes_ or
_expects_ a certain behaviour. 
Stepping through code line-by-line allows us to see the _actual_ values and 
identify any false assumptions.

Debugging code is a massive topic, and learning to use all the tools available
will make this painful task that much easier.

For a good resource on using a debugger, please see the UoB RSE 
[Course on IDEs and Debugging](https://milliams.com/courses/ides_debugging/).

```{admonition} Best Practice
Learn how to use debugging tools in your IDE.
```




