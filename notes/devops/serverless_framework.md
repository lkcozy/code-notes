---
title: Serverless Framework
emoji: 📝
tags:
  - devops
  - serverless
  - terraform
link: "https://www.serverless.com/"
created: 2020-11-20T01:47:15.000Z
modified: 2020-11-20T01:47:15.000Z
---

Why automate infrastructure management

Infrastructure as Code (IaC) becomes really important once developers need a way to organize their growing cloud infrastructure and collaborate across teams.

Most importantly, IaC tools make it necessary to have process and discipline; there’s a smaller chance of accidental or unexpected changes, and it’s easier to share configuration between different parts of your infrastructure.

## [The definitive guide to using Terraform with the Serverless Framework](https://www.serverless.com/blog/definitive-guide-terraform-serverless)

### Conclusion

`Terraform` is best suited for managing more persistent `shared infrastructure`, while `Serverless` is a good fit to manage the `application-specific infrastructure`.

Managing shared vs. app-specific infrastructure

While we believe that all infrastructure should be managed with IaC automation, we like to distinguish between the infrastructure that’s specific to one application and the infrastructure that’s shared between multiple applications in your stack. Those might need to be managed in different ways.

- `Application-specific infrastructure` gets created and torn down as the app gets deployed. You rarely change a piece of application-specific infrastructure; you’ll just tear everything down and re-create it from scratch. As the app is developed, the infrastructure that supports it also needs to change, sometimes significantly from one deploy to another.

- `The shared infrastructure`, on the other end, rarely gets re-created from scratch and is more stateful. The core set of infrastructure (such as the set of security groups and your VPC ID), won’t change between the deploys of your application, as they’re probably referenced by many applications in your stack. Those more persistent pieces of infrastructure will generally be managed outside of your deploy pipeline.

### Where to draw the line

If you have a shared database and two Serverless applications that create tables in it, the database should be managed by Terraform. The specific tables should be created and destroyed by the Serverless Framework during the app deployment and teardown process.

With a database and its tables, `the distinction between app-specific and shared infrastructure is clear`.

But what happens if the entire database is only being used by one app? What about the queues and queue subscriptions? What if there is a contract between two Serverless microservices and they use a queue as an interface?

`All these items fall somewhere between the app-specific and the shared.`

For cases like those, we believe either option is fine. `It’s more important to avoid confusion by keeping the decision consistent across your infrastructure`.
