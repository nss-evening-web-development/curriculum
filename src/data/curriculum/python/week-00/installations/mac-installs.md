---
title: 'Installations - Mac'
date: "2022-09-01 08:00:00"
path: '/python/'
# use the path equal to the location of the file in the directory (directory structure)

type: '📝 ASSIGNMENT'
# type options: 👩🏽‍🏫 LIVE LEARNING SESSION, ℹ️ INFO, 🎥 VIDEO, 💻 CODE ALONG, 🥼LAB, ↩️ REVIEW/NOTES, 👥 GROUP LEARNING, 👷🏼‍♂️ GROUP PROJECT, 🧠 ASSESSMENT, 📝 ASSIGNMENT
image: '../../../images/headers/python-logo.png'
category: Python - Week 00 - Onboarding
# category: Use the Name + week for each (follow the format above)
tags:
    - UPDATE TAGS
is_featured: true
---

The following are the steps for installing Python on your Mac. Please go to the Windows installation if you are using Windows.

## Visual Studio Code Extensions

Install these extensions to get your VS Code editor set up for writing Python code.

* [Pylance][1]
* [Python Extension Pack][2]
* [SQLite][3]
* [Python Test Explorer][4]
* [Python Docstring Generator][5]

## 1. Install Brew

1. Check to see if `brew` is already installed with `brew --version`
2. If you see `command not found`, install brew with this command:

    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

## 1. Install Pyenv

`pyenv` is a Python version manager. We’ll use `pyenv` to install a specific version of Python. This makes it easy to switch to a different version of Python if needed.

```bash
brew install pyenv
```

### Update the `.zshrc` file

There are a few lines to add to the .zshrc file before we can use `pyenv`

1. Open the .zshrc file with in VS Code:  `code ~/.zshrc`
1. Scroll to the bottom of the file and add these lines:

    ```bash
    # Configure pyenv
    export PYENV_ROOT="$HOME/.pyenv"
    export PIPENV_DIR="$HOME/.local"
    export PATH="$PIPENV_DIR/bin:$PYENV_ROOT/bin:$PATH"

    if command -v pyenv 1>/dev/null 2>&1; then
      export PATH=$(pyenv root)/shims:$PATH
      eval "$(pyenv init -)"
    fi

    ```

1. Save and exit VS Code
1. Back in the terminal, load the changes to the file: `source ~/.zshrc`

### Download Python

1. In the same terminal window, download the version of Python: `pyenv install 3.9.10`
2. After the download finishes, set that version of Python to the global version: `pyenv global 3.9.10`
3. Now your computer’s Python version should be 3.9.10. Check it with `python3 --version`. **If something other than 3.9.10 comes back, reach out to an instructor now.**


### Install Pipenv

This tool will manage any libraries that are needed for each of your projects. It creates a "container" or virtual environment to add the different libraries to the current project.

In some ways, `pipenv` does the same thing as `node_modules` and `package.json`. It tells the program what libraries it needs (`package.json` vs. `Pipfile`) and stores those libraries for use within the project (`node_modules`). You’ll learn more about this as we use it in later projects.

1. Install the package globally:

    ```sh
    python3 -m pip install pipenv
    ```

1. Check that the package is usable: `pipenv --version`
1. **If you get a message saying `command pipenv not found`, reach out to an instructor now.**

[1]: https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance
[2]: https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack
[3]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite
[4]: https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter
[5]: https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring
