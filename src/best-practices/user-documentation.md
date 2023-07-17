---
title: "Help other users and developers with good documentation"
---

Writing good user documentation to help others get started with your code is more
useful than writing lots of comments in your code.

## READMEs

If you are publishing your code on an internal or public Git repository,
you should always include a README document with at least the following information:

 - A brief (one sentence) description of what the code does
 - A list of the code author(s)
 - An email address for someone who is currently responsible for the code (maintainer)
 - What dependencies the code has (python libraries, conda, abaqus, gcc etc.)
 - A 'Quickstart' guide for how to get the code running on a simple example


Additional information that is good to include:
 - Which operating systems are supported (Windows, Linux)
 - References to relevant academic papers (if any)
 - Detail on any user inputs (input files, material card etc.)
 - Project status
    - *Alpha* - core functionality not yet completed
	- *Beta* - feature-complete (core functionality), still undergoing testing and documentation
	- *Released, active development* - feature-complete, stable interface, new features in development
	- *Released, maintenance only* - no new features in development, a maintainer is contactable for support and bug fixes
	- *Archived/legacy* - not under active development and no maintainer available to contact


## User Documentation

For larger projects with multiple users, it is recommended to write dedicated user documentation
in a separate place to the main README file. In this case it is better to keep the README short
and instead add links to key parts of the separate user documentation.

```{admonition} Recommendation
We recommend using the [Sphinx](https://docs.readthedocs.io/en/stable/intro/getting-started-with-sphinx.html)
generator to write dedicated user documentation.
 - See the [Abaci online documentation](https://bristolcompositesinstitute.github.io/abaci/)
  for an example of documentation generated with Sphinx.
```

When writing dedicated user documentation, it is recommended to have the following:

- __Quickstart tutorial:__ a tutorial covering how to get started from scratch, including
  installing, configuring and running the code

- __How-to guides:__ dedicated guides, with examples, for how to perform specific tasks

- __Reference documentation:__ complete and detailed documentation for all user inputs such as
  input files and command-line flags