---
title: Zsh
emoji: 📝
tags:
  - cli
  - zsh
link:
---

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

## [zsh-syntax-highlighting]()

```zsh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Activate the plugin in ~/.zshrc:

```zsh
plugins=( [plugins...] zsh-syntax-highlighting)
```
