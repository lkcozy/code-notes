---
title: FFmpeg-An audio/video conversion tool.
tags:
  - cli
  - video
  - audio
link: "https://sspai.com/post/60772"
created: 2020-06-25T22:26:37.000Z
modified: 2021-04-14T22:02:32.000Z
---

FFmpeg is a free and open-source software project consisting of a large suite of libraries and programs for handling video, audio, and other multimedia files and streams.

- [FFmpeg cheat sheet](https://gist.github.com/steven2358/ba153c642fe2bb1e47485962df07c730)

## Basic conversion

```sh
ffmpeg -i in.mov out.mp4
```

## Combine multiple videos into one

First, make a text file, `touch list.txt`.

```txt
file 'in1.mp4'
file 'in2.mp4'
file 'in3.mp4'
file 'in4.mp4'
```

```sh
ffmpeg -f concat -i list.txt -c copy out.mp4
```
