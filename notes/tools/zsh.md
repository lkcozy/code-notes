---
title: Zsh
emoji: "\U0001F4DD"
tags:
  - cli
  - zsh
link:
created: 2021-01-27T22:11:10.000Z
modified: 2022-02-14T16:05:46.000Z
---

## [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)

Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

## [Powerlevel10K - a theme for Zsh](https://github.com/romkatv/powerlevel10k)

![powerlevel10k](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/prompt-styles-high-contrast.png)

1. Install the [recommended font](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)
2. Install the theme

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.

3. Restart Zsh.
4. Type p10k configure if the configuration wizard doesn't start automatically.
5. Install `zsh-autosuggestions`

```sh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Add the plugin to the list of plugins for Oh My Zsh to load (inside `~/.zshrc`):

```sh
plugins=(zsh-autosuggestions)
```

## [Change node version automatically with nvm](https://mrgregory.dev/posts/change-node-version-automatically-zsh)

```sh
function change_node_version {
	nvmrc="./.nvmrc"
	if [ -f "$nvmrc" ]; then
		version="$(cat "$nvmrc")"
		nvm use $version
	fi
}

chpwd_functions=(change_node_version)
```

```sh
# Use specific node version, like: 12.10
echo "12.10" > .nvmrc
# Set latest LTS node version as default
echo "lts/*" > .nvmrc
# Set latest node version as default
echo "node" > .nvmrc
```
