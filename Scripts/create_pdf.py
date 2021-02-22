"""
A simple script to generate a PDF of the style guide for internal versioning.
"""
import os
import subprocess
import shlex
import re

file_order = [
    "index.md",
    "_styleguide/code_for_readability.md",
    "_styleguide/SRP.md",
    "_styleguide/testing.md",
    "_styleguide/IDEs_and_tools.md",
    "_styleguide/version_control.md",
    "_styleguide/languages.md",
]

# delete contents of tmp file if it exists
open('tmp_output.md', 'w').close()

for file in file_order:
    with open(file, 'r') as f:
        ftext = f.read()
        matches = re.split("---\\ntitle: \"(.*?)\"(.|\n)*?---", ftext)


        with open(f"tmp_output.md", 'a') as tmp_output:
            tmp_output.write("# " + matches[1])
            tmp_output.write(matches[-1])
            tmp_output.write("\n\n")

command = ("pandoc " +
           "-V urlcolor=blue " +
           "-V geometry:margin=1in " +
           "--pdf-engine=pdflatex " +
           "tmp_output.md " +
           "-o styleGuide.pdf")
output = subprocess.run(shlex.split(command))

os.remove("tmp_output.md")



