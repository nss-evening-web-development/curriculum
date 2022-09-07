---
title: '07. Putting it all together'
date: "2022-09-01 08:00:00"
path: '/client/'
# use the path equal to the location of the file in the directory (directory structure)

type: '💻 CODE ALONG'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT

category: Client Side - Week 01 - Tools
# category: Use the Name + week for each (follow the format above)
tags: 
    - Git
    - Github

---
<div style="padding:56.2% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/689922528?h=bfa9fe4c0e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Testing your code (HTML/CSS/JS Connection)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

As was noted in an earlier lesson, this may seem like a lot, but not only will you have these lessons to reference, you will do this so many times, it will become second nature to you. The video above will walk you through all of the steps, but I am listing them below as well so that you can see them all together.

1. Create a local directory (`mkdir DIRECTORY-NAME`)
1. `cd` into the directory
1. Go to GitHub and create a new repo
1. Copy the code from Github and paste it in the command line (Make sure you are in the directory you created by running pwd)
1. Push enter to make the connection
1. Open the directory in VS Code by running `code .`
1. Create and switch to setup branch (`git checkout -b setup`)
1. Create all your files (index.html, main.js, main.css) - Make sure to add broiler plate code to the HTML file (type "!" then tab), change the background color in the CSS file and add a console log in the JS file.
1. Connect all the files in the index.html
1. Test your code (`http-server -o`)
1. Open dev tools
1. Make sure the background color is changed and the log is in the console in dev tools
1. Go back to VS Code and stop your server (CMD + C or CTRL + C)
add the files (git add -A)
1. Commit the changes (git commit -m "YOUR DESCRIPTIVE MESSAGE")
1. Push the branch to Github (`git push origin setup`)
1. Go to the repo on GitHub
1. Make a pull request (PR) on GitHub
1. Check the code on the PR to ensure it looks good
1. Merge the PR into the main branch
1. Go back to VS Code and checkout the main branch (`git checkout main`)
1. Pull down the merged code from GitHub (`git pull origin main`)
1. Create a new branch off main so that you can keep coding.
1. YOU DID IT!!! 🎉

**NOTE: You should ALWAYS code on a new branch and NEVER on the main branch**

Other Notes: You will connect GitHub repos a couple different ways

1. to create your own repos (the steps above)
1. to clone repos (See the lesson on Cloning Repos)
