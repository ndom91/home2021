---
date: '2018-03-23'
title: 'Bash Intro'
category: 'linux'
tags: ['linux', 'servers']
---

Easy Shell is a collection of useful boilerplate linux
commands for the daily life of every linux user!

All credit goes to [lucasviola](https://github.com/lucasviola/easyshell) on GitHub!

## Welcome

This is a basics guide intended to help newcomers and experienced Linux users alike get more comfortable with Bash.

This is not a tutorial or anything of that nature, jjjjkust a collection of useful commands, materials, tips and tricks gathered from around the internet.

## Introduction

This is probably the most important lesson you will ever learn on Linux: **man pages are your best friend!** Learn to love them.

To access a man page on any linux program just type:

```
man <program>

For example:

$ man ps
PS(1)                User Commands                     PS(1)

NAME
       ps - report a snapshot of the current processes.

SYNOPSIS
       ps [options]

DESCRIPTION
       ps displays information about a selection of the active processes.
       If you want a repetitive update of the selection and the displayed
       information, use top(1) instead.

       This version of ps accepts several kinds of options:

       1   UNIX options, which may be grouped and must be preceded by a dash.
       2   BSD options, which may be grouped and must not be used with a dash.
       3   GNU long options, which are preceded by two dashes.
```

- To view currently running programs / processes:

`ps -aux`

- To view a brief summary on any program:

`whatis <program>`

- You can find out where a file is located by typing:

`whereis <program>` or `locate <program>`

- To change user:

`sudo -u <user>`

- To change user to superuser (root):

`sudo su`

> This is not recommended! As a superuser you have the rights modify any file, allowing you to fuck your system if you don't know what you're doing.

- To see your session history:

`history`

- `|` is the pipe character and is used to 'pipe' the output from one command into another as the input.

Remember `ps` lists running processes. That list can be huge, so if we want to search only for processes running which include the word 'init' (hint `grep` filters output):

`ps -aux | grep init`

- Similarly `>` and `>>` are called angle brackets and are used to redirect output. For example, you can write the output of one command into a file by doing:

`echo "any random sentence" >> any-random-file.txt`
or
`ps -aux | grep chrome >> any-random-file.txt`

> There is an important difference between using one and two angle brackets like this. The double angle brackets (`>>`) will concatenate, or append to the target file, while the single angle bracket (`>`) will overwrite anything that was previously in the target file.

## File System Basics

- `/` represents the root directory.

- `~` is an alias for your user's home directory, which usually is: `/home/youruser/`.

- `.` represents the current directory

### Compression

- To decompress a tarball:

`tar -xvf <compressed-file.tar.gz>`

> Note: Flag **-v** is for verbosity.

- You can call a previously used command pra typing "!" plus the initials of the said program.

For example, let us say you want to edit .bashrc and then open it to edit again:

```bash
vim ~/.bashrc
exec bash
!vim #This will execute the last command on history with the "vim" initials
```

- `uname -a` will tell you information about your system

- `df -h` will tell you about your file system disk space

## Network

### Utils commands

Show all network interfaces

`ifconfig`

Configure a wireless network interface

`iwconfig`

Get more information about wireless interface

`iwlist <your_interface_here> scan`

<!---excerpt--->

Check hardware information include about your network, this shows PCIs drivers which is installed or not

`lspci`

Show who is connected in your network

`nmap 192.168.0.*`

Verify if you have any open port

`nmap <your_ip>`

## Custom Bash

### Customize your bash cursor

The `PS1` environment variable contains the style for the bash cursor:

Export it to your ~/.bashrc file:

`export PS1='\u@\h \$'`

This will print the following as a cursor: `user@host $`

Some formatting options can be:

```bash
\h - The hostname, up to the first ' . '

\H - The hostname.

\n - A newline.

\t - The time, in 24-hour HH:MM:SS format.

\T - The time, in 12-hour HH:MM:SS format.

\@ - The time, in 12-hour am/pm format.

\u - The username of the current user.

\w - The current working directory, with $HOME abbreviated with a tilde.

\W - The basename of $PWD, with $HOME abbreviated with a tilde.
```

Further reading:

[PS1 Generator](http://bashrcgenerator.com/)

[Git info on bash PS1](http://mediadoneright.com/content/ultimate-git-ps1-bash-prompt)

[Bash manual](http://www.gnu.org/software/bash/manual/bashref.html)

### Text File Manipulation

Bit bucket (as known as the black hole, one of the linux's special files):

`/dev/null`

Standard input stream:

`STDIN`

Standard outpout streams:

`STDERR and STDOUT`

Tailing files (getting the last lines)

`tail <file>`

Outputing whole file content

`cat <file>`

Reading from `STDIN` to a file (stop with `CTRL + C`)

`cat > <file>`

Reading from file to another file

`cat <file1> > <file2>`

Reading all lines of file with line numbers

`cat -n <file>`

Saving output to file (using nano editor, allowing you to edit before saving)

`<command> | nano file_name`

Searching through the output

`<command> | grep <term>`

Displaying output in a file-like style (`less` allows searching by pressing `/`)

`<command> | less`
or
`<command> | more`

Continue running after command. This will not block further running while the program waits on something (network, user input, etc.)

`<command>&`

[!] Ignoring file output completely (note that `2 = STDERR` and `1 = STDOUT`)

`<command> > /dev/null 2 > &1`

## File Permissions

- To change the owner of a directory (recursively):

`sudo chown -R newowneruser:newownergroup`

- To view actual files permissions

ls -l

```bash
  - Example: `drwxr-xr-x`:
    - First letter is the file type:

      d          | b          | c            | p    | s      | \-
      :---------:|:----------:|:------------:|:----:|:------:|:-----------:
      directory  | block file | special file | pipe | socket | regular file

    - Second, third and fourth letters are the **user** permissions
    - Fifth, sixth and seventh letters are the **group** permissions
    - Eighth, ninth and tenth letters are the **others** permissions
    - Permissions

      r    | w     | x       | \-
      :---:|:-----:|:-------:|:------:
      read | write | execute | disable

- To change the files permissions:
  - Using letters:
    - Which users:

      u    |   g   |    o   | a
      :---:|:-----:|:------:|:--:
      user | group | others | all

    - Operators:

      \+             |        \-         |                  =
      :-------------:|:-----------------:|:----------------------------------:
      add permission | remove permission | changes permissions to the inserted

    - Permissions:

      r    | w     | x
      :---:|:-----:|:------:
      read | write | execute

    - Example: `$ chmod a+w file` add **write** permission for **all** users
  - Using numbers
    - Permissions:

      read | write | execute
      :---:|:-----:|:------:
        4  |   2   |    1

    - Example: `$ chmod 754 file` set permission to file:

       user                  |      group     |others
      :---------------------:|:--------------:|:------:
       7                     |       5        |  4
      read + write + execute | read + execute | read
```

## Managing Processes

To list all processes on your system

`ps -aux`

To list all processes running as root

`ps -U root -u root u`

To list all processes owned by you

`ps x`

Searching processes by keyword

`ps -aux | grep '<keyword>'`

Listing it Tree style

`ps -aux --forest`

Killing a specific process

`sudo kill -9 <PID>`

Killing all processes except for kill and init

`sudo kill -9 -1`

## Working with environment and variables

Listing local variables

`set`

Listing global variables

`env`

Printing variable content

`$ foo='This is a variable!'`
`$ echo $foo`

Looking for a local variable

`set | grep foo`

Exporting it to env

`$ export foo`
`$ env | grep foo`

Useful environment variables

- \$PS1 your prompt setup
- \$PATH your path setup
- \$USER your current user

The most important files regarding your environment are:

1. \$ ~/.profile
2. \$ ~/.bashrc

Both of them are shell scripts and contain instructions which are executed when you log in.

Permanently exporting variables to your PATH:

echo 'export $PATH="$PATH:/path/to/file/"' >> ~/.bashrc

## Working with files

- Where am I?

`pwd`

- Creating Files

`touch filename`

- Changing directories

`cd path/to/directory`

- Moving things around

`mv -v <filename> /another/path/`

- Deleting things FOREVER

`sudo mv -v <filename> /dev/null/`

- Copying stuff

`cp -v <filename> <another-filename>`

- Deleting files

`rm -v <filename>`

- Deleting folders

`rm -vR /path/to/<folder>`

- Updating timestamp:

`touch <filename>`

- Listing files and directories

`ls -al`

Notes:

- `-a` tells ls to list all files.
- Files starting with `.` are hidden files. (Remember this).

- Printing the content of a file:

`cat <filename.txt>`

- Printing the last 2 lines of a file:

`tail -n 2 <filename.txt>`

- Printing the first 2 lines of a file:

`head -n 2 <filename.txt>`
