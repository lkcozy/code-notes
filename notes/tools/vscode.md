---
title: Visual Studio Code
emoji: 📝
tags:
  - tool
  - vscode
link:
---

## [Fix the screen flicker](https://code.visualstudio.com/updates/v1_40#_disable-gpu-acceleration)

```sh
code --disable-gpu
```

or

- Open the Command Palette (`⇧⌘P`).
- Run the Preferences: Configure Runtime Arguments command.
- This command will open a `argv.json` file to configure runtime arguments. You might see some default arguments there already.
- Add `"disable-hardware-acceleration": true`.
- Restart VS Code.

## Extensions

### Git

- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

![](https://github.com/Microsoft/vscode-pull-request-github/raw/master/.readme/demo.gif)

Review and manage your GitHub pull requests and issues directly in VS Code

### AWS

- [AWS Toolkit for Visual Studio Code](https://marketplace.visualstudio.com/itemdetails?itemName=AmazonWebServices.aws-toolkit-vscode)

![](https://github.com/aws/aws-toolkit-vscode/raw/master/resources/marketplace/open-command-palette.gif)

AWS Toolkit for Visual Studio Code, an extension for working with AWS services including AWS Lambda.

- [AWS CLI Configure](https://marketplace.visualstudio.com/items?itemName=mark-tucker.aws-cli-configure)

![](https://github.com/rmtuckerphx/aws-cli-configure/raw/master/images/commands.png)

The AWS CLI Configure extension allows you to quickly access AWS CLI information and docs from Visual Studio Code.

- [Serverless Console](https://marketplace.visualstudio.com/items?itemName=devAdvice.serverlessconsole)

![](https://github.com/domagojk/serverless-console/raw/master/gifs/dynamodb.gif)

Serverless Console is an alternative UI for AWS Cloudwatch. Its focus is on "serverless functions" but it can also be used for any kind of log group.

- [Debugger for AWS Lambda](https://marketplace.visualstudio.com/items?itemName=thundra.thundra-debugger),

![](https://github.com/thundra-io/thundra-vscode-issues/raw/master/resources/thundra-vscode.gif)

Debug the AWS Lambda functions locally

## References

[awesome-vscode](https://github.com/viatsko/awesome-vscode)
