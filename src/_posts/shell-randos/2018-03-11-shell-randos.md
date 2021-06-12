---
date: '2018-03-11'
title: 'Bash Aliases'
tags: ['servers', 'linux']
category: 'linux'
---

Ever needed a seed to generate random passwords or keys? Here's an easy way to generate a few different variations of random characters directly in bash!

> \# bash generate random 32 character alphanumeric string (upper and lowercase)

```bash
NEW_UUID=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
```

> \# bash generate random 32 character alphanumeric string (lowercase only)

```bash
cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1
```

> \# Random numbers in a range, more randomly distributed than \$RANDOM which is not
> very random in terms of distribution of numbers.<br> > \# bash generate random number between 0 and 9

```bash
cat /dev/urandom | tr -dc '0-9' | fold -w 256 | head -n 1 | head --bytes 1
```

> \# bash generate random number between 0 and 99

```bash
NUMBER=$(cat /dev/urandom | tr -dc '0-9' | fold -w 256 | head -n 1 | sed -e 's/^0*//' | head --bytes 2)
if [ "$NUMBER" == "" ]; then
  NUMBER=0
fi
```

> \# bash generate random number between 0 and 999

```bash
NUMBER=$(cat /dev/urandom | tr -dc '0-9' | fold -w 256 | head -n 1 | sed -e 's/^0*//' | head --bytes 3)
if [ "$NUMBER" == "" ]; then
  NUMBER=0
fi
```
