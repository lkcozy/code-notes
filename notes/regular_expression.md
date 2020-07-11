---
title: Regular Expression
emoji: 📝
tags:
  - regex
link: https://www.regular-expressions.info/quickstart.html?wlr=1
---

A regular expression, or regex for short, is a pattern describing a certain amount of text.

## Basic

### [Literal Characters](https://www.regular-expressions.info/characters.html)

Twelve characters have special meanings in regular expressions: the **backslash** `\`, the **caret** `^`, the **dollar sign** `$`, the **period** or **dot** `.`, the **vertical bar** or **pipe symbol** `|`, the question mark `?`, the **asterisk or star** `*`, the **plus sign** `+`, the **opening parenthesis** `(`, the **closing parenthesis** `)`, the **opening square bracket** `[`, and the **opening curly brace** `{`. These special characters are often called “metacharacters”. Most of them are errors when used alone.

### [Character Classes or Character Sets](https://www.regular-expressions.info/charclass.html)

To match an a or an e, use [ae]. You could use this in gr[ae]y to match either gray or grey.

A character class matches only a single character. gr[ae]y does not match graay, graey or any such thing.
