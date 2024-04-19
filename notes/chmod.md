---
title: Chmod
emoji: "\U0001F4DD"
tags:
  - sh
  - unix
link: https://en.wikipedia.org/wiki/Chmod
created: 2021-03-11T22:28:24.000Z
modified: 2021-03-11T22:28:24.000Z
---

- chmod: change modes, which is used to change access permissions of file systems objects (files and directories)

- Modes are the filesystem permissions given to user, group, and others.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fserver99s.com%2Fserver99s-blog%2Fwp-content%2Fuploads%2F2020%2F08%2FCHMOD-File-Permission-1024x683.png&f=1&nofb=1)

## Numerical permissions

The chmod numerical format accepts up to four octal digits. `The three rightmost digits define permissions for the file user, the group, and others.`

| #   | Permission              | rwx | Binary |
| --- | ----------------------- | --- | ------ |
| 7   | read, write and execute | rwx | 111    |
| 6   | read and write          | rw- | 110    |
| 5   | read and execute        | r-x | 101    |
| 4   | read only               | r-- | 100    |
| 3   | write and execute       | -wx | 011    |
| 2   | write only              | -w- | 010    |
| 1   | execute only            | --x | 001    |
| 0   | none                    | --- | 000    |

![](https://i.stack.imgur.com/RG9VE.png)

- `chmod +x` adds the execute permission for all users to the existing permissions.

- `chmod 755` sets the `755` permission for a file.

- `755` means full permissions for the owner and read and execute permission for others.
  - 7 --> u=rwx (4+2+1 for owner)
  - 5 --> g=rx (4+1 for group)
  - 5 --> o=rx (4+1 for others)
