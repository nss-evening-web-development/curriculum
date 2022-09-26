---
# TODO: DELETE THIS FILE
title: '01A. CLI Practice'
date: "2022-09-01 08:00:00"
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: ''
# category: Use the Name + week for each (follow the format above)
tags: 
    - Command Line
    - Terminal Commands
    - Assignment

---
### Create Class Directories and Files
 
Before you start writing code for any application, you want to set up the directory structure and create some initial files on the file system first.
 
Since all of the work you will be doing at NSS will be contained in the `~/workspace` directory, you need to create a `foundations` subdirectory.

If you don't have a workspace directory yet, go to your terminal, type `cd` and press enter to get to your home directory. Then `mkdir workspace`. Then you can `cd workspace`.
 
Create the `foundations` directory inside the workspace directory. 

In the `foundations` directory, we will create two more directories: `inclass` and `exercises`
 
Once we are all setup, our directory structure will look like this:

```bash
{home directory}
    +-- workspace
        +-- foundations
            +-- inclass
            +-- exercises
                +-- cli-practice
                    -- index.html
                    +-- styles
                        -- main.css
                    +-- scripts
                        -- main.js
```

### Let's Do It!
- Go ahead and `cd` into the `~/workspace/foundations` directory if you aren't there already.
- To make sure you are in the right directory, run `pwd` this will tell you the location that you currently are.
- Once in `foundations` directory, run `mkdir inclass` and then `mkdir exercises`.
- Now, run `ls` and you should see `inclass` and `exercises`
- run `cd exercises` to navigate into the `exercises` directory.
- run `pwd` to ensure you are in the right place
- Now, we are going to create the directory that will hold our CLI practice files. Run `mkdir cli-practice`
- Navigate into the `cli-practice` directory (you should know this one)

Once the directory is created, you need to create the HTML file and the CSS file. The standard name for the initial HTML for any web site is index.html.
Create the file with the following command.

```bash
touch index.html
```

Next, create a `styles` subdirectory and create a file named `main.css` in it.

Then `cd ..` to go up one directory level. Create another subdirectory named `scripts` and create a file named `main.js` in it.
