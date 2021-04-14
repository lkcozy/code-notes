---
title: Pandoc
emoji: 📝
tags:
  - pandoc
  - cli
  - shell
link: https://github.com/jgm/pandoc
created: 2021-04-14T11:33:53.000Z
modified: 2021-04-14T11:33:53.000Z
---

[Online Converter](https://pandoc.org/try/)

Pandoc is a Haskell library for `converting from one markup format to another`, and a command-line tool that uses this library.

Pandoc can also produce PDF output via LaTeX, Groff ms, or HTML.

Pandoc’s enhanced version of Markdown includes syntax for tables, definition lists, metadata blocks, footnotes, citations, math, and much more. See the User’s Manual below under Pandoc’s Markdown.

## [Getting Started](https://pandoc.org/getting-started.html)

```sh
brew install pandoc
```

convert markdown to html

```sh
pandoc test1.md -f markdown -t html -s -o test1.html
```

## Customizing code block highlighting

![code](https://rmoff.net/images/2020/04/docx.png)

```sh
asciidoctor --backend docbook --out-file - $INPUT_ADOC| \
pandoc --from docbook --to docx --output $INPUT_ADOC.docx \
       --highlight-style espresso
```

It can work with [assciidoctor](https://asciidoctor.org/)

## Get a list of available styles

```sh
pandoc --list-highlight-styles
```
