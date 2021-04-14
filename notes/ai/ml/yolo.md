---
title: YOLO (You only Look Once )-A real-time object detection algorithma
emoji: 🤖
tags:
  - ai
  - yolo
  - object detection
link: https://arxiv.org/abs/1506.02640
created: 2021-04-06T11:02:43.000Z
modified: 2021-04-06T11:02:43.000Z
---

YOLO is a state-of-art real-time object detection algorithm.

![](https://learnai1home.files.wordpress.com/2020/06/image-13.png)

> Object detection is a computer vision task, which focus on `predicting an object's presence` and `localization in an image`.

## How does YOLO work?

YOLO network treats Object Detection as a regression problem. It `divides our image into regions, and predicts bounding boxes and probability for each region.`

1. Divide image into an SxS grid
2. If the center of object falls into a particular grid,
   - that grid cell predicts a set of bounding box coordinates for the object
   - along with a confidence value associated with each of the predicted bounding boxes
3. If the bounding box doesn't contain object in it
   - the value will be equal to zero.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--XjYoN2oh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x3cc14dupm376id92gtp.png)

## IOU

IOU implies Intersection over Union, which means we would take the size of intersection of two bounding boxes and divide it by union of two bounding boxes.

IOU = $\frac{SizeOfIntersection}{SizeOfUnion}$

## Loss Function

YOLO uses `sum-squared error` as its loss function.

> Loss function or cost function is used to determine the error between the output of our algorithms and the given target value. It expresses how far off the mark our computed output is. The optimization strategies aim at minimizing the cost function.
