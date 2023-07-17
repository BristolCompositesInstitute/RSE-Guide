---
title: "Don't assume your code does what you think - test it."
---

Testing our code is an incredibly important part of software development, as it
allows us to be confident that it is doing what is expected. Most people are 
probably already doing some form of testing or checking to ensure correct 
behaviour; perhaps by visually inspecting the resulting plot, or checking for
non-physical behaviour, command line/interpretter experimentation, or 
comparing against previous results. 

This is a great start, but we can make our lives easier in the long run by 
going a step or two further. Consider the following sections in order of 
importance, with the most important first.

The UoB RSE team provides a course on 
[Best Practices in Software Engineering](https://milliams.com/courses/software_engineering_best_practices/),
of which testing code is a significant fraction of. 

## Make validation and tests easy to run
The first thing to do is make the tests _easy to run_. A validation case that 
takes a lot of manual steps to even start is going to be run far less often 
than if it can be initiated in one or two simple steps. 

Let's say we're using a scripting language like Python or Matlab, and we 
iteratively test some new functionality through the interpretter. This might 
involve setting up some variables or loading some data, some manipulation of 
this data using a function we have just made, and then plotting the results. 
Once we have the plot that we want, we can decide whether our code is working 
or not. 

When we have confirmed the method we need to 
***recreate the steps in a script***. 
By spending 5-10 minutes gathering the steps into a script (and perhaps tidying
up our plot with a title, axis labels, etc) we can now re-run this test with 
the push of a button. 

Even if we still need to manually inspect the output to assess validity, we have
massively helped ourselves if we need to debug some functionality in the future. 
We don't need to try to remember the steps we took to prove the method worked, 
and if we run the test and all is normal then we have very quickly narrowed 
our search for the bug. 

```{admonition} Best Practice
Recreate interactive testing/exploration sessions in a script
that can be easily run in the future.
```

## Test small bits of code at a time
Everyone is guilty of sometimes writing 10s or 100s of lines of code without 
even compiling/running the code, let alone test for correct behaviour. Sometimes
this is unavoidable - half-finished code is often unlikely to run. This, 
however, is often a sign that we are trying to do too much (with the code) at
once and should consider [breaking sections down](single-responsibility.md). 

It is easier to test small sections of code, simply because there are less 
things that can go wrong. 

For example, if I have a function that loads some data into a 
particular format, it is easier to create some dummy data and test just 
this function, than it is to find a bug in a large script where loading data
is just one small section.

Likewise, it is relatively easy to verify that a function which, for example, 
calculates gradients, inverts a matrix, or sorts some data is working as 
expected.

It is always easier to test part of a module, than the whole module. It is 
always easier to test a module, than a collection of modules.

By testing the expected behaviour of a small unit, and ***saving the steps***
required to re-test the behaviour in the future, we will naturally start to
build a catalogue of test cases which can be easily run when trying to debug
our code. 

```{admonition} Best Practice
Work iteratively by breaking large tasks into small ones, 
and testing each small unit as it is written.
```


## Use test frameworks to simplify the process
At the point, it is worth noting that there are tools out there to help us 
with testing code by making them _easy to run_. 

By spending a little time to format our test scripts into a specific format, 
we are now able to run _all_ of our tests with a single command. With lots of
small tests checking various aspects of our entire code, that can be run easily
and, ideally, quickly, we can quickly spot when a new change to code breaks 
something we had forgotten about.

Framework examples: 
[PyTest - Python](https://docs.pytest.org/en/stable/), 
[GoogleTest - C++](https://github.com/google/googletest), 
[MATLAB test framework](https://uk.mathworks.com/help/matlab/matlab-unit-test-framework.html)

For an example of how to use PyTest, see the 
[UoB RSE course](https://milliams.com/courses/software_engineering_best_practices/)

__For Abaqus user subroutines:__ is is strongly recommended that you use
[__Abaci__](https://bristolcompositesinstitute.github.io/abaci/) for testing
and debugging your Fortran code.

If you need help getting started with a test framework, please get in touch 
with the RSE team ([ask-rse@bristol.ac.uk](mailto:ask-rse@bristol.ac.uk))

```{admonition} Best Practice
Use test frameworks to make testing code easier.
```

## Other benefits of testing
Test frameworks and [Version Control](version-control.md) work exceptionally 
well together, and are the key componenents of the popular software engineering
buzz-term "Continuous Integration". 

Since all of our tests can now be run with a single command, it is possible 
to get a computer to do this automatically for us before we release a new 
version of the software. 
This means that we never forget to run the tests, and don't release code that 
breaks previous functionality. 



