---
title: "Hangouts Emojis"
date: "2018-04-15"
tags: ["web", "reverse-engineering"]
category: "Web"
---

So I've been looking for a list of emojis and their text counterparts for google hangouts. This seems like a fairly easy thing for them to publish, right?

Wrong.
It also was only dug up in parts by people around the web.

So I was lucky enough to find a page that did most of the hard thinking, in that they thought of going directly to the source - Google's own js file where the unicode codes and their text equivalents are stored i.e. "`"!:)": 128579`"

So I did some digging and stumbled upon the variable `h9a` in one of the files with approximately 105 emojis! [Beat that internet noobs with your lists of 10-15]

My favorites are highlighted (bold + italic) below for easy finding again in the future :)

So, without further adieu:

### Google Hangouts Emojis

```
    h9a = {
            "!:)": 128579,
            "!:-)": 128579,
            "(=^..^=)": 128568,
            "(=^.^=)": 128568,
            "(N)": 128078,
            "(Y)": 128077,
            "(]:{": 128115,
            "(n)": 128078,
            "(y)": 128077,
            "-_-": 128529,
            ":''(": 128557,
            ":''D": 128514,
            ":'(": 128546,
            ":(": 128542,
            ":(:)": 128055,
            ":(|)": 128053,
            ":)": 9786,
            ":)X": 129303,
            ":*": 128535,
            ":,": 128527,
            ":-(": 128542,
            ":-)": 9786,
            ":-)X": 129303,
            ":-*": 128535,
            ":-,": 128527,
            ":-/": 128533,
            ":-D": 128512,
            ":-O": 128558,
            ":-P": 128539,
            ":-S": 128534,
            ":-\\": 128533,
            ":-o": 128558,
            ":-p": 128539,
            ":-s": 128534,
            ":-|": 128528,
            ":/": 128533,
            ":3": 128568,
            ":C": 9785,
            ":D": 128512,
            ":O": 128558,
            ":P": 128539,
            ":S": 128534,
            ":X)": 128568,
            ":\\": 128533,
            ":o": 128558,
            ":p": 128539,
            ":s": 128534,
            ":|": 128528,
            ";)": 128521,
            ";*": 128536,
            ";-)": 128521,
            ";-*": 128536,
            ";-P": 128540,
            ";-p": 128540,
            ";P": 128540,
            ";_;": 128546,
            ";p": 128540,
            "</3": 128148,
            "<3": 10084,
            "<\\3": 128148,
            "='(": 128546,
            "=(": 128542,
            "=)": 128522,
            "=*": 128538,
            "=/": 128533,
            "=D": 128516,
            "=O": 128558,
            "=P": 128539,
            "=\\": 128533,
            "=^_^=": 128568,
            "=o": 128558,
            "=p": 128539,
            "=|": 128528,
            ">.<": 128547,
            ">:(": 128545,
            ">:(X": 128581,
            ">:-(": 128545,
            ">:D<": 129303,
            ">=(": 128545,
            ">_<": 128547,
            "B-)": 128526,
            "D:": 128550,
            "O.O": 128562,
            "O:)": 128519,
            "O:-)": 128519,
            "O=)": 128519,
            T_T: 128546,
            "V.v.V": 129408,
            "X(": 128565,
            "X-(": 128565,
            "X-O": 128565,
            "X-o": 128565,
            "\\m/": 129304,
            "\\o": 128587,
            "^_^": 128513,
            "^_^;;": 128517,
            "o.o": 128558,
            "o/": 128587,
            "o_o;": 128531,
            u_u: 128532,
            x_x: 128565,
            "}:)": 128520,
            "}:-)": 128520,
            "}=)": 128520,
            "~@~": 128169
```

If I have some free time in the future, I will edit this page to make a nice little table with the pictures and what not, but for now I think you should be able to decipher what most of them are just by their text versions.
