<div align="center">
  <img src="assets/logo-large.png" width="320">

[Online Version](lkcozy.github.io/code-notes/)

L&W code-related notes and snippets

  <p>
    <a href="https://github.com/MrMartineau/gatsby-theme-code-notes/blob/master/LICENSE" target="_blank">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="gatsby-theme-code-notes is released under the MIT license." />
    </a>
    <a>
      <img src="https://img.shields.io/github/package-json/v/lkcozy/code-notes" alt="Current version." />
    </a>
    <img src="https://github.com/lkcozy/code-notes/workflows/%F0%9F%9A%80%20Deployment/badge.svg?branch=master" alt="Deployment" />
    <a href="https://github1s.com/lkcozy/code-notes" target="_blank">
      <img src="https://img.shields.io/badge/Github1s-open-blue" alt="Open Code Notes with github1s" />
    </a>
  </p>
</div>

This application was built with [gatsby-theme-code-notes](https://github.com/mrmartineau/gatsby-theme-code-notes)

## Local Test Github Actions

Install [act](https://github.com/nektos/act)

```sh
brew install act
```

```sh
act --secret-file act.secrets
```

## Todo

- [x] [Post deployment status to the slack](https://www.freecodecamp.org/news/what-are-github-actions-and-how-can-you-automate-tests-and-slack-notifications/#part-2-post-new-pull-requests-to-slack)
- [x] [Send email notifications](https://medium.com/ravsam-web-solutions/send-an-email-notification-when-github-actions-fails-ea83cbeabbe0)
