---
title: Github Tips
emoji: 📝
tags:
  - github
  - git
link: https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/
---

## Github Readme Stats

![](https://github-readme-stats.vercel.app/api?username=lkcozy&show_icons=true&theme=tokyonight&hide_title=true)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=lkcozy&layout=compact&theme=tokyonight)

> Supported by the [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)

## [Awesome-Profile-README-templates](https://github.com/kautukkundan/Awesome-Profile-README-templates)

-[Example](https://github.com/kautukkundan/Awesome-Profile-README-templates/blob/master/dynamic-realtime/8bithemant.md)

## [Tips](https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/)

### Code Suggestions

```suggestion
# Change line
```

![](https://res.cloudinary.com/practicaldev/image/fetch/s--N4_nzfO7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/4naqtovc61o8mhk7kl81.gif)

### 🔎 Fuzzy file finder

Press `t` in any repository to access it and start typing the name of the file you want to find.

![](https://i1.wp.com/user-images.githubusercontent.com/121322/78818953-5105be00-798a-11ea-9f48-5626b0f7cb58.gif?ssl=1)

### Linking to code snippets

To add a code snippet: select the lines you want to reference, open the inline toolbar, click Copy permalink, and paste it anywhere.

![](https://github.blog/wp-content/uploads/2017/08/29129733-c682da44-7cf5-11e7-8c73-7eaea274c5ae.gif?resize=1360%2C600)

### [Markdown formatting tips](https://github.github.com/gfm/#task-list-items-extension-)

#### Keyboard tags

```html
Press <kbd>W</kbd> to go up, and <kbd>A</kbd> to go down. If you can find the
<kbd>ESC</kbd>, pressing that will fire missiles 🚀
```

#### Visualizing hex codes

Placing hex colors in backticks renders a tile in that color.

```sh
GitHub contribution graph colors: `#C6E48B` `#7AC96F` `#249A3C` `#196127`
```

#### Visualizing diffs

```diff
10 PRINT “BASIC IS COOL”
- 20 GOTO 11
+ 20 GOTO 10
```

#### Centering text and images

```html
<div align="center">
  <img src="https://octodex.github.com/images/dunetocat.png" width="200" />
  <p>This is some centered text.</p>
</div>
<div align="center">
  <img src="https://octodex.github.com/images/dunetocat.png" width="200" />
  <p>This is some centered text.</p>
</div>
```

#### Inserting a table

|      Type       |              Battery-powered End Device               |         Always-on End Device          |       IoT Gateway        | Cloud Backend Traditional |
| :-------------: | :---------------------------------------------------: | :-----------------------------------: | :----------------------: | :-----------------------: |
| Traditional IoT |              Sensor with Custom Protocol              |      Sensor with Custom Protocol      |    Transparent Proxy     | Centralized Core Services |
| Blockchain IoT  | Server-trusting Client or Sensor with Custom Protocol | Thin Client or Server-trusting Client | Full Node or Thin Client |   Miners and Full Nodes   |

#### Inserting a table with html

```html
<table>
  <tr>
    <th width="50%">
      <a title="show-whitespace"></a> Show whitespace characters.
    </th>
    <th width="50%">
      Adds one-click merge conflict fixers
    </th>
  </tr>
  <tr>
    <!-- Prevent zebra stripes -->
  </tr>
  <tr>
    <td>
      <img
        src="https://user-images.githubusercontent.com/1402241/61187598-f9118380-a6a5-11e9-985a-990a7f798805.png"
      />
    </td>
    <td>
      <img
        src="https://user-images.githubusercontent.com/1402241/54978791-45906080-4fdc-11e9-8fe1-45374f8ff636.png"
      />
    </td>
  </tr>
</table>
```

### Delete a bunch of Github Repositories

```sh
#!/bin/sh

# Delete a bunch of GitHub repos
nukem="repo1 repo2"
user=""
password_or_oauth_token=""

for repo in $nukem; do
    echo "Deleting https://github.com/repos/$user/$repo"
    curl -v -u "$user:$password_or_oauth_token" -X DELETE \
       "https://api.github.com/repos/$user/$repo"
done
```

## Extensions

- [Refined GitHub](https://github.com/sindresorhus/refined-github)

Browser extension that simplifies the GitHub interface and adds useful features

- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)

Browser extension that enhances GitHub code review and exploration.

## Tutorials

- [How to track and display profile views on GitHub](https://rushter.com/blog/github-profile-markdown/)

- [Building a self-updating profile README for GitHub](https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/)

## Resources

- [HelloGitHub](https://github.com/521xueweihan/HelloGitHub/blob/master/README_en.md)

HelloGitHub is sharing interesting, entry-level open source projects on GitHub.

- [Github APIs](https://developer.github.com/v3/)

The official GitHub REST API v3.