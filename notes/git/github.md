---
title: Github Tips
emoji: "\U0001F4DD"
tags:
  - github
  - git
  - shell
  - cli
link: >-
  https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/
created: 2020-07-18T05:59:45.000Z
modified: 2021-04-12T23:30:00.000Z
---

## [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.

GitHub Pages is disabled by default, endable it in each repository's setting

## [Cli](https://cli.github.com/manual/)

`gh` is GitHub on the command line. It brings pull requests, issues, and other GitHub concepts to the terminal next to where you are already working with git and your code.

```sh
brew install gh
brew upgrade gh

gh auth login
gh config set git_protocol ssh
```

## [Set Secrets](https://cli.github.com/manual/gh_secret_set)

```sh
gh secret set EMAIL_USERNAME -b""
gh secret set EMAIL_PASSWORD -b""
gh secret set SLACK_WEBHOOK_URL -b""
```

> Note: get slack webhook url from [here](https://api.slack.com/apps/A017PRMPCEB/incoming-webhooks)

## Work with fuzzy-finder tools such as [fzf](https://github.com/junegunn/fzf)

```sh
brew install fzf
gh pr list | fzf
```

> Note: The fzf utility allows interactively filtering the input stream and prints the selected line as its output.

## Github Readme Stats

![](https://github-readme-stats.vercel.app/api?username=lkcozy&show_icons=true&theme=tokyonight&hide_title=true)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=lkcozy&layout=compact&theme=tokyonight)

> Supported by the [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)

## [Awesome-Profile-README-templates](https://github.com/kautukkundan/Awesome-Profile-README-templates)

-[Example](https://github.com/kautukkundan/Awesome-Profile-README-templates/blob/master/dynamic-realtime/8bithemant.md)

## [Tips](https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/)

### One second to read GitHub code with VS Code.

![](https://raw.githubusercontent.com/conwnet/github1s/master/resources/images/vs-code-github1s.png)

Just add 1s after github and press Enter in the browser address bar for any repository you want to read.

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

[Online tool to convert other formats to markdown table](https://tableconvert.com/)

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
    <th width="50%">Adds one-click merge conflict fixers</th>
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

### Count total files

```sh
git ls-files $notes | wc -l
```

### Count diff files

```sh
git diff --name-only "@{1 day ago}" $notes | wc -l
```

## https://stackoverflow.com/questions/29473255/make-jira-links-clickable-in-github

https://github.blog/2019-10-14-introducing-autolink-references/

## [Workflows](https://zepel.io/blog/5-git-workflows-to-improve-development/)

![](https://zepel.io/blog/content/images/2020/05/GitFlow-git-workflow-2.png)

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
