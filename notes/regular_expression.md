---
title: Regular Expression
emoji: 📝
tags:
  - regex
link: https://www.regular-expressions.info/quickstart.html?wlr=1
---

A regular expression, or regex for short, is a pattern describing a certain amount of text.

A valid regex consists of `alphanumeric characters` representing the set of input symbols (e.g. a, B, 9), the `$` character representing the empty string, the choice operator `+`, the Kleene operator `s`, and parentheses `(` and `)`. An example of a valid regex is: `(a+B)_(c9+$)+$`.

## Cheat Sheet

- `*` Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
- `.*` matches any character (except for line terminators)
- `\dt` means one or more numbers
  ![](https://cdn.sspai.com/editor/u_sanko/15903151097080.gif)

- `(\d{3})(\d{4})(\d{4})`
  - 1st Capturing Group (`\d{3}`)
    - `\d{3}` matches a digit (equal to [0-9])
    - `{3}` Quantifier — Matches exactly 3 times

![](https://cdn.sspai.com/editor/u_sanko/15903151099127.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
![](https://cdn.sspai.com/editor/u_sanko/15903151099105.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## Basic

### [Literal Characters](https://www.regular-expressions.info/characters.html)

Twelve characters have special meanings in regular expressions: the **backslash** `\`, the **caret** `^`, the **dollar sign** `$`, the **period** or **dot** `.`, the **vertical bar** or **pipe symbol** `|`, the question mark `?`, the **asterisk or star** `*`, the **plus sign** `+`, the **opening parenthesis** `(`, the **closing parenthesis** `)`, the **opening square bracket** `[`, and the **opening curly brace** `{`. These special characters are often called “metacharacters”. Most of them are errors when used alone.

### [Character Classes or Character Sets](https://www.regular-expressions.info/charclass.html)

To match an a or an e, use [ae]. You could use this in gr[ae]y to match either gray or grey.

A character class matches only a single character. gr[ae]y does not match graay, graey or any such thing.

## Tools

### [Regular Expressions Gym](http://ivanzuzak.info/noam/webapps/regex_simplifier/)

![](https://www.researchgate.net/publication/334414124/figure/fig2/AS:779823869878273@1562935907850/Figura-4-Pagina-Regular-Expression-Gym-12-com-exemplo-de-uma-expressao-a-ser-reduzida.ppm)

Simplify a regular expression.

## Resources

### [Awesome Regex](https://github.com/aloisdg/awesome-regex)

### [Useful Regular Expressions](https://atrilsolutions.zendesk.com/hc/en-us/articles/205539861-Useful-regular-expressions)
