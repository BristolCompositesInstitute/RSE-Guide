---
title: "Version Control"
---

Keeping track of different versions of software is incredibly important and 
beneficial, particularly as other people start to use our work. 

When talking about 'version control' there are two subtly different topics 
which are important to differentiate

* Versioning
* Version control

## Versioning (Version numbering)
Versioning refers to the labels that we give to different versions of the 
software, e.g. version 1.0, version 2.3, etc.

It is important to be consistent when deciding how to increment version numbers,
as it can help those that depend on our code to understand any potential 
implications on their work. 

A simple and popular versioning system is called 
[Semantic Versioning](https://semver.org/), which follows the 
`MAJOR.MINOR.PATCH` philosphy where:

* MAJOR version when you make incompatible public API changes
* MINOR version when you add functionality in a backwards compatible manner
* PATCH version when you make backwards compatible bug fixes

**Best Practice:** Use a version numbering system such as Semantic Versioning.
{: .notice--info}

What is an API?  
API stands for 'Application Programming Interface' and describes how different
bits of code, internally _or_ externally, interact with each other. 
An interface is as simply as a function signature, for example:

    def apply_discount(price, discount):
        """Applies a discount to a price

        Parameters
        ----------
        price : float
            The original price of the item, in gbp
        discount : float
            The discount to apply as a percentage, expressed as a decimal
            e.g. 0.1 for a 10% discount

        Returns
        -------
        float
            The adjusted price
        """
        return price * (1 - discount)

Here, the interface for `apply_discount` specifies that it must receive the 
`price` and then the `discount` and it will return the adjusted price. 

Other sections of the code will eventually use/rely on this function and its
interface. 


### Breaking Change 

Later, we may decide to modify the functionality to be able to apply a fixed
discount and a percentage discount:

    def apply_discount(price, abs_discount, rel_discount):
        """Applies a discount to a price

        Parameters
        ----------
        price : float
            The original price of the item, in gbp
        abs_discount : float
            A fixed discount to remove from the price
            This is applied _before_ the relative discount
        rel_discount : float
            A proportional discount to apply as a percentage, expressed as a decimal
            e.g. 0.1 for a 10% discount
            Applied after the fixed discount is applied

        Returns
        -------
        float
            The adjusted price
        """
        return (price - abs_discount) * (1 - rel_discount)

Now we have changed the interface to thr function in a _breaking_ way. Anywhere
that uses the function `apply_discount(price, discount)` will need modifying, 
e.g. to `apply_discount(price, 0, discount)`, such that code still works. 

However, if this function is part of the 'public' interface, that is, you have
told other people that it exists (through the documentation) and others are 
using/depending on this code, then you won't be able to change their code - 
_which will now break_.

In this case, we should increment the `MAJOR` version to signal to users that
if they want to update to the latest version, some old stuff may break.

It is also *_CRITICAL_* that you convey this information in the release 
documentation or changelog. 

### Non-breaking change
Where possible, you should prioritise code modifications that are backwards 
compatible. For example, 

    def apply_discount(price, rel_discount, abs_discount=0):
        """Applies a discount to a price

        Parameters
        ----------
        price : float
            The original price of the item, in gbp
        rel_discount : float
            A proportional discount to apply as a percentage, expressed as a decimal
            e.g. 0.1 for a 10% discount
            Applied after the fixed discount is applied
        abs_discount : float, optional
            A fixed discount to remove from the price
            This is applied _before_ the relative discount
            Default = 0

        Returns
        -------
        float
            The adjusted price
        """
        return (price - abs_discount) * (1 - rel_discount)

We have added the ability to apply an absolute discount, however, the default
is 0 such that any previous calls to `apply_discount(price, discount)` will
still behave in the same way. The code is _backwards compatible_. 

In this case we should increment `MINOR` to signal to users that the newer 
version contains new functionality, but old code should still work as expected. 

**Best Practice:** Prefer code modifications that wont break existing code.
{: .notice--info}


## Version Control (Git)
Version control, on the other hand, deals with how such multiple versions are 
handled and tracked in an convenient way - rather than ending up with a file 
called `my_file_version_3_supervisor_edits_bug_fix_3`. 
In addition to preventing long and error prone filenames, Version Control 
tools make collaborative code development much, much, easier.

**Best Practice:** Use Git as a version control tool when developing software.
{: .notice--info}

There are many Version Control tools out there, however, by far the most 
popular now is [Git](https://git-scm.com/about). 

Building on top of Git, there are now many online platforms that make publically
sharing and distributing our code significantly easier, such as 
[GitHub](https://github.com/) and [GitLab](https://about.gitlab.com/).

Although Git may seem complex and daunting at first, once you have learnt the
basics you will realise that 95\% of using git relies on just a handful of 
commands, which essentially boil down to
* Select which modifications you would like to save
* Describe the modifications
* Commit (save) the changes
* Push (upload) the changes to a service like GitHub or GitLab (optional)

There are many Git tutorials out there, however, we recommend following the 
course created by the Bristol Research Software Engineering team, 
[here](https://chryswoods.com/introducing_git/).

**\*\*_All new code projects should use Git to track versions_\*\***

Within ACCIS we have access to both GitHub and GitLab services. 
The [GitHub](https://github.com/ACCIS) organisation makes publishing code more
straightforward (although private projects are still possible), however, might 
be hosted on international servers. 

The GitLab server is locally hosted within the University which gives us 
greater control over issues such as Export Control. 

For information about the GitLab server (e.g. how to access it), or for any
queries relating to Git in general, please contact 
Matt Edwards ([m.edwards@bristol.ac.uk](mailto:m.edwards@bristol.ac.uk))
or
Stephen Hallett ([Stephen.Hallett@bristol.ac.uk](mailto:Stephen.Hallett@bristol.ac.uk))












