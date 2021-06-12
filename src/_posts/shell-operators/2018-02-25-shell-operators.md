---
date: '2018-02-25'
title: 'Bash Operators'
tags: ['servers', 'linux']
category: 'linux'
---

![bash](bash.png)

These are called shell operators and yes, there are more of them. I will give a brief overview of the most common among the two major classes, control operators and redirection operators.

A. Control operators

These are tokens that perform control functions, one of `\|\|, !, &&, &, ;, ;;, \|, \|&, (, or )`.

A.1 List terminators

```
  >  ; : Will run one command after another has finished, irrespective of the outcome of the first.

  >  command1 ; command2

  >  First command1 is run, in the foreground, and once it has finished, command2 will be run.

  >  A newline that isn’t in a string literal or after certain keywords is not equivalent to the semicolon operator. A list of ; delimited simple commands is still a list – as in the shell’s parser must still continue to read in the simple commands that follow a ; delimited simple command before executing, whereas a newline can delimit an entire command list – or list of lists. The difference is subtle, but complicated: given the shell has no previous imperative for reading in data following a newline, the newline marks a point where the shell can begin to evaluate the simple commands it has already read in, whereas a ; semi-colon does not.

  > & : This will run a command in the background, allowing you to continue working in the same shell.

  > command1 & command2

  >  Here, command1 is launched in the background and command2 starts running in the foreground immediately, without waiting for command1 to exit.

  >  A newline after command1 is optional.
```

A.2 Logical operators

```
  > && : Used to build AND lists, it allows you to run one command only if another exited successfully.

  > command1 && command2

  > Here, command2 will run after command1 has finished and only if command1 was successful (if its exit code was 0). Both commands are run in the foreground.

  > This command can also be written

  > if command1
    then command2
    else false
    fi

  > or simply if command1; then command2; fi if the return status is ignored.
    || : Used to build OR lists, it allows you to run one command only if another exited unsuccessfully.

  > command1 || command2

  > Here, command2 will only run if command1 failed (if it returned an exit status other than 0). Both commands are run in the foreground.

  > This command can also be written

  > if command1
    then true
    else command2
    fi

  > or in a shorter way if ! command1; then command2; fi.

  > Note that && and || are left-associative; see Precedence of the shell logical operators &&, || for more information.
    !: This is the “not” operator, used to negate the return status of a command — return 0 if the command returns a nonzero status, return 1 if it returns the status 0.

  > ! command1
```

A.3 Pipe operator

```
  > | : The pipe operator, it passes the output of one command as input to another. A command built from the pipe operator is called a pipeline.

  > command1 | command2

  > Any output printed by command1 is passed as input to command2.
    |& : This is a shorthand for 2>&1 | in bash and zsh. It passes both standard output and standard error of one command as input to another.

  > command1 |& command2
```

A.4 Other list punctuation

```
  > ;; is used solely to mark the end of a case statement. Ksh, bash and zsh also support ;& to fall through to the next case and ;;& (not in ATT ksh) to go on and test subsequent cases.

  > ( and ) are used to group commands and launch them in a subshell. { and } also group commands, but do not launch them in a subshell. See this answer for a discussion of the various types of parentheses, brackets and braces in shell syntax.
```

B. Redirection Operators

```
  > These allow you to control the input and output of your commands. They can appear anywhere within a simple command or may follow a command. Redirections are processed in the order they appear, from left to right.

  > < : Gives input to a command.

  > command < file.txt

  > The above will execute command on the contents of file.txt.
    : same as above, but the file is open in read+write mode instead of read-only:

  > command  file.txt

  > If the file doesn’t exist, it will be created.

  > That operator is rarely used because commands generally only read from their stdin, though it can come handy in a number of specific situations.
    \> : Directs the output of a command into a file.

  > command > out.txt

  > The above will save the output of command as out.txt. If the file exists, its contents will be overwritten and if it does not exist it will be created.

  > This operator is also often used to choose whether something should be printed to standard error or standard output:

  > command >out.txt 2>error.txt

  > In the example above, > will redirect standard output and 2> redirects standard error. Output can also be redirected using 1> but, since this is the default, the 1 is usually omitted and it’s written simply as >.

  > So, to run command on file.txt and save its output in out.txt and any error messages in error.txt you would run:

  > command < file.txt > out.txt 2> error.txt

  > \>\| : Does the same as >, but will overwrite the target, even if the shell has been configured to refuse overwriting (with set -C or set -o noclobber).

  > command >\| out.txt

  > If out.txt exists, the output of command will replace its content. If it does not exist it will be created.
    \>> : Does the same as >, except that if the target file exists, the new data are appended.

  > command >\> out.txt

  > If out.txt exists, the output of command will be appended to it, after whatever is already in it. If it does not exist it will be created.
    &>, >&, >>& and &>> : (non-standard). Redirect both standard error and standard output, replacing or appending, respectively.

  > command &> out.txt

  > Both standard error and standard output of command will be saved in out.txt, overwriting its contents or creating it if it doesn’t exist.

  > command &>\> out.txt

  > As above, except that if out.txt exists, the output and error of command will be appended to it.

  > The &> variant originates in bash, while the >& variant comes from csh (decades earlier). They both conflict with other POSIX shell operators and should not be used in portable sh scripts.
  > <\< : A here document. It is often used to print multi-line strings.

  > command <\< WORD
         Text
     WORD

  > Here, command will take everything until it finds the next occurrence of WORD, Text in the example above, as input . While WORD is often EoF or variations thereof, it can be any alphanumeric (and not only) string you like. When WORD is quoted, the text in the here document is treated literally and no expansions are performed (on variables for example). If it is unquoted, variables will be expanded. For more details, see the bash manual.

  > If you want to pipe the output of command <\< WORD ... WORD directly into another command or commands, you have to put the pipe on the same line as << WORD, you can’t put it after the terminating WORD or on the line following. For example:

  > command <\< WORD \| command2 \| command3...
         Text
     WORD

  > <\<\< : Here strings, similar to here documents, but intended for a single line. These exist only in the Unix port or rc (where it originated), zsh, some implementations of ksh, yash and bash.

  > command <\<\< WORD

  > Whatever is given as WORD is expanded and its value is passed as input to command. This is often used to pass the content of variables as input to a command. For example:

  > $ foo="bar" <br>
    $ sed 's/a/A/' <\<\< "$foo"<br>
    bAr<br>
    # as a short-cut for the standard:<br>
    $ printf '%s\n' "$foo" | sed 's/a/A/'<br>
    bAr<br>
    # or<br>
    sed 's/a/A/' << EOF<br>
    $foo<br>
    EOF
```

A few other operators `(>&-, x>&yx<&y)` can be used to close or duplicate file descriptors. For details on them, please see the relevant section of your shell’s manual (here for instance for bash).

That only covers the most common operators of Bourne-like shells. Some shells have a few additional redirection operators of their own.

Ksh, bash and zsh also have constructs `<(…)`, `>(…)` and `=(…)` (that latter one in zsh only). These are not redirections, but process substitution.

---

Source: [StackExchange](https://unix.stackexchange.com/questions/159513/what-are-the-shells-control-and-redirection-operators)
