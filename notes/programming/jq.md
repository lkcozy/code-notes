---
title: jq
emoji: "\U0001F4DD"
tags:
  - json
link: 'https://cameronnokes.com/blog/working-with-json-in-bash-using-jq/'
created: 2021-03-02T05:35:19.000Z
modified: 2021-03-02T05:35:19.000Z
---

[jq playground](https://jqplay.org/)

jq is a lightweight and flexible command-line JSON processor. jq is like `sed` for JSON data. You can use it to slice and filter and map and transform structured data with the same ease that `sed` and `grep` let you play with text.

## Remove unused dependencies from package.json

```sh
set -e

# function to grep for a dependency
grep_dep() {
  # params: $1 = the string to grep for, $2 = directory to grep in

  # [1]
  grep --include="*.js" --exclude-dir="node_modules" -R --color -n "require\(.*$1.*\)" "$2"

  # if grep returns 0 results, it has an exit code of 1. No results means dependency is not in use
  if [[ $? > 0 ]]; then
    echo
    echo "** No uses of $1 found, consider removing. **"
    echo
  fi
}

# [2]
export -f grep_dep

# [3]
jq -r '.dependencies | keys | .[]' package.json | \
  # [4]
  xargs -I '{}' -P 4 -t bash -c "grep_dep '{}' ."
```

## Get a property

```sh
echo '{ "foo": 123, "bar": 456 }' | jq '.foo'
# 123
```

> Be sure to always wrap your jq selector in a single-quotes, otherwise bash tries to interpret all the symbols like ., whereas we want jq to do that.

## Iteration

```sh
echo '[ {"id": 1}, {"id": 2} ]' | jq '.[].id'
# 1,2
```

Returns the number of dependencies and devDependencies a package.json contains.

```sh
jq -r '[(.dependencies, .devDependencies) | keys] | flatten | length' package.json
```

## Extract the first item from output

```sh
curl 'https://api.github.com/repos/stedolan/jq/commits?per_page=5' | jq '.[0]'
```

## References

- [jq Cheat Sheet](https://lzone.de/cheat-sheet/jq)
