---
title: Python Utils
emoji: 📝
tags:
  - python
  - dev
link:
created: 2022-11-01T18:27:09.000Z
modified: 2022-11-01T18:27:09.000Z
---

## String

### Convert string to snake case

```python
def snake_case(s):
    return '_'.join(
        sub('([A-Z][a-z]+)', r' \1',
            sub('([A-Z]+)', r' \1',
                s.replace('-', ' '))).split()).lower()
```

## File

### Find all files in the directory by the specified extension type

```python
from glob import glob

def find_files_by_extension(dir_path, extension):
    return glob(path.join(dir_path, "*.{}".format(extension)))
```

### Get file name without the extension

```python
from pathlib import Path

def get_file_name_no_extension(path):
    return Path(path).stem
```

### Create file directories if not exists

```python
import os

def init_dir_paths():
    for path in [dir_path, processed_dir_path, unprocessed_dir_path]:
        if not os.path.exists(path):
            os.mkdir(path)
            print(f'Create directory {path}')
```

### [Extract images from pdf](https://github.com/lkcozy/lkcozy/tree/master/scripts/extract_images_from_pdf)
