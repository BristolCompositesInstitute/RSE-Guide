## General repository overview
The site is made up of a number of markdown files, mostly in 
`/_styleguide/`, which are rendered into HTML using Jekyll. 

The theme is 
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
as this provides good flexibility in the design, and has a good depth and range 
of documentation.

Pages in `/_styledguide/` form a 'collection', and are automatically grouped
[(see here)](https://accis.github.io/StyleGuide/styleguide/) and assigned 
the same style according to the settings in `_config.yml` under `defaults`.
The page which shows the whole collection is provided by `/_pages/styleguide.md`

Navigation in the sidebar is provided by `/_data/navigation.yml`


## Set up and run a local version

Install prerequisites from [Jekyll](https://jekyllrb.com/docs/) 
(Ruby, RubyGems, GCC, and Make)

Install Jekyll and bundler 

    gem install jekyll bundler

Navigate to the directory containing the Gemfile, i.e. the root directory 
of this repo

    cd path/to/source/Gemfile

Install the required Gems

    bundle install

Now we're ready to launch the local host

    bundle exec jekyll serve

Which can then be viewed at 

    http://localhost:4000/StyleGuide/


## Creating a PDF document
To be able to archive this guide following the UTC conventions, a PDF needs 
generating. 
This is achieved using [Pandoc](https://pandoc.org/index.html) and Python 3.x. 

Installation of Pandoc is very simple, on Windows at least, as it is all taken
care of using the [installer](https://pandoc.org/installing.html). 

Once installed, the PDF can be generated using the python script by:

    python Scripts/create_pdf.py

Only core Python libraries are needed, so there is no need to configure any 
virtual environments. 


The markdown files are appended into a single file according to `file_order` in
`/Scripts/create_pdf.py` and then passed through to pandoc using `subprocess`.
Accordingly, the structure of the PDF can be easily modified and extended. 
The [documentation](https://pandoc.org/MANUAL.html) for Pandoc is rather extensive, and provides a number of 
ways that the style of the generated PDF can be modified, though these have not
been investigated thoroughly.

## Deploying a new version
New development should take place on (or branched from, and PRd back) the Main 
branch. 
Once ready to update the [website](https://accis.github.io/StyleGuide/), the 
`gh-pages` branch will need updating to point to the tip of the Main branch. 
This is achieved by:

    git checkout gh-pages
    git rebase main
    git push

When deploying a new version, a PDF must be generated with the internal version
number adorned on the first page.

The following text should be added as the first content after the YAML header:

    Internal version number: <version reference>

To get the version number, please talk to
Matt Edwards ([m.edwards@bristol.ac.uk](mailto:m.edwards@bristol.ac.uk))
or
Stephen Hallett ([Stephen.Hallett@bristol.ac.uk](mailto:Stephen.Hallett@bristol.ac.uk))

It is helpful to create a local branch or tag to denote which commit relates 
to which internal version. 



