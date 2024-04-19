---
title: Script for macOS that automates desktop screenshots and video capture
emoji: 📝
tags:
  - macos
  - bash
link: https://markholloway.com/2018/11/14/macos-screencapture-terminal/
created: 2021-05-15T12:51:51.000Z
modified: 2021-05-15T12:51:51.000Z
---

When the script runs it will take a screenshot of the desktop every 30 seconds and quit after 45 screenshots. This is set by the value freq=30 and maxshots=45.

```sh
#!/bin/bash
# script to run screencapture

screenshot="$(which screencapture) -x -m -C"
freq=30		#take a screenshot every 30 seconds
maxshots=45	#take 45 screenshots then quit

while getopts "af:m" opt; do
	case $opt in
	f ) freq=$OPTARG;		;;
	m ) maxshots=$OPTARG;	;;
	? ) echo "Usage: $0 [-f frequency] [-m maxcaps]" >&2
		exit 1
	esac
done

#set startng number; incrementally append to filename
counter=1

while [ $counter -lt $maxshots ] ; do
	$screenshot screenshot${counter}.jpg
	counter=$(( counter + 1 ))
	sleep $freq
done

exit
```

## Making screencap.sh executable

```sh
chmod +x screencap.sh
./screencap.sh
./screencap.sh -f 8
```
