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

Firstly, these features reduce the time we need to spend on mundane tasks and 
boilerplate code, and are much less error prone at doing so. 
Secondly, by reducing the mental cost of these mundane tasks it is easier to 
focus on the problem at hand.

There is a course on the topic of IDEs and debugging run by the UoB RSE group. 
Although the course focuses on PyCharm and VSCode, the principles remain fairly
general to most IDEs. 
[RSE Course on IDEs and Debugging](https://milliams.com/courses/ides_debugging/)

**Best Practice:** Use a good editor and spend time familiarising yourself with
the features and keyboard shortcuts available. 
{: .notice--info}

* Syntax highlighting
    * Perhaps the most visually obvious difference when using a more advanced
    editor. 
    * By using different colours to represent different types of word or term,
    it is easier to visually separate different sections of code and more
    easily spot errors
* Linting
    * Code linting is very similar to the spelling and grammar checks (and 
    squiggly lines) we are all familiar with in programs like Microsoft Word. 
    * A linter will look through your code for grammatical mistakes and/or 
    formatting issues, such as typos and missing semi-colons, using functions
    wrong, or even just that the code layout could be better.
* Auto completion (Intellisense)
    * The editor will make guesses at what variable or function name we want
    and allow us to insert the word without typing it all out.
    * Auto completion makes code much less prone to typos, encourages better 
    variable naming (without having to type more), and reduces the amount of 
    names we need to hold in our memory. 
* Snippets and Auto Documentation
    * A snippet (similar to a macro) allow you to easily insert boilerplate text
    into your document to reduce typing and the risk of mistakes. For example, 
    to print something to the screen in C++ you need to type
    `std::cout << "Text to print" << std::endl;`. Most of this text is just 
    there to tell the computer I want to print something and add a newline at 
    the end, which is tedious write, typo-prone, and not particularly important 
    to the programmer. To speed this up I can create a snippet in my editor
    so that when I type `cout` and press tab, it automatically expands to
    `std::cout << "" << std::endl;` placing the cursor between the quotes. 
    * We can apply snippets for helping us to write documentation in a 
    consistent format, for example 'doc' could be configured to expand to

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
    * We can then replace the hints with the useful information, without 
    having to remember the required layout or forgetting to add certain 
    information - allowing us more mental capacity to focus on the content.
    * The snippet can be tailored (or multiple added) to the particular format
    required, e.g. for Doxygen:

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
    * Building upon these relatively simple snippets, many editors allow for 
    plugins that configure these snippets for us. In addition, many will 
    attempt to fill certain parts in automatically - such as parameter names
    and types. 
* Keyboard shortcuts
    * Shortcuts can be incredibly helpful for improving your productivity. 
    They allow us to focus on the complex task at hand, not think about the 
    steps required to manipulate the text. Most people would prefer to use 
    `ctrl + c` and `ctrl + v`, as it is less distracting and more subconcious,
    than have to click through an options menu. 
    * It is well worth spending some time reading about the shortcuts available 
    in your editor - this is an ideal task for a coffee-break or in those ten
    minutes between meetings where you can't do anything else productive. 
    * Some useful shortcuts (and what they are in VS Code): 
        * Jump to function definition (`F12`)
        * Move to start/end of line (`home/end`)
        * Move cursor to next word (`ctrl + left/right`)
        * Select text by word (`ctrl + shift + left/right`)
        * Move a line up or down (`alt + up/down`)
        * Delete a line (`shift + del`)
        * Copy a line up or down (`shift + alt + up/down`)
* Debugging
    * A good IDE will also make debugging code significantly easier, as they 
    make it possible to step through code line-by-line. Quite often, bugs are
    introduced because the programmer incorrectly assumes or expects a certain 
    behaviour. Stepping through code line-by-line allows us to see the _actual_ 
    values of variables, and detect these invalid assumptions.
    * For a good resource on using a debugger, please see the UoB RSE 
    [Course on IDEs and Debugging](https://milliams.com/courses/ides_debugging/)




