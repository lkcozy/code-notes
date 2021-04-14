---
title: AsciiDoc
emoji: 📝
tags:
  - asciidoc
  - cli
  - shell
link: https://asciidoc.org/
created: 2021-04-14T11:41:30.000Z
modified: 2021-04-14T11:41:30.000Z
---

AsciiDoc is a text document format for writing notes, documentation, articles, books, ebooks, slideshows, web pages, man pages and blogs. AsciiDoc files can be translated to many formats including HTML, PDF, EPUB, man page.

## Asciidoctor

Asciidoctor is a fast, open source text processor and publishing toolchain for converting AsciiDoc content to HTML5, DocBook, PDF, and other formats. Asciidoctor is written in Ruby and runs on all major operating systems.

It can work with [pandoc](https://lkcozy.github.io/code-notes/misc/pandoc)

```sh
brew install asciidoctor
```

```sh
asciidoctor --backend docbook --out-file - $INPUT_ADOC| \
pandoc --from docbook --to docx --output $INPUT_ADOC.docx \
       --highlight-style espresso
```

## Troubleshooting

- [warning: Insecure world writable dir /usr/local/bin in PATH, mode 040777](https://stackoverflow.com/questions/26711249/how-to-solve-insecure-world-writable-dir-usr-in-path-mode-040777-warning-on-rub)

```sh
sudo chmod 775 /usr/local/bin
```
