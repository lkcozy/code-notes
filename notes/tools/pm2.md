---
title: P(rocess) M(anager) 2
emoji: "\U0001F4DD"
tags:
  - pm2
  - cli
link: 'https://github.com/Unitech/pm2'
created: 2020-09-24T05:00:14.000Z
modified: 2020-09-24T05:00:14.000Z
---

PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

## Start an application

```sh
pm2 start app.js
```

## List all processes

![](https://pm2.keymetrics.io/assets/pm2-list.png)

```sh
pm2 ls
```

## Monitor

![](https://pm2.keymetrics.io/assets/pm2-monit.png)

```sh
pm2 monit
```

## [Upgrade](https://pm2.keymetrics.io/docs/usage/update-pm2/)

```sh
# save correctly all your processes
pm2 save
# install the latest PM2 version from NPM
npm install pm2@latest -g
# update the in-memory PM2 process
pm2 update
# When you upgrade your Node.js version, the node binary path will change.
# To update the PM2 startup script
pm2 unstartup
pm2 startup
```
