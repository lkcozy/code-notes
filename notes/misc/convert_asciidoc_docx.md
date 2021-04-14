---
title: Convert ASCIDOC to DOCX
emoji: 📝
tags:
  - asciidoc
  - docx
  - shell
  - pandoc
  - asciidoc
link: https://rmoff.net/2020/04/16/converting-from-asciidoc-to-google-docs-and-ms-word/
created: 2021-04-14T11:29:52.000Z
modified: 2021-04-14T11:29:52.000Z
---

```sh
#!/bin/bash
INPUT_EXTENSION=adoc
OUTPUT_EXTENSION=docx

# for multiple extensions
# find . -type f -name "*.img" -o -name "*.bin" -o -name "*.txt"`;
for fullpath in $(find . -name "*.$INPUT_EXTENSION" -type f); do
    # Strip longest match of */ from start
    filename="${fullpath##*/}"
    # Substring from 0 thru pos of filename
    dir="${fullpath:0:${#fullpath}-${#filename}}"
    # Strip shortest match of . plus at least one non-dot char from end
    base="${filename%.[^.]*}"
    # Substring from len of base thru end
    ext="${filename:${#base}+1}"
    # If we have an extension and no base, it's really the base
    if [[ -z "$base" && -n "$ext" ]]; then
        base=".$ext"
        ext=""
    fi
    # echo -e "$fullpath:\n\tdir  = \"$dir\"\n\tbase = \"$base\"\n\text  = \"$ext\""
    INPUT_FILE_PATH=$dir$base
    asciidoctor --backend docbook --out-file - $INPUT_FILE_PATH.$INPUT_EXTENSION |
        pandoc --from docbook --to $OUTPUT_EXTENSION --output $INPUT_FILE_PATH.$OUTPUT_EXTENSION
    echo "Convert $INPUT_FILE_PATH.$ext to INPUT_FILE_PATH.$OUTPUT_EXTENSION sussfully"
done
```

## References

- [Converting from AsciiDoc to Google Docs and MS Word](https://rmoff.net/2020/04/16/converting-from-asciidoc-to-google-docs-and-ms-word/)
- [AsciiDoc(Adoc)](https://lkcozy.github.io/code-notes/misc/asscii_doc)
- [Pandoc](https://lkcozy.github.io/code-notes/misc/pandoc)
- [Loop through all the files with a specific extension](https://stackoverflow.com/questions/14505047/loop-through-all-the-files-with-a-specific-extension#14505622)
