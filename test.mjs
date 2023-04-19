#!/usr/bin/env zx

await $`cat package.json | grep name`;

let date = await $`date`;
await $`echo Current date is ${date}.`;
