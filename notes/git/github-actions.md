---
title: Github Actions
emoji: 📝
tags:
  - git
  - github
link: null
created: 2020-06-29T05:54:14.000Z
modified: 2020-11-10T22:17:13.000Z
---

## What Are GitHub Actions?

[GitHub Actions](https://github.com/features/actions) allow you to run arbitrary code in response to [events](https://help.github.com/en/actions/reference/events-that-trigger-workflows). Events are activities that happen on GitHub such as:

- Opening a pull request
- Making an issue comment
- Labeling an issue
- Creating a new branch
  … and many more

```yml
name: 🚀 Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy_source:
    name: build and deploy lambda
    strategy:
      matrix:
        node-version: [12.x]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1.4.2
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies, Build application and Zip dist folder contents
        run: yarn install  && zip -qq -r -j ./bundle.zip ./test/*
      - name: deploy zip to aws lambda
        uses: appleboy/lambda-action@master
        with:
          aws_access_key_id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws_secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws_region: ${{ secrets.AWS_REGION }}
          function_name: kan_test
          zip_file: bundle.zip
```

## [Workflow syntax for GitHub Actions](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions)

Workflow files use YAML syntax, and must have either a .yml or .yaml file extension. If you're new to YAML and want to learn more, see "[Learn YAML in five minutes.](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)"

**name**: The name of your workflow.

**on(required)**: The name of the GitHub event that triggers the workflow. You can provide a single event `string`, `array` of events, `array` of event types

Example using a single event

```yml
# Trigger on push
on: push
```

Example using a list of events

```yml
# Trigger the workflow on push or pull request
on: [push, pull_request]
```

Example using multiple events with activity types or configuration

```yml
on:
  # Trigger the workflow on push or pull request,
  # but only for the master branch
  push:
    branches:
      - master
      - "releases/**"
    paths:
      - "**.js"
  pull_request:
    branches:
      - master
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event above
      - created
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron: "*/15 * * * *"
```

> [crontab guru](https://crontab.guru/): The quick and simple editor for cron schedule expressions

Some helpful patterns

```js
// Every Monday at 1PM UTC (9AM EST)
0 13 * * 1

// At the end of every day
0 0 * * *

// Every 10 minutes
*/10 * * * *
```

**jobs**: A workflow run is made up of one or more jobs. Jobs run in parallel by default. You can run an unlimited number of jobs as long as you are within the workflow usage limits. For more information, see "[Usage limits](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#usage-limits)."

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

Identifies any jobs that must complete successfully before this job will run.

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

**runs-on**: The type of machine to run the job on. The machine can be either a [GitHub-hosted runner](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#github-hosted-runners), or a self-hosted runner.

```yaml
runs-on: ubuntu-latest
```

**steps**: A job contains a sequence of tasks called steps.

- Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry.
- Not all steps run actions, but all actions run as a step.
- Run unlimited number of steps as long as you are within the workflow usage limits

```yaml
steps:
  - name: My first step
    if: ${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}
    run: echo This event is a pull request that had an assignee removed.
```

**uses**: Selects an action to run as part of a step in your job.

- An action is a reusable unit of code.
- You can use an action defined in the same repository as the workflow, a public repository, or in a published Docker container image.

```yaml
steps:
  - name: My first step
    # Uses the master branch of a public repository
    uses: actions/heroku@master
  - name: My second step
    # Uses a specific version tag of a public repository
    uses: actions/aws@v2.0.1
```

**with**: A map of the input parameters defined by the action.

- Each input parameter is a key/value pair.
- Input parameters are set as environment variables.
- The variable is prefixed with INPUT and converted to upper case.

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@master
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat
```

## Test GitHub Actions locally

[act](https://github.com/nektos/act)

When you run act it reads in your GitHub Actions from .github/workflows/ and determines the set of actions that need to be run. It uses the Docker API to either pull or build the necessary images, as defined in your workflow files and finally determines the execution path based on the dependencies that were defined. Once it has the execution path, it then uses the Docker API to run containers for each action based on the images prepared earlier. The environment variables and filesystem are all configured to match what GitHub provides.

```sh
brew install act

act --secret-file act.secrets
```

## Example

### Deploy your projects to Github Pages

```yaml
name: 🚀 Build and Deploy

on:
  push:
    branches:
      - master

build-and-deploy:
  runs-on: ubuntu-latest
  steps:
    - name: Checkout 🛎️
      uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      with:
        persist-credentials: false

    - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
      run: |
        yarn install
        yarn run build

    - name: Deploy 🚀
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        BRANCH: gh-pages # The branch the action should deploy to.
        FOLDER: build # The folder the action should deploy.
```

### outputs

GitHub Actions now allows you to take step outputs and output them into other jobs. Now if you have a job that is dependent on some data from another job, instead of needing to save it in a file and upload an Artifact, you can just use Job Outputs and save just the data itself with minimal encoding:

Step outputs

```YAML
on:
  push:
    branch:
      - '*'
jobs:
  test_strings:
    name: test strings
    runs-on: ubuntu-latest
    steps:
      - name: create string
        run: |
          MY_STRING="hello world"
          echo "::set-output name=content::$MY_STRING"
        id: my_string
      - name: display string
        run: |
          echo "The string is: ${{ steps.my_string.outputs.content }}"
```

Job Outputs

```YAML
name: Do things
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      url: ${{ steps.step1.outputs.url }} # map step output to job output
    steps:
      - id: step1
        name: send url to other job
        run: echo "::set-output name=url::https://google.com"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: user/some-action@v1
        with:
          url: ${{ needs.job1.outputs.url }} # grab job output here
```

## Useful Github Actions

- [GitHub Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action)

This GitHub Action will automatically deploy your project to GitHub Pages. It can be configured to push your production-ready code into any branch you'd like, including gh-pages and docs.

- [AWS cli install action](https://github.com/marketplace/actions/aws-cli-install-action)

Action to install the most recent version of the AWS-CLI

- [HashiCorp - Setup Terraform](https://github.com/marketplace/actions/hashicorp-setup-terraform)

The hashicorp/setup-terraform action is a JavaScript action that sets up Terraform CLI in your GitHub Actions workflow.

- [fastpages](https://github.com/fastai/fastpages)

![](https://github.com/fastai/fastpages/raw/master/images/diagram.png)

An easy to use blogging platform, with support for Jupyter notebooks, Word docs, and Markdown.

- [Release Drafter](https://github.com/marketplace/actions/release-drafter)

![](https://github.com/release-drafter/release-drafter/raw/master/design/screenshot.png)

Drafts your next release notes as pull requests are merged into master.

- [cache](https://github.com/actions/cache)

Cache dependencies and build outputs in GitHub Actions

```yaml
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

- [Auto Assign Reviewer By Issuer](https://github.com/shufo/auto-assign-reviewer-by-issuer)
  A GitHub Action to automatically assigns reviewer by issuer

- [Condition based Pull Request Labeler](https://github.com/srvaroa/labeler)
  Implements a GitHub Action that labels Pull Requests based on configurable conditions.It is inspired by the example Pull Request Labeller, but intends to provide a richer set of options.

```yml
version: 1
labels:
  - label: "work in progress"
    title: ".*(?i)wip.*"
  - label: "feature"
    title: ".*(?i)feat.*"
  - label: "hot fix"
    title: ".*(?i)hot fix.*"
  - label: "fix"
    title: ".*Fix.*"
  - label: "enhancement"
    title: ".*(?i)enhancement.*"
  - label: "refactor"
    title: ".*(?i)refactor.*"
  - label: "PoC"
    title: ".*(?i)poc.*"
  - label: "map"
    title: ".*(?i)map.*"
  - label: "issue"
    title: ".*(?i)issue.*"
  - label: "user"
    title: ".*(?i)user.*"
  - label: "workflow"
    title: ".*(?i)workflow.*"
  - label: "asset"
    title: ".*(?i)asset.*"
  - label: "test"
    title: ".*Test.*"
```

## References

- [GitHub Actions Documentation](https://help.github.com/en/actions)
- [Deploy to AWS Lambda using Github Actions](https://dev.to/nobleobioma/deploy-node-js-to-aws-lambda-using-github-actions-5a82)
