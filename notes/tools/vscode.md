'---
title: Visual Studio Code
emoji: "\U0001F4DD"
tags:

- tools
- vscode
  link:
  created: 2020-07-02T20:13:36.000Z
  modified: 2022-04-10T16:05:46.000Z

---

## Shortcut

- ^ : control
- Duplicate line: Alt + Shift + Down Arrow
- Select columns (vertical select): Shift + Option
- Go To Line: ^ + G

## Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

A monospaced fonts with cool coding ligatures.

```json
{
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontSize": 13,
  "editor.fontLigatures": true
}
```

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

## [Containerize your Development with VS Code Dev Containers](https://www.youtube.com/watch?v=cB86HE_HIDc)

![](https://code.visualstudio.com/assets/docs/remote/containers/architecture-containers.png)

The Visual Studio Code Remote - Containers extension lets you use a Docker container as a full-featured development environment. It allows you to open any folder inside (or mounted into) a container and take advantage of Visual Studio Code's full feature set.

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

### Misc

- [JSON Hero](https://marketplace.visualstudio.com/items?itemName=JSONHero.jsonhero-vscode): Quickly view JSON in jsonhero.io - a beautiful JSON viewer for the web.

![](https://github.com/jsonhero-io/vscode-extension/raw/main/assets/jsonhero-viewinjsonhero.gif)

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

![](https://res.cloudinary.com/codebond/image/upload/v1580194426/xwjtbdfuzitsxmeketmg.png)

This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.

- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

Synchronize settings, snippets, themes, file icons, keybindings, workspaces and extensions.

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

![](https://github.com/aaron-bond/better-comments/raw/master/images/better-comments.PNG)

The Better Comments extension will help you create more human-friendly comments in your code.

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

A basic spell checker that works well with camelCase code.

The goal of this spell checker is to help catch common spelling errors while keeping the number of false positives low.

- [TabNine](https://tabnine.com/)

![](https://camo.githubusercontent.com/76ac1a10f01ec637c0406ed76b31e31f18411f4c/68747470733a2f2f7777772e77616e67626173652e636f6d2f626c6f67696d672f61737365742f3230313930372f6267323031393037313830352e6a7067)

This is the Visual Studio Code TabNine client, advanced AI based autocomplete for all programming languages. TabNine Indexes your entire project by reading your .gitignore or others, and determines which files to index.

- [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)

![](https://cloud.githubusercontent.com/assets/2899448/10712456/3c5e29b6-7a9c-11e5-9ce4-7eb944889696.gif)

A wrapper around node-change-case for Visual Studio Code. Quickly change the case of the current selection or current word.

If only one word is selected, the extension.changeCase.commands command gives you a preview of each option:

- [VS Code Slides](https://github.com/nicoespeon/vscode-slides)

![](https://github.com/nicoespeon/vscode-slides/raw/master/assets/showcase.gif?raw=true)

Slides is a Visual Studio Code extension that helps you use your editor as a presentation tool.

- [Geo Data Viewer](https://github.com/RandomFractals/geo-data-viewer)

![](https://github.com/RandomFractals/geo-data-viewer/blob/master/images/geo-data-viewer.png?raw=true)

Geo Data Viewer 🗺️ comes with a built-in map gallery for devs to try kepler.gl maps 🗺️ found in the wild 🌐:

- [Data Preview](https://github.com/RandomFractals/vscode-data-preview)

![](https://github.com/RandomFractals/vscode-data-preview/raw/master/images/vscode-data-preview.png?raw=true)

Data Preview 🈸 extension for importing 📤 viewing 🔎 slicing 🔪 dicing 🎲 charting 📊 & exporting 📥 large .json array .arrow .avro data files, .config .env .properties .ini .yml configurations files, .csv/.tsv & .xlsx/.xlsb Excel files and .md markdown tables.

- [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)

![](https://image.ibb.co/dysw7p/insert_log_message.gif)

This extension make debugging much easier by automating the operation of writing meaningful log message.

- [TypeScript Error Translator](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator#tserror)

![](https://raw.githubusercontent.com/mattpocock/ts-error-translator/main/assets/screenshot.png)

A VSCode extension to turn TypeScript errors into plain English.

- [Denigma](https://denigma.app/)

![](https://cdn.beekka.com/blogimg/asset/202112/bg2021121617.webp)

Denigma explains code in understandable english, which helps developers break through the enigma of code.

- [Ponicode](https://marketplace.visualstudio.com/items?itemName=Ponicode.ponicode)

![](https://files.ponicode.com/extension/ponicode-extension-readme-gif-2.gif)
Ponicode is a quick and easy AI-powered solution for Javascript unit testing.

## References

- [awesome-vscode](https://github.com/viatsko/awesome-vscode)
- [Top 10 VSCode Extensions](https://codebond.co/@codebond.cb/top-10-vscode-extensions)
- [VS Code for data science](https://towardsdatascience.com/vs-code-for-data-science-aee82fe08bac)
