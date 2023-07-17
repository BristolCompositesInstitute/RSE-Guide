Search.setIndex({"docnames": ["abaqus-user-subroutines/explicit-typing-abaqus", "abaqus-user-subroutines/fortran-style-guidelines", "abaqus-user-subroutines/free-form-fortran-abaqus", "abaqus-user-subroutines/include/fortran-modules", "abaqus-user-subroutines/index", "abaqus-user-subroutines/namelist-material-properties", "abaqus-user-subroutines/using-fortran-modules", "abaqus-user-subroutines/using-named-variables", "best-practices/IDEs-and-tools", "best-practices/code-for-readability", "best-practices/index", "best-practices/languages", "best-practices/single-responsibility", "best-practices/testing", "best-practices/user-documentation", "best-practices/version-control", "guides/getting-started-with-git", "guides/index", "index"], "filenames": ["abaqus-user-subroutines/explicit-typing-abaqus.md", "abaqus-user-subroutines/fortran-style-guidelines.md", "abaqus-user-subroutines/free-form-fortran-abaqus.md", "abaqus-user-subroutines/include/fortran-modules.md", "abaqus-user-subroutines/index.md", "abaqus-user-subroutines/namelist-material-properties.md", "abaqus-user-subroutines/using-fortran-modules.md", "abaqus-user-subroutines/using-named-variables.md", "best-practices/IDEs-and-tools.md", "best-practices/code-for-readability.md", "best-practices/index.md", "best-practices/languages.md", "best-practices/single-responsibility.md", "best-practices/testing.md", "best-practices/user-documentation.md", "best-practices/version-control.md", "guides/getting-started-with-git.md", "guides/index.md", "index.md"], "titles": ["Explicit Typing with Abaqus", "Fortran Guidelines", "Free-form Fortran with Abaqus", "&lt;no title&gt;", "Abaqus User Subroutines", "Reading Material Properties from a Namelist File", "Using Fortran Modules", "Using Named State Variables", "IDEs and automatic tools", "Write code for readability, maintainability, and clarity", "RSE Best Practices", "Language Specific Styles", "Write small functions that do <em>one thing</em>, and do that <em>one thing</em> well", "Don\u2019t assume your code does what you think - test it.", "Help other users and developers with good documentation", "Version Control", "Getting started with Git", "RSE Guides", "BCI Research Software Engineering Guide"], "terms": {"backward": [0, 1, 15], "compat": [0, 1, 15], "i": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16], "veri": [0, 1, 5, 6, 8, 9, 13], "import": [0, 1, 3, 6, 8, 9, 12, 13, 15], "fortran": [0, 3, 4, 7, 13, 18], "standard": [0, 1, 2, 5, 7], "due": [0, 1], "ag": [0, 1], "languag": [0, 1, 5, 9, 10, 13, 18], "consequ": [0, 1], "larg": [0, 1, 13], "amount": [0, 1, 8, 9, 12], "legaci": [0, 1, 2, 14], "code": [0, 2, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 16, 18], "still": [0, 1, 9, 12, 13, 14, 15, 16], "us": [0, 1, 3, 4, 8, 9, 11, 12, 14, 15, 16, 18], "thi": [0, 1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16], "mean": [0, 1, 6, 13], "mani": [0, 1, 5, 8, 11, 15, 16], "featur": [0, 3, 4, 6, 8, 12, 14], "remain": [0, 1, 8], "despit": [0, 1], "being": [0, 1, 7, 9, 12], "discourag": [0, 1], "them": [0, 1, 2, 5, 6, 8, 9, 13], "made": [0, 1, 3, 6, 13], "obsolet": [0, 1], "One": [0, 9], "strongli": [0, 1, 3, 4, 6, 13], "which": [0, 1, 2, 3, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16], "describ": [0, 1, 5, 6, 7, 9, 12, 15], "where": [0, 1, 5, 6, 7, 9, 13, 15], "variabl": [0, 3, 4, 5, 6, 8, 9, 12, 13, 18], "need": [0, 1, 2, 6, 7, 8, 9, 12, 13, 15], "have": [0, 1, 3, 6, 8, 9, 12, 13, 14, 15, 16], "declar": [0, 7, 9], "explicitli": [0, 1, 3, 6], "rather": [0, 6, 8, 9, 12, 15], "implicitli": 0, "infer": 0, "base": [0, 1, 9], "first": [0, 5, 6, 7, 8, 9, 12, 13, 15, 16], "letter": 0, "The": [0, 1, 2, 4, 6, 7, 8, 9, 11, 13, 15, 16], "default": [0, 2, 15], "rule": [0, 1], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16], "name": [0, 3, 4, 5, 6, 8, 9, 12, 18], "begin": 0, "j": [0, 6], "k": [0, 9], "l": 0, "m": [0, 1], "n": [0, 1, 5], "integ": [0, 2, 5, 6], "all": [0, 1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15, 16], "other": [0, 1, 2, 3, 6, 7, 9, 10, 11, 15, 16, 18], "real": [0, 5, 6, 7], "sinc": [0, 1, 2, 6, 7, 12, 13], "easili": [0, 1, 3, 6, 7, 8, 9, 12, 13], "lead": [0, 1, 2], "error": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13, 15], "difficult": [0, 1, 5, 7, 9], "detect": [0, 1, 3, 4, 6], "user": [0, 1, 2, 7, 9, 10, 11, 12, 13, 15, 16, 18], "subroutin": [0, 2, 3, 7, 11, 13, 18], "usual": 0, "guid": [0, 1, 2, 4, 5, 6, 7, 9, 11, 14], "explain": [0, 1, 6, 7, 9], "how": [0, 1, 2, 6, 7, 8, 9, 12, 13, 14, 15, 16], "write": [0, 1, 5, 8, 10, 11, 13, 14, 18], "when": [0, 1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16], "disabl": [0, 1, 6], "must": [0, 1, 5, 6, 7, 8, 9, 15], "ad": [0, 1, 2, 3, 6, 7, 9, 12, 15], "follow": [0, 1, 2, 5, 6, 9, 11, 13, 14, 15, 16], "statement": [0, 2, 3, 6], "program": [0, 3, 4, 6, 8, 15], "unit": [0, 4, 9, 13], "none": [0, 1, 3, 5, 6, 9], "place": [0, 1, 2, 3, 6, 8, 9, 12, 14], "after": [0, 15], "ani": [0, 1, 6, 7, 8, 9, 12, 13, 14, 15, 16], "modul": [0, 3, 4, 5, 13, 18], "befor": [0, 1, 6, 13], "test": [0, 1, 10, 12, 14, 18], "b": [0, 1, 2, 9], "iso_fortran_env": [0, 1, 6], "onli": [0, 1, 2, 3, 6, 7, 9, 12, 14, 16], "dp": [0, 1, 6, 7], "real64": [0, 1, 6], "intent": [0, 1, 2, 5, 6, 7, 9], "out": [0, 1, 2, 5, 6, 7, 8, 9, 12, 13, 15, 16], "3": [0, 1, 5, 6, 7, 9, 15, 16], "0d0": 0, "end": [0, 2, 5, 6, 7, 8, 15], "defin": [0, 1, 5, 6, 7], "float": [0, 1, 5, 9, 15], "point": [0, 1, 5, 6, 9, 13], "precis": [0, 6, 12], "allow": [0, 1, 2, 3, 5, 6, 8, 9, 13], "switch": [0, 9], "between": [0, 1, 8, 9, 12], "singl": [0, 1, 4, 5, 12, 13], "doubl": [0, 6], "includ": [0, 1, 6, 9, 11, 14], "file": [0, 1, 3, 4, 6, 9, 11, 14, 15, 18], "aba_param": [0, 2], "inc": [0, 2], "vaba_param": [0, 2], "depend": [0, 14, 15], "one": [0, 1, 2, 3, 6, 8, 9, 10, 13, 14, 18], "whether": [0, 13], "you": [0, 1, 2, 5, 6, 8, 9, 10, 12, 14, 15, 16, 18], "run": [0, 1, 4, 8, 9, 12, 14], "determin": [0, 5, 12], "pass": [0, 6], "your": [0, 1, 2, 4, 5, 7, 8, 9, 10, 14, 16, 18], "instead": [0, 1, 5, 6, 7, 12, 14], "directli": [0, 7], "our": [0, 6, 7, 8, 9, 13, 15], "we": [0, 1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15], "can": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 15, 16], "an": [0, 1, 5, 8, 9, 11, 13, 14], "extract": 0, "inform": [0, 1, 2, 8, 9, 14, 15], "from": [0, 1, 3, 4, 6, 9, 14, 15, 16, 18], "rest": [0, 1], "see": [0, 1, 2, 3, 5, 6, 8, 9, 11, 13, 14], "sampl": [0, 2, 6], "repositori": [0, 2, 6, 14], "github": [0, 2, 6, 15, 16], "give": [0, 2, 6, 9, 12, 15], "complet": [0, 2, 6, 9, 14, 16], "work": [0, 2, 6, 8, 9, 12, 13, 15, 16], "concept": [0, 1, 2, 6], "present": [0, 2, 6], "step": [0, 6, 8, 9, 12, 13, 17], "1": [0, 1, 2, 5, 6, 7, 8, 9, 15], "print": [0, 5, 8, 9, 12], "below": [0, 9], "save": [0, 1, 9, 12, 13, 15], "new": [0, 1, 12, 13, 14, 15, 16], "same": [0, 1, 3, 5, 6, 7, 15], "folder": [0, 6, 9], "main": [0, 6, 7, 9, 14], "2": [0, 1, 5, 6, 7, 9, 15], "top": [0, 1, 3, 6, 9, 15], "level": [0, 1, 4, 6, 9], "wp": [0, 6, 7], "syntax": [0, 1, 6], "abaqus_real_kind": 0, "4": [0, 1, 6, 7], "come": 0, "statenew": [0, 7], "dir": [0, 2, 6], "freeform": [0, 2, 6], "export": [0, 15], "kind": [0, 1, 6], "paramet": [0, 1, 3, 6, 8, 9, 15], "current": [0, 14], "explict": 0, "nofreeform": [0, 2, 6], "fixedformlines": [0, 2, 6], "132": [0, 2, 6], "privat": [0, 1, 15], "0": [0, 1, 2, 5, 6, 7, 8, 9, 15], "public": [0, 14, 15], "demo": [0, 1], "sp": [0, 1], "real32": [0, 1], "contain": [0, 1, 3, 4, 5, 6, 7, 15], "check_precis": 0, "pi_sp": [0, 1], "atan": 0, "pi_dp": [0, 1], "pi_wp": 0, "section": [1, 4, 5, 8, 9, 13, 15], "provid": [1, 3, 6, 9, 11, 13, 16], "gener": [1, 3, 4, 5, 8, 9, 14], "develop": [1, 2, 4, 8, 9, 10, 13, 15, 18], "bristol": [1, 13, 15, 16], "composit": [1, 15], "institut": [1, 15], "These": [1, 2, 8, 9, 12], "been": [1, 5, 6], "encourag": [1, 8], "best": [1, 6, 11, 16, 18], "practic": [1, 6, 11, 16, 18], "avoid": [1, 2, 6], "pitfal": 1, "ensur": [1, 12, 13], "consist": [1, 8, 9, 15], "across": 1, "project": [1, 9, 14, 15], "heavili": 1, "influenc": 1, "easi": 1, "read": [1, 2, 4, 6, 9, 18], "those": [1, 15], "unfamiliar": [1, 7], "good": [1, 6, 8, 10, 11, 18], "quickli": [1, 13], "recognis": [1, 12], "familiar": [1, 8, 16], "construct": 1, "els": [1, 2, 9, 16], "etc": [1, 9, 12, 13, 14, 15], "thei": [1, 3, 6, 7, 8, 12, 15], "start": [1, 2, 8, 9, 13, 14, 15, 17, 18], "govern": 1, "whitespac": 1, "specif": [1, 5, 10, 13, 14, 18], "space": [1, 6], "around": [1, 2, 9], "oper": [1, 5, 9, 14], "ha": [1, 2, 3, 5, 6, 7, 14], "two": [1, 2, 6, 7, 13, 15], "fix": [1, 4, 9, 14, 15], "form": [1, 4, 6, 9, 13, 18], "free": [1, 4, 6, 16, 18], "possibl": [1, 2, 8, 9, 13, 15, 16], "modern": [1, 3, 6], "rational": [1, 3, 6], "should": [1, 2, 6, 9, 11, 12, 13, 14, 15], "sever": [1, 3, 5, 6, 7, 9, 16], "reason": [1, 2, 16], "reduc": [1, 2, 8, 9], "readabl": [1, 2, 5, 6, 7, 10, 18], "needlessli": [1, 2], "increas": [1, 2], "workload": [1, 2], "permit": [1, 2], "ambigu": [1, 2], "obscur": [1, 2, 7], "abaqu": [1, 3, 7, 11, 13, 14, 18], "alwai": [1, 3, 6, 9, 13, 14], "bodi": 1, "similar": [1, 8], "Be": 1, "number": [1, 2, 4, 5, 7], "per": [1, 3, 6, 9, 16], "techniqu": 1, "commun": 1, "structur": [1, 4, 9], "differ": [1, 5, 6, 7, 8, 9, 15], "align": 1, "associ": [1, 5], "break": [1, 6, 12, 13], "up": [1, 6, 8, 13, 15, 16], "make": [1, 6, 8, 9, 12, 15], "visualis": 1, "visibl": 1, "enhanc": 1, "editor": [1, 8, 9], "proper": [1, 5], "highlight": 1, "exampl": [1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15], "dot": [1, 9], "sum": 1, "1d": [1, 7], "8": [1, 5, 11], "tab": [1, 8], "valid": [1, 12], "input": [1, 5, 7, 9, 12, 14], "charact": [1, 5, 6], "choos": [1, 9], "either": 1, "represent": 1, "throughout": 1, "most": [1, 8, 9, 13, 15], "let": [1, 12, 13], "configur": [1, 8, 9, 14, 16], "kei": [1, 5, 8, 13, 14], "press": [1, 8], "separ": [1, 5, 6, 7, 8, 12, 14], "relat": [1, 3, 6, 9, 12], "improv": [1, 7, 8, 9], "continu": [1, 9, 13], "long": [1, 12, 13, 15], "onto": 1, "newlin": [1, 8], "exce": 1, "100": [1, 9, 13], "mai": [1, 7, 8, 9, 12, 15, 16], "necessit": 1, "horizont": 1, "scroll": 1, "side": 1, "typic": [1, 2], "limit": [1, 5], "width": 1, "half": [1, 13], "screen": [1, 8], "increasingli": 1, "In": [1, 5, 6, 7, 8, 14, 15], "6th": 1, "column": [1, 7], "next": [1, 5, 8, 17], "termin": [1, 16], "ampersand": [1, 5], "y": 1, "a0": 1, "a1": 1, "x": 1, "a2": 1, "a3": 1, "a4": 1, "5": [1, 9, 13], "semicolon": 1, "multipl": [1, 5, 6, 8, 14, 15], "assign": 1, "call": [1, 5, 6, 7, 12, 15], "immedi": [1, 9], "upon": [1, 8], "through": [1, 3, 6, 8, 13, 15, 16], "convei": [1, 2, 15], "purpos": 1, "It": [1, 3, 5, 6, 9, 12, 13, 15, 16], "therefor": [1, 5, 12, 16], "meaning": [1, 12], "accur": 1, "moreov": [1, 7], "snake": 1, "case": [1, 5, 6, 13, 14, 15], "lowercas": 1, "word": [1, 8, 12], "underscor": 1, "linear_toler": 1, "calculate_damag": 1, "insensit": 1, "so": [1, 2, 8, 9, 12, 16], "referenc": [1, 7], "confus": [1, 9], "reader": [1, 7, 9], "keyword": 1, "cap": 1, "well": [1, 6, 9, 10, 13, 18], "known": [1, 12], "measur": 1, "There": [1, 2, 6, 8, 9, 15], "ideal": [1, 9, 13], "self": [1, 6, 7, 9], "document": [1, 7, 9, 10, 12, 15, 18], "requir": [1, 3, 6, 7, 8, 13], "excess": 1, "each": [1, 6, 12, 13, 15], "clearli": 1, "task": [1, 8, 9, 13, 14, 16], "clear": [1, 9], "doe": [1, 2, 6, 9, 10, 12, 14, 18], "some": [1, 6, 9, 11, 12, 13, 15], "scenario": 1, "concis": 1, "methodologi": 1, "docstr": 1, "bug": [1, 8, 9, 12, 13, 14, 15], "workaround": 1, "obviou": [1, 8, 9], "interpret": 1, "alon": [1, 13], "nest": [1, 9], "full": 1, "colon": [1, 8], "toler": [1, 5], "everywher": 1, "attribut": 1, "NOT": 1, "iter": [1, 9, 13], "10": [1, 5, 6, 8, 9, 13, 15], "normal": [1, 6, 13], "initialis": 1, "impli": 1, "retain": 1, "its": [1, 5, 6, 8, 15], "valu": [1, 5, 8, 9], "affect": [1, 9], "okai": 1, "n_max": 1, "1e6": 1, "portabl": [1, 5], "platform": [1, 15], "compil": [1, 3, 6], "option": [1, 2, 8, 9, 15], "intrins": 1, "64": 1, "bit": [1, 15, 16], "request": 1, "minimum": 1, "p": 1, "expon": 1, "rang": 1, "r": 1, "selected_real_kind": 1, "15": 1, "307": 1, "usag": [1, 7, 9, 16], "implicit": [1, 3, 4, 5, 6], "141593_sp": 1, "14159265358979_dp": 1, "suffix": 1, "constant": [1, 5], "anywher": [1, 12, 15], "within": [1, 6, 9, 15], "otherwis": [1, 9], "truncat": 1, "588375419731621_dp": 1, "learn": [1, 2, 8, 16], "more": [1, 2, 6, 8, 9, 12, 14, 15, 16], "about": [1, 2, 4, 9, 12, 13, 15, 16], "take": [1, 12, 13, 16], "care": [1, 9], "perform": [1, 9, 13, 14], "If": [1, 5, 6, 8, 9, 12, 13, 14, 16], "express": [1, 9, 15], "occur": [1, 2, 5], "return": [1, 5, 8, 9, 12, 15], "result": [1, 6, 8, 13], "round": 1, "down": [1, 6, 8, 12, 13, 15], "nearest": 1, "least": [1, 9, 14], "convert": 1, "e": [1, 6, 8, 9, 12, 15, 16], "g": [1, 8, 9, 12, 15], "modularis": [1, 4], "definit": [1, 2, 3, 5, 6, 7, 8, 16], "access": [1, 3, 5, 6, 15], "type": [1, 2, 3, 4, 6, 8, 9, 12, 18], "interfac": [1, 3, 6, 14, 15, 16], "benefit": [1, 3, 6, 9, 16], "scope": [1, 3, 6, 9], "namespac": [1, 3, 6], "automat": [1, 3, 6, 9, 10, 11, 13, 18], "explicit": [1, 2, 3, 4, 6, 18], "better": [1, 3, 6, 8, 9, 14], "time": [1, 3, 6, 8, 9, 12, 16], "logic": [1, 3, 5, 6], "organis": [1, 3, 4, 6, 9, 15], "collect": [1, 3, 5, 6, 13], "togeth": [1, 3, 6, 13], "reus": [1, 3, 6, 12], "combin": [1, 3, 6], "without": [1, 3, 6, 8, 9, 12, 13], "duplic": [1, 3, 6, 7, 9, 12], "auxilliari": [1, 3, 6], "share": [1, 3, 5, 6, 12, 15], "store": [1, 3, 5, 6, 7], "enabl": [1, 3, 6, 9, 13], "suffer": [1, 3, 6], "problem": [1, 3, 6, 8, 9, 12], "keep": [1, 3, 6, 14, 15], "filenam": [1, 3, 6, 15], "complex": [1, 5, 8, 9, 12, 15], "broken": [1, 6, 12], "smaller": [1, 12], "ones": [1, 13], "natur": [1, 13], "wai": [1, 9, 12, 15, 16], "abstract": 1, "clarifi": 1, "small": [1, 9, 10, 18], "easier": [1, 8, 9, 12, 13, 15], "conceptualis": 1, "debug": [1, 9, 12, 13], "indic": [1, 5, 6, 12], "too": [1, 9, 12, 13], "span": 1, "than": [1, 6, 8, 9, 12, 13, 14, 15], "twice": 1, "height": 1, "serv": 1, "except": 1, "As": [1, 7, 8, 9], "calcul": [1, 13], "scalar": 1, "size": [1, 6], "arrai": [1, 5, 6, 7], "modifi": [1, 5, 7, 9, 12, 15], "specifi": [1, 6, 15], "undefin": [1, 13], "entri": 1, "inout": [1, 6], "enforc": [1, 9], "intent_exampl": 1, "initi": [1, 13], "just": [1, 2, 8, 13, 15, 16], "own": [1, 5, 9, 12, 16], "understand": [1, 6, 9, 15, 16], "deepli": 1, "navig": [1, 6, 8], "even": [1, 8, 9, 12, 13], "guarante": [1, 13], "memori": [1, 7, 8, 9, 12, 13], "behaviour": [1, 2, 8, 12, 13], "hide": [1, 13], "symptom": [1, 13], "re": [1, 12, 13, 16], "extra": [1, 6, 9, 13], "addit": [1, 8, 14, 15], "runtim": [1, 13], "written": [1, 2, 13], "abaci": [1, 13, 14], "tool": [1, 9, 10, 13, 15, 16, 18], "intel": [1, 2, 6], "linux": [1, 14, 16], "gen": 1, "warn": 1, "window": [1, 6, 14, 16], "z7": 1, "gfortran": 1, "fbacktrac": 1, "wall": 1, "fcheck": 1, "bound": 1, "alloc": 1, "match": 1, "routin": 1, "don": [1, 6, 9, 10, 12, 18], "t": [1, 6, 8, 9, 10, 12, 15, 18], "forget": [1, 8, 13], "finish": [1, 13], "slow": 1, "execut": 1, "univers": [1, 15], "acknowledg": 1, "bad": 1, "control": [1, 10, 13, 18], "flow": 1, "highli": [1, 7], "prone": [1, 7, 8, 9, 15], "entir": [1, 13], "supersed": 1, "condit": [1, 13], "earli": 1, "cycl": 1, "jump": [1, 8], "straight": 1, "skip": [1, 5], "exit": 1, "A": [1, 5, 8, 9, 11, 13, 14, 15], "area": 1, "global": 1, "persist": 1, "invoc": 1, "thereof": 1, "commmon": 1, "vari": 1, "subtl": 1, "pointer": [1, 4], "deriv": [1, 4], "http": [1, 2, 5, 6], "en": 1, "wikipedia": 1, "org": [1, 6, 11], "wiki": [1, 11], "all_cap": 1, "stevelionel": [1, 2], "com": [1, 2, 5], "drfortran": [1, 2], "2017": 1, "03": 1, "27": 1, "doctor": [1, 2], "structured_program": 1, "format": [2, 4, 8, 9, 13], "layout": [2, 4, 7, 8, 9], "expect": [2, 8, 9, 12, 13, 15], "howev": [2, 6, 9, 13, 15, 16], "For": [2, 5, 6, 8, 13, 14, 15, 16], "recommend": [2, 4, 13, 15], "much": [2, 8, 9, 12, 13, 15, 16], "demonstr": [2, 7, 9], "overrid": 2, "further": [2, 7, 9, 12, 13], "sourc": [2, 4], "want": [2, 8, 12, 13, 15, 16], "refer": [2, 7, 9, 11, 14, 15], "approach": [2, 5, 7], "add": [2, 6, 7, 8, 9, 12, 14, 15], "flag": [2, 14], "abaqus_v6": 2, "env": 2, "second": [2, 7, 8], "here": [2, 6, 8, 9, 11, 15, 16], "introduc": [2, 7, 8, 9, 16], "relianc": 2, "content": [2, 6, 8], "special": 2, "comment": [2, 6, 14], "part": [2, 5, 8, 9, 13, 14, 15], "also": [2, 5, 6, 8, 9, 12, 15, 16], "deactiv": 2, "mode": 2, "free_form_exampl": 2, "free_form": 2, "smaaspusersubroutin": 2, "hdr": 2, "mark": 2, "remedi": 2, "temporarili": 2, "enter": 2, "2013": 2, "01": 2, "11": [2, 6], "procedur": [3, 6], "check": [3, 4, 5, 6, 8, 9, 12, 13], "do": [3, 6, 8, 9, 10, 13, 16, 18], "common": [3, 6], "block": [3, 6], "review": 4, "guidelin": [4, 6, 9, 13, 18], "regardless": 4, "experi": [4, 12, 16], "visual": [4, 8, 9, 13], "style": [4, 9, 10, 18], "numer": 4, "correct": [4, 6, 9, 12, 13], "ban": 4, "modular": 4, "version": [4, 8, 10, 11, 13, 18], "v": [4, 8], "state": [4, 18], "motiv": 4, "materi": [4, 14, 18], "properti": [4, 7, 9, 18], "namelist": [4, 18], "advanc": [4, 8], "altern": 5, "load": [5, 12, 13], "inp": [5, 6], "umat": [5, 6], "vumat": 5, "list": [5, 6, 14], "densiti": 5, "0001": 5, "depvar": 5, "60": 5, "90": 5, "100000": 5, "disadvantag": [5, 7], "support": [5, 14, 17], "string": 5, "boolean": 5, "poor": 5, "correpond": 5, "maintain": [5, 7, 10, 14, 18], "redefin": [5, 7], "order": [5, 6, 9, 13], "build": [5, 8, 13, 15, 16], "robust": [5, 7], "simpl": [5, 6, 8, 12, 13, 14, 15, 16], "data": [5, 9, 12, 13], "num_sampl": 5, "true": 5, "data_fil": 5, "csv": 5, "norm_vec": 5, "With": [5, 6, 9, 13], "pair": 5, "group": [5, 8, 16], "var_nam": 5, "line": [5, 6, 8, 9, 13, 14, 16], "equal": 5, "intend": [5, 9], "final": [5, 16], "forward": 5, "slash": 5, "close": [5, 12], "correspond": [5, 7], "To": [5, 8, 12], "len": [5, 6], "256": 5, "reject": 5, "onc": [5, 6, 12, 13, 15, 16], "open": 5, "fh": 5, "stat": 5, "newunit": 5, "nml": 5, "action": 5, "iostat": 5, "popul": 5, "absent": 5, "chang": [5, 6, 7, 9, 12, 13, 16], "incorrectli": [5, 8], "fail": [5, 12], "situat": 5, "messag": [5, 8], "identifi": [5, 8, 11, 13], "backspac": 5, "fmt": 5, "invalid": 5, "trim": 5, "increment": [5, 15], "material_properti": 5, "props_load": 5, "fals": [5, 8], "alreadi": [5, 9, 13], "load_mat_prop": 5, "mat_nam": 5, "get_thread_id": 5, "jobdir": 5, "allocat": 5, "mat_props_fil": 5, "primari": 5, "thread": [5, 13], "look": [5, 8, 9], "job": [5, 6, 9], "output": [5, 6, 12, 13], "directori": [5, 6], "vgetoutdir": 5, "handl": [5, 15], "io": 5, "custom": [5, 7], "encapsul": 5, "mat_props_t": 5, "props_cach": 5, "prop": [5, 6, 7], "member": [5, 6], "percent": 5, "both": [5, 15], "degeneratecon": 5, "html": [5, 6], "entail": 6, "function": [6, 8, 9, 10, 13, 14, 15, 18], "kept": 6, "link": [6, 9, 14, 16], "prerequisit": 6, "consid": [6, 8, 9, 12, 13], "get": [6, 9, 13, 14, 17, 18], "respect": [6, 7], "convent": 6, "src": [6, 9], "stress": 6, "statev": 6, "ddsdde": 6, "sse": 6, "spd": 6, "scd": 6, "rpl": 6, "ddsddt": 6, "drplde": 6, "drpldt": 6, "stran": 6, "dstran": 6, "dtime": 6, "temp": 6, "dtemp": 6, "predef": 6, "dpred": 6, "cmname": 6, "ndi": 6, "nshr": 6, "nten": 6, "nstatv": 6, "nprop": 6, "coord": 6, "drot": 6, "pnewdt": 6, "celent": 6, "dfgrd0": 6, "dfgrd1": 6, "noel": 6, "npt": 6, "layer": 6, "kspt": 6, "jstep": 6, "kinc": 6, "get_properti": 6, "plane_strain_jacobian": 6, "update_stress": 6, "80": 6, "xnu": 6, "plane_stress_jacobian": 6, "note": [6, 12, 13, 16], "littl": [6, 13], "itself": [6, 9], "wherebi": 6, "accid": 6, "preprocessor": 6, "u": [6, 8, 12, 13, 15], "go": [6, 13, 16], "direct": 6, "built": 6, "13": 6, "d0": 6, "5d0": 6, "acces": 6, "everyth": 6, "argument": [6, 9], "advantag": 6, "assum": [6, 8, 10, 16, 18], "shape": 6, "excerpt": 6, "cut": 6, "breviti": 6, "would": [6, 8, 12, 15], "simpli": [6, 9, 12, 13], "sure": [6, 9], "non": [6, 13], "idea": 6, "copi": [6, 8], "know": [6, 9, 12], "produc": 6, "set": [6, 12, 13], "evalu": [6, 9], "effect": [6, 8], "abov": [6, 7, 9, 16], "interact": [6, 13, 15], "distribut": [6, 15], "invok": 6, "command": [6, 13, 14, 15, 16], "ifort": 6, "ep": 6, "usub_singl": 6, "www": 6, "fortran90": [6, 11], "index": 7, "stateold": 7, "unclear": 7, "what": [7, 8, 9, 10, 12, 14, 16, 18], "evolv": 7, "becom": [7, 9, 16], "date": 7, "remov": [7, 15], "oner": 7, "central": 7, "centralis": 7, "map": 7, "therebi": 7, "dimension": [7, 9], "subscript": 7, "element": 7, "ip": 7, "creat": [7, 8, 9, 12, 13, 15], "alias": 7, "contigu": 7, "damag": 7, "sig0": 7, "behav": [7, 12, 15], "like": [7, 8, 9, 12, 13, 15, 16], "henc": 7, "reorder": 7, "statevar_t": 7, "failur": 7, "elem_delet": 7, "get_statevar": 7, "state_arrai": 7, "target": 7, "stateold_arrai": 7, "nblock": 7, "nstate": 7, "statenew_arrai": 7, "setup": 7, "99": 7, "greatli": 7, "spend": [8, 9, 13], "straightforward": [8, 9, 15], "quicker": [8, 9], "less": [8, 9, 12, 13], "effort": 8, "spent": 8, "mundan": 8, "tediou": 8, "quick": [8, 11, 16], "seem": [8, 15, 16], "trivial": [8, 16], "bonu": 8, "softwar": [8, 9, 13, 15], "significantli": [8, 12, 15], "boilerpl": [8, 9], "mental": 8, "cost": [8, 9], "focu": 8, "hand": [8, 15], "cours": [8, 9, 13, 15, 16], "topic": [8, 15], "uob": [8, 13, 16], "rse": [8, 13, 16, 18], "although": [8, 9, 15, 16], "focus": 8, "pycharm": 8, "vscode": 8, "principl": [8, 12], "fairli": [8, 12, 16], "familiaris": 8, "yourself": [8, 16], "avail": [8, 9, 11, 14], "perhap": [8, 13], "def": [8, 9, 15], "apply_discount": [8, 15], "price": [8, 9, 15], "rel_discount": [8, 15], "abs_discount": [8, 15], "appli": [8, 15], "discount": [8, 15], "my_valu": 8, "np": 8, "arang": 8, "f": 8, "origin": [8, 15], "off": [8, 16], "By": [8, 9, 13], "colour": 8, "repres": 8, "term": [8, 9, 13, 16], "spot": [8, 12, 13], "theme": 8, "pick": 8, "emphasis": 8, "spell": 8, "grammar": 8, "squiggli": 8, "microsoft": 8, "linter": 8, "grammat": 8, "mistak": [8, 12], "issu": [8, 15], "typo": 8, "miss": 8, "semi": 8, "could": 8, "fantast": 8, "help": [8, 9, 10, 12, 13, 15, 16, 18], "hold": [8, 9], "macro": 8, "insert": 8, "text": 8, "risk": [8, 12], "someth": [8, 9, 12, 13], "c": [8, 13], "std": 8, "cout": 8, "endl": 8, "tell": [8, 9], "comput": [8, 9, 13], "particularli": [8, 9, 12, 15], "programm": 8, "speed": 8, "my": [8, 12], "expand": 8, "cursor": 8, "quot": 8, "readi": 8, "commonli": [8, 16], "boiler": 8, "plate": 8, "doc": [8, 9], "summari": [8, 9, 11], "param_nam": 8, "param_typ": 8, "param_descript": 8, "return_typ": 8, "return_value_descript": 8, "replac": 8, "hint": 8, "rememb": [8, 13], "certain": [8, 12], "capac": [8, 12], "tailor": 8, "particular": [8, 9, 13], "doxygen": [8, 9], "brief": [8, 14], "extend": [8, 9], "param": 8, "rel": [8, 12, 13, 15, 16], "plugin": [8, 9], "attempt": 8, "fill": [8, 9, 12], "aren": 8, "heavi": 8, "lift": 8, "incredibli": [8, 9, 12, 13, 15], "product": 8, "labori": 8, "manipul": [8, 13], "peopl": [8, 9, 13, 15], "prefer": [8, 15, 16], "ctrl": 8, "far": [8, 13, 15], "distract": [8, 9, 12], "subconci": 8, "click": 8, "menu": 8, "few": [8, 9], "f12": 8, "move": 8, "home": 8, "left": 8, "right": [8, 12, 16], "select": [8, 15], "shift": 8, "alt": 8, "delet": 8, "del": 8, "un": 8, "indent": 8, "multi": 8, "edit": [8, 12], "quit": [8, 12], "often": [8, 9, 12, 13], "becaus": [8, 9, 12, 13], "actual": 8, "assumpt": [8, 12], "massiv": [8, 13], "pain": [8, 12], "resourc": [8, 11], "debugg": 8, "pleas": [8, 13, 15, 16], "accept": 9, "harder": 9, "contextu": 9, "brain": 9, "": [9, 12, 13, 14], "isn": 9, "context": 9, "connect": 9, "why": 9, "bear": 9, "mind": 9, "tweak": 9, "now": [9, 12, 13, 15], "futur": [9, 13], "realli": [9, 16], "taken": 9, "defgen": 9, "model": 9, "xsi_l": 9, "h": 9, "h0": 9, "xsi_f": 9, "Not": 9, "hard": [9, 12], "wrong": [9, 13], "incorrect": [9, 12], "diagnos": 9, "At": [9, 13], "spread": 9, "over": [9, 12, 15], "wa": 9, "had": [9, 13], "forgotten": [9, 13], "4th": 9, "anoth": [9, 12], "intermedi": 9, "tmp": 9, "perfectli": 9, "ok": 9, "elsewher": 9, "though": [9, 16], "addition": [9, 13], "sometim": [9, 13], "python": [9, 13, 14], "int": 9, "another_var": 9, "my_funct": 9, "fourth": 9, "third": 9, "show": 9, "mention": 9, "doesn": 9, "sens": 9, "sign": [9, 13, 16], "refactor": 9, "Of": 9, "inher": 9, "try": [9, 12, 13, 16], "li": [9, 12], "wait": 9, "happen": 9, "loop": 9, "unnecessari": 9, "thing": [9, 10, 13, 16, 18], "do_someth": 9, "do_other_th": 9, "later": [9, 12, 15], "threshold": 9, "updat": [9, 15], "longer": [9, 16], "agre": 9, "extrem": 9, "imposs": 9, "physic": [9, 13], "solv": 9, "contriv": 9, "sync": 9, "thank": 9, "relev": [9, 14], "detail": [9, 12, 14], "fine": 9, "said": 9, "autom": 9, "sphinx": [9, 14], "pars": 9, "pretti": 9, "stick": 9, "popular": [9, 13, 15], "numpi": 9, "quantiti": 9, "verbos": 9, "descript": [9, 14], "process": [9, 12], "integr": [9, 13], "item": [9, 15], "gbp": [9, 15], "total": 9, "bui": 9, "paper": [9, 14], "quant": 9, "54": 9, "7": [9, 16], "found": [9, 11], "exist": [9, 15], "instal": [9, 14, 16], "id": [9, 10, 11, 18], "tooltip": 9, "while": [9, 16], "search": [9, 12, 13], "prompt": 9, "guidenc": 9, "put": 9, "test_data": 9, "tutori": [9, 11, 14, 15], "script": [9, 13], "simul": 9, "readm": 9, "md": 9, "adopt": 9, "tend": 9, "matter": [9, 16], "adher": 9, "my_var": 9, "until": 9, "convers": 9, "clariti": [10, 18], "think": [10, 12, 18], "conform": 11, "pep": 11, "lint": 11, "violat": 11, "excel": 11, "extens": [11, 12], "hitchhik": 11, "rr": 11, "engin": [11, 13, 15], "mathwork": 11, "exchang": 11, "lang": 11, "quickstart": [11, 14], "discours": 11, "forum": 11, "compact": 11, "f95": 11, "wide": 11, "regard": 11, "googl": 11, "respons": [12, 14], "srp": 12, "concern": 12, "soc": 12, "verifi": [12, 13], "signific": [12, 13], "might": [12, 13, 15], "underneath": 12, "plot": [12, 13], "lot": [12, 13, 14], "potenti": [12, 15], "ax": 12, "draw": 12, "label": [12, 13, 15], "coordin": 12, "act": 12, "glue": 12, "sub": 12, "themselv": 12, "responsibilti": 12, "draw_ax": 12, "plot_data": 12, "print_label": 12, "plot_linear_trendlin": 12, "plot_data_point": 12, "plot_interpolating_lin": 12, "myself": 12, "manag": 12, "chunk": 12, "find": [12, 13, 16], "ourselv": [12, 13], "do_x_and_i": 12, "load_and_process": 12, "solve_and_output": 12, "stop": 12, "possibli": 12, "sort_data": 12, "mock": 12, "endur": 12, "hour": [12, 16], "dai": [12, 16], "last": 12, "implement": 12, "me": 12, "answer": 12, "narrow": [12, 13], "local": [12, 15], "worri": 12, "collis": 12, "caus": 12, "accident": 12, "overwrit": 12, "notic": 12, "coupl": 12, "correctli": 12, "mi": 12, "plot_polynomial_trendlin": 12, "linear": 12, "trendlin": 12, "big": 12, "factor": 12, "realis": [12, 15], "effici": 12, "cognit": 12, "human": 12, "confid": [13, 16], "probabl": 13, "inspect": 13, "interprett": 13, "experiment": 13, "compar": 13, "against": 13, "previou": [13, 15, 16], "great": 13, "live": 13, "team": [13, 15, 16], "fraction": 13, "manual": 13, "sai": 13, "matlab": 13, "involv": 13, "decid": [13, 15], "confirm": 13, "method": 13, "recreat": 13, "minut": 13, "gather": 13, "tidi": 13, "titl": 13, "axi": 13, "push": [13, 15], "button": 13, "assess": 13, "took": 13, "prove": 13, "explor": [13, 16], "session": 13, "everyon": 13, "guilti": 13, "unavoid": 13, "unlik": 13, "dummi": 13, "likewis": 13, "gradient": 13, "invert": 13, "matrix": 13, "sort": 13, "whole": 13, "catalogu": 13, "worth": [13, 16], "abl": [13, 15], "variou": 13, "aspect": 13, "pytest": 13, "googletest": 13, "touch": 13, "ask": [13, 16], "ac": [13, 15, 16], "uk": [13, 15, 16], "vital": 13, "instruct": 13, "recommen": 13, "address": [13, 14], "sanit": 13, "multithread": 13, "clang": 13, "race": 13, "exception": 13, "componen": 13, "buzz": 13, "releas": [13, 14, 15], "never": [13, 16], "publish": [14, 15], "intern": [14, 15], "git": [14, 17, 18], "sentenc": 14, "author": 14, "email": 14, "someon": [14, 16], "who": 14, "librari": 14, "conda": 14, "gcc": 14, "system": [14, 15], "academ": 14, "card": 14, "statu": 14, "alpha": 14, "core": 14, "yet": 14, "beta": 14, "undergo": 14, "activ": 14, "stabl": 14, "mainten": 14, "contact": [14, 15, 16], "archiv": 14, "under": 14, "larger": 14, "dedic": 14, "short": 14, "onlin": [14, 15], "cover": [14, 16], "scratch": 14, "track": [15, 16], "benefici": 15, "talk": 15, "subtli": 15, "differenti": 15, "implic": 15, "semant": 15, "major": 15, "minor": 15, "patch": 15, "philosphi": 15, "incompat": 15, "manner": [15, 16], "stand": 15, "applic": 15, "extern": 15, "signatur": 15, "percentag": 15, "decim": 15, "adjust": 15, "receiv": 15, "eventu": 15, "reli": 15, "_before_": 15, "proport": 15, "told": 15, "won": 15, "signal": 15, "latest": 15, "old": 15, "stuff": 15, "critic": 15, "changelog": 15, "prioritis": 15, "modif": 15, "abil": 15, "absolut": 15, "newer": 15, "deal": 15, "conveni": 15, "my_file_version_3_supervisor_edits_bug_fix_3": 15, "prevent": 15, "collabor": [15, 16], "gitlab": [15, 16], "daunt": 15, "learnt": 15, "basic": [15, 16], "95": 15, "essenti": 15, "boil": 15, "commit": [15, 16], "upload": 15, "servic": [15, 16], "research": 15, "TO": 15, "host": 15, "server": 15, "greater": 15, "stephen": 15, "hallett": 15, "heard": 16, "refresh": 16, "workshop": 16, "prior": 16, "knowledg": 16, "design": 16, "pace": 16, "certainli": 16, "enough": 16, "properli": 16, "week": 16, "regular": 16, "fair": 16, "feel": 16, "fulli": 16, "comfort": 16, "6": 16, "basi": 16, "question": 16, "mailbox": 16, "necessari": 16, "cli": 16, "unix": 16, "mac": 16, "machin": 16, "bash": 16, "download": 16, "websit": 16, "graphic": 16, "choic": 16, "gui": 16, "person": 16, "desktop": 16, "safe": 16, "focuss": 16, "branch": 16, "pull": 16, "clone": 16, "skill": 16, "taught": 16, "fast": 16, "ground": 16, "train": 16, "staff": 16, "postgrad": 16, "roughli": 16, "visit": 16, "schedul": 16, "meantim": 16}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"explicit": 0, "type": [0, 5, 7], "abaqu": [0, 2, 4, 6], "implicit": 0, "info": 0, "abaqus_definit": 0, "f": [0, 6], "exampl": 0, "usag": 0, "fortran": [1, 2, 5, 6, 11], "guidelin": 1, "content": [1, 4, 10, 17, 18], "visual": 1, "layout": 1, "format": [1, 5], "recommend": [1, 3, 6, 14], "indent": [1, 9], "blank": 1, "line": 1, "length": 1, "style": [1, 11], "name": [1, 7], "capitalis": 1, "comment": [1, 9], "variabl": [1, 7], "declar": 1, "numer": 1, "doubl": 1, "precis": 1, "real": 1, "integ": 1, "divis": 1, "program": 1, "unit": 1, "modul": [1, 6], "further": [1, 3, 6], "subroutin": [1, 4, 5, 6], "function": [1, 12], "procedur": 1, "argument": 1, "end": 1, "statement": 1, "check": 1, "code": [1, 6, 9, 13], "correct": 1, "ban": 1, "featur": 1, "background": 1, "goto": 1, "common": 1, "block": 1, "equival": 1, "label": 1, "do": [1, 12], "loop": 1, "free": 2, "form": 2, "v": 2, "fix": 2, "us": [2, 5, 6, 7, 13], "indic": 2, "compil": [2, 13], "direct": 2, "includ": 2, "file": [2, 5], "user": [4, 5, 6, 14], "read": 5, "materi": 5, "properti": 5, "from": 5, "namelist": 5, "motiv": [5, 7], "The": 5, "error": 5, "detect": 5, "advanc": 5, "deriv": 5, "structur": [5, 7], "about": 6, "modularis": 6, "your": [6, 13], "usub": 6, "elastic_mod": 6, "run": [6, 13], "modular": 6, "gener": 6, "singl": 6, "sourc": 6, "version": [6, 15], "state": 7, "pointer": 7, "organis": 7, "id": 8, "automat": 8, "tool": 8, "best": [8, 9, 10, 12, 13, 15], "practic": [8, 9, 10, 12, 13, 15], "syntax": 8, "highlight": 8, "lint": 8, "auto": 8, "complet": 8, "intellisens": 8, "snippet": 8, "document": [8, 14], "keyboard": 8, "shortcut": 8, "debug": 8, "write": [9, 12], "readabl": 9, "maintain": 9, "clariti": 9, "whitespac": 9, "parenthes": 9, "docstr": 9, "miscellan": 9, "rse": [10, 17], "languag": 11, "specif": 11, "python": 11, "matlab": 11, "c": 11, "small": [12, 13], "one": 12, "thing": 12, "well": 12, "benefit": [12, 13], "don": 13, "t": 13, "assum": 13, "doe": 13, "what": [13, 15], "you": 13, "think": 13, "test": 13, "make": 13, "valid": 13, "easi": 13, "bit": 13, "time": 13, "framework": 13, "simplifi": 13, "process": 13, "other": [13, 14], "help": 14, "develop": 14, "good": 14, "readm": 14, "control": 15, "number": 15, "i": 15, "an": 15, "api": 15, "break": 15, "chang": 15, "non": 15, "git": [15, 16], "get": 16, "start": 16, "option": 16, "pre": 16, "requisit": 16, "next": 16, "step": 16, "support": 16, "guid": [17, 18], "bci": 18, "research": 18, "softwar": 18, "engin": 18}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Explicit Typing with Abaqus": [[0, "explicit-typing-with-abaqus"], [0, "id1"]], "Implicit Typing": [[0, "implicit-typing"]], "Explicit Typing": [[0, "explicit-typing"]], "Info": [[0, null]], "Abaqus_Definitions.f": [[0, "abaqus-definitions-f"]], "Example Usage": [[0, "example-usage"]], "Fortran Guidelines": [[1, "fortran-guidelines"]], "Contents": [[1, "contents"]], "Visual Layout": [[1, "visual-layout"]], "Format": [[1, "format"]], "Recommendation": [[1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [3, null], [6, null], [6, null], [14, null]], "Indentation": [[1, "indentation"], [9, "indentation"]], "Blank lines": [[1, "blank-lines"]], "Line Length": [[1, "line-length"]], "Style": [[1, "style"]], "Naming & Capitalisation": [[1, "naming-capitalisation"]], "Comments": [[1, "comments"], [9, "comments"]], "Variable Declarations": [[1, "variable-declarations"]], "Numerical": [[1, "numerical"]], "Declaring Double Precision Reals": [[1, "declaring-double-precision-reals"]], "Integer Division": [[1, "integer-division"]], "Program Units": [[1, "program-units"]], "Modules": [[1, "modules"]], "Further Recommendations": [[1, null], [3, null], [6, null]], "Subroutines and Functions": [[1, "subroutines-and-functions"]], "Procedure Arguments": [[1, "procedure-arguments"]], "End Statements": [[1, "end-statements"]], "Checking Code Correctness": [[1, "checking-code-correctness"]], "Banned Features": [[1, "banned-features"]], "Background": [[1, null]], "goto statement": [[1, "goto-statement"]], "common block": [[1, "common-block"]], "equivalence statement": [[1, "equivalence-statement"]], "Labelled do loop": [[1, "labelled-do-loop"]], "Free-form Fortran with Abaqus": [[2, "free-form-fortran-with-abaqus"]], "Free form vs. Fixed-form": [[2, "free-form-vs-fixed-form"]], "Using Free-form with Abaqus": [[2, "using-free-form-with-abaqus"]], "Indicating Free-form with Compiler Directives": [[2, "indicating-free-form-with-compiler-directives"]], "Abaqus Include Files": [[2, "abaqus-include-files"]], "Abaqus User Subroutines": [[4, "abaqus-user-subroutines"]], "Contents:": [[4, null], [10, null], [17, null], [18, null]], "Reading Material Properties from a Namelist File": [[5, "reading-material-properties-from-a-namelist-file"]], "Motivation": [[5, "motivation"], [7, "motivation"]], "The Fortran NameList Format": [[5, "the-fortran-namelist-format"]], "Reading a NameList file in Fortran": [[5, "reading-a-namelist-file-in-fortran"]], "Error Detection": [[5, "error-detection"]], "Using NameList Files for User Subroutines": [[5, "using-namelist-files-for-user-subroutines"]], "Advanced: NameLists with Derived Types (Structures)": [[5, "advanced-namelists-with-derived-types-structures"]], "Using Fortran Modules": [[6, "using-fortran-modules"]], "About Fortran Modules": [[6, "about-fortran-modules"]], "Modularising your User Subroutine": [[6, "modularising-your-user-subroutine"]], "usub.f": [[6, "usub-f"]], "elastic_mod.f": [[6, "elastic-mod-f"]], "Running Abaqus with Modular Code": [[6, "running-abaqus-with-modular-code"]], "Generating a Single-Source Version": [[6, "generating-a-single-source-version"]], "Using Named State Variables": [[7, "using-named-state-variables"]], "Using Named State Pointer Variables": [[7, "using-named-state-pointer-variables"]], "Organising State Pointers into a Type (structure)": [[7, "organising-state-pointers-into-a-type-structure"]], "IDEs and automatic tools": [[8, "ides-and-automatic-tools"]], "Best Practice": [[8, null], [8, null], [8, null], [8, null], [8, null], [8, null], [8, null], [9, null], [9, null], [9, null], [9, null], [9, null], [12, null], [13, null], [13, null], [13, null], [15, null], [15, null], [15, null]], "Syntax Highlighting and Linting": [[8, "syntax-highlighting-and-linting"]], "Auto completion (Intellisense), Snippets, and Auto Documentation": [[8, "auto-completion-intellisense-snippets-and-auto-documentation"]], "Keyboard shortcuts": [[8, "keyboard-shortcuts"]], "Debugging": [[8, "debugging"]], "Write code for readability, maintainability, and clarity": [[9, "write-code-for-readability-maintainability-and-clarity"]], "Whitespace and parentheses": [[9, "whitespace-and-parentheses"]], "Docstrings": [[9, "docstrings"]], "Miscellaneous": [[9, "miscellaneous"]], "RSE Best Practices": [[10, "rse-best-practices"]], "Language Specific Styles": [[11, "language-specific-styles"]], "Python": [[11, "python"]], "MATLAB": [[11, "matlab"]], "Fortran": [[11, "fortran"]], "C++": [[11, "c"]], "Write small functions that do one thing, and do that one thing well": [[12, "write-small-functions-that-do-one-thing-and-do-that-one-thing-well"]], "Benefits": [[12, "benefits"]], "Don\u2019t assume your code does what you think - test it.": [[13, "don-t-assume-your-code-does-what-you-think-test-it"]], "Make validation and tests easy to run": [[13, "make-validation-and-tests-easy-to-run"]], "Test small bits of code at a time": [[13, "test-small-bits-of-code-at-a-time"]], "Use test frameworks to simplify the process": [[13, "use-test-frameworks-to-simplify-the-process"]], "Compiled code": [[13, "compiled-code"]], "Other benefits of testing": [[13, "other-benefits-of-testing"]], "Help other users and developers with good documentation": [[14, "help-other-users-and-developers-with-good-documentation"]], "READMEs": [[14, "readmes"]], "User Documentation": [[14, "user-documentation"]], "Version Control": [[15, "version-control"]], "Versioning (Version numbering)": [[15, "versioning-version-numbering"]], "What is an API?": [[15, "what-is-an-api"]], "Breaking Change": [[15, "breaking-change"]], "Non-breaking change": [[15, "non-breaking-change"]], "Version Control (Git)": [[15, "version-control-git"]], "Getting started with Git": [[16, "getting-started-with-git"]], "Getting started": [[16, "getting-started"]], "Optional Pre-requisite": [[16, "optional-pre-requisite"]], "Next Steps": [[16, "next-steps"]], "Support": [[16, "support"]], "RSE Guides": [[17, "rse-guides"]], "BCI Research Software Engineering Guide": [[18, "bci-research-software-engineering-guide"]]}, "indexentries": {}})