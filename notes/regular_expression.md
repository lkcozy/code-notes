---
title: Regular Expression-A pattern describing a certain amount of text.
emoji: "\U0001F4DD"
tags:
  - regex
link: https://www.regular-expressions.info/quickstart.html?wlr=1
created: 2020-07-11T05:16:40.000Z
modified: 2021-04-20T16:05:46.000Z
---

[Playground](https://regex101.com/)

A regular expression, or regex for short, is a pattern describing a certain amount of text.

A valid regex consists of `alphanumeric characters` representing the set of input symbols (e.g. a, B, 9), the `$` character representing the empty string, the choice operator `+`, the Kleene operator `s`, and parentheses `(` and `)`. An example of a valid regex is: `(a+B)_(c9+$)+$`.

## Cheat Sheet

- `*` Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
- `.*` matches any character (except for line terminators)
- `\d+` means one or more numbers
  ![](https://cdn.sspai.com/editor/u_sanko/15903151097080.gif)

- `(\d{3})(\d{4})(\d{4})`
  - 1st Capturing Group (`\d{3}`)
    - `\d{3}` matches a digit (equal to [0-9])
    - `{3}` Quantifier — Matches exactly 3 times

![](https://cdn.sspai.com/editor/u_sanko/15903151099127.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
![](https://cdn.sspai.com/editor/u_sanko/15903151099105.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

- replace different strings with the same string
  `/color: (rgb\(255, 255, 255\)|#f{6}}|#fff|white)/g, 'color: #000')`

- Modifier
  - `gi`: means global, case-insensitive,
- Multipliers

  - `* -` item occurs zero or more times(greedy, as many times as possible)..
  - `+ -` item occurs one or more times(greedy).
  - `? -` item occurs zero or one times(lazy, as few times as possible).
  - {5} - item occurs five times.
  - {3,7} - item occurs between 3 and 7 times.

- `l.*k`: Are you `looking at the lock or the silk`? (greedy)
- `l.*?k`: Are you `look`ing at the `lock` or the si`lk`? (lazy)

- Add `''` to all links, replace `link: (.*)` with `link: $1`

## [Check for prime numbers](https://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/)

`/^1?$|^(11+?)\1+$/`

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
