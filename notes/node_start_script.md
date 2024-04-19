---
title: Node Start Script
emoji: "\U0001F4DD"
tags:
  - node
  - shell
  - javascript
link:
created: 2020-11-16T04:20:05.000Z
modified: 2021-04-20T16:05:46.000Z
---

```js
const { exec } = require("child_process");

const args = process.argv.slice(2);

const deployment = args[0] || "dev";

const DEPLOYMENT_CONFIGS = {
  dev: "dev",
};

const tempConfigPath = "public/config/config-temp.json";
const remoteConfigPath = `https://${
  DEPLOYMENT_CONFIGS[deployment] || DEPLOYMENT_CONFIGS.dev
}/config/config.json`;
const commands = `mkdir -p public/config/ && curl -o ${tempConfigPath} ${remoteConfigPath}`;

exec(commands, (error) => {
  const messagePrefix = `Download [${deployment}] remote config file`;
  if (error) {
    console.error(`${messagePrefix} failed`, error.message);
    return;
  }
  // eslint-disable-next-line no-console
  console.log(`${messagePrefix} successfully.`, remoteConfigPath);

  const start = exec("yarn react-scripts start");
  start.stdout.on("data", (data) => {
    console.log("stdout", data);
    // do whatever you want here with data
  });
  start.stderr.on("data", (data) => {
    console.error("stderr", data);
  });
});
```

```sh
#!/bin/bash
CONFIG_PATH_DOMAIN=""
TEMP_CONFIG_PATH="public/config/config-temp.json"

case "$1" in
sbx) CONFIG_PATH_DOMAIN="sbx" ;;
*) CONFIG_PATH_DOMAIN="test" ;;
esac

CONFIG_PATH="https://${CONFIG_PATH_DOMAIN}/config/config.json"

echo "Download  ${S1} Config ${CONFIG_PATH} successfully"

mkdir -p public/config/ && curl -o ${TEMP_CONFIG_PATH} ${CONFIG_PATH}
react-scripts start
```
