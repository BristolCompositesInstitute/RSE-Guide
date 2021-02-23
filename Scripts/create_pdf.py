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

output_text = ""

for file in file_order:
    with open(file, 'r') as f:
        ftext = f.read()
        matches = re.split("---\\ntitle: \"(.*?)\"(.|\n)*?---", ftext)

        output_text += "# " + matches[1]
        output_text += matches[-1] + "\n\n"

output_text = re.sub("{: .notice--info}", "", output_text)

with open("tmp_output.md", "w") as out_file:
    out_file.write(output_text)

command = ("pandoc " +
           "-V urlcolor=blue " +
           "-V geometry:margin=1in " +
           "--pdf-engine=pdflatex " +
           "tmp_output.md " +
           "-o styleGuide.pdf")
output = subprocess.run(shlex.split(command))

os.remove("tmp_output.md")



