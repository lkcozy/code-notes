---
title: Github Tips
emoji: "\U0001F4DD"
tags:
  - github
  - git
  - shell
  - cli
link: https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/
created: 2020-07-18T05:59:45.000Z
modified: 2021-06-04T16:05:46.000Z
---

- [Set up and use multiple GitHub accounts on the same computer](#set-up-and-use-multiple-github-accounts-on-the-same-computer)
- [Defaults for Github repositories](#defaults-for-github-repositories)
- [Connect local npm to the GitHub Package Registry](#connect-local-npm-to-the-github-package-registry)
- [GitHub Web Editor](#github-web-editor)
- [Keyboard Shortcut](#keyboard-shortcut)
- [octokit.js](#octokitjs)
- [GitHub Pages](#github-pages)
- [Cli](#cli)
- [Set Secrets](#set-secrets)
- [Work with fuzzy-finder tools such as fzf](#work-with-fuzzy-finder-tools-such-as-fzf)
- [Github Readme Stats](#github-readme-stats)
- [Awesome-Profile-README-templates](#awesome-profile-readme-templates)
- [Tips](#tips)
  - [One second to read GitHub code with VS Code](#one-second-to-read-github-code-with-vs-code)
  - [Code Suggestions](#code-suggestions)
  - [🔎 Fuzzy file finder](#-fuzzy-file-finder)
  - [Linking to code snippets](#linking-to-code-snippets)
  - [Markdown formatting tips](#markdown-formatting-tips)
    - [Keyboard tags](#keyboard-tags)
    - [Visualizing hex codes](#visualizing-hex-codes)
    - [Visualizing diffs](#visualizing-diffs)
    - [Centering text and images](#centering-text-and-images)
    - [Inserting a video](#inserting-a-video)
    - [Inserting a table](#inserting-a-table)
    - [Inserting a table with html](#inserting-a-table-with-html)
  - [Delete a bunch of Github Repositories](#delete-a-bunch-of-github-repositories)
  - [Count total files](#count-total-files)
  - [Count diff files](#count-diff-files)
- [Workflows](#workflows)
- [Extensions](#extensions)
- [Tutorials](#tutorials)
- [Resources](#resources)

## [Set up and use multiple GitHub accounts on the same computer]()

1. Create separate SSH keys for each GitHub account:

```sh
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

Save each key with a unique name (e.g., id_rsa_personal, id_rsa_work).

2. Add the SSH keys to the SSH agent:

```sh
ssh-add ~/.ssh/id_rsa_personal
ssh-add ~/.ssh/id_rsa_work
```

3. Add SSH Keys to GitHub

Copy the public key contents:

```sh
cat ~/.ssh/id_rsa_personal.pub
```

Add the public key to each respective GitHub account in the SSH and GPG keys settings.

4. Create or edit the SSH config file:

```sh
nano ~/.ssh/config
```

```txt
# Personal account
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_personal

# Work account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_work
```

5. For each repository, set the appropriate user name and email:

```sh
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

6. Clone and Use Repositories

```sh
git clone git@github.com-personal:username/repo.git
git clone git@github.com-work:username/repo.git
# For existing repositories, update the remote URL:
git remote set-url origin git@github.com-personal:username/repo.git
```

## [Defaults for Github repositories](https://wiringbits.net/blog/github-repository-setup)

![](https://wiringbits.net/assets/posts/github-repository-setup/branch-list.png)

## Connect local npm to the GitHub Package Registry

```sh
npm login --registry=https://npm.pkg.github.com
```

> 💡 Enter your GitHub user info. Username is your GitHub user name. When using 2FA, password is your applicable personal access token.

> 💡 Make sure your personal access token has the ability to read from GitHub Package Registry.

## [GitHub Web Editor](https://docs.github.com/en/codespaces/developing-in-codespaces/web-based-editor)

Open in github.dev editor by pressing the . (period).

## Keyboard Shortcut

![](https://user-images.githubusercontent.com/11204251/129115211-749e5ef4-f287-408d-bb0e-62cc057b5bc4.png)

## [octokit.js](https://github.com/octokit/octokit.js)

The all-batteries included GitHub SDK for Browsers, Node.js, and Deno.

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

### One second to read GitHub code with VS Code

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

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

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

#### Inserting a video

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

```html
<a
  href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
"
  target="_blank"
  ><img
    src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
    alt="IMAGE ALT TEXT HERE"
    width="240"
    height="180"
    border="10"
/></a>
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
