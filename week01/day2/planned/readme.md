# Steps:
## HTML Intro
- What is a tag/element?
    - Show attribute cheatsheet https://www.w3schools.com/html/html_attributes.asp for a list.
    - Explain Hierarchy of HTML
    - Show lists => ul, ol, li, footer, article, main, section, svg
    - Block vs. Inline? Cheat Sheet: https://www.w3schools.com/html/html_blocks.asp

## CSS Intro
- What is CSS?
- How to include CSS in HTML? -> link tag

- How to target HTML elements? Intro to different selectors
    - https://www.w3schools.com/cssref/css_selectors.php 
    - classes
    - ids

- Show Border Radius, 
    - Padding => white space within elements
    - Margin => white space around elements, mention collapsing margins
    - Border

- Box Sizing
    - content-box, default. But without borders and padding 
    - border-box, include padding + borders
- Colors! RGB vs. RGBA vs. Hex vs. "default color names"
- Red Border Trick

- Exercise: Give some styles to your website - background color?


## Git INTRO
- Difference between git and github

$ mkdir git-intro
$ cd git-intro
$ git init
$ git status
$ touch index.html about.html
$ git status
$ git add index.html
$ git status
$ git add .
$ git rm --cached about.html
$ git commit -m "add index.html file"
$ git log

$ git clone https://github.com/ironhack-labs/lab-learn-cloning.git
$ touch another-file.md
$ git add .
$ git commit -m "A test commit"
$ git push
$ git checkout -b another-branch
$ touch yet-another-file.md
$ git add .
$ git commit -m "A test commit on a different branch!"
$ git push ?!
$ git remote show origin
$ git push --set-upstream origin another-branch
$ git remote show origin
$ git remote get-url origin

> click link to create a PR
$ git branch
$ git branch -d another-branch
