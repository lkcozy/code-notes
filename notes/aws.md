---
title: AWS Service
emoji: "\U0001F4DD"
tags:
  - aws
link: https://adayinthelifeof.nl/2020/05/20/aws.html
created: 2021-03-05T07:28:49.000Z
modified: 2021-04-20T16:05:46.000Z
---

- [Typical AWS Network Architecture in one diagram](#typical-aws-network-architecture-in-one-diagram)
- [AWS Lambda Powertools for TypeScript](#aws-lambda-powertools-for-typescript)
  - [Commands](#commands)
- [Elastic Container](#elastic-container)
- [Resources](#resources)

## [Typical AWS Network Architecture in one diagram](https://blog.bytebytego.com/i/142629473/one-picture-is-worth-a-thousand-words-typical-aws-network-architecture-in-one-diagram)

![](https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F62210162-7691-40e5-b450-2da232890af9_1536x1536.gif)

## [AWS Lambda Powertools for TypeScript](https://github.com/awslabs/aws-lambda-powertools-typescript)

A suite of utilities for AWS Lambda Functions that makes structured logging, creating custom metrics asynchronously and tracing with AWS X-Ray easier

> Lambda Layer is a .zip file archive that can contain additional code, pre-packaged dependencies, data, or configuration files. Layers promote code sharing and separation of responsibilities so that you can iterate faster on writing business logic.

### Commands

Get associated aws account id

```zsh
aws sts get-caller-identity --profile legacy --output json | jq ".Account" | sed 's/\"//g'
```

- 👍[The Open Guide to Amazon Web Services](https://github.com/open-guides/og-aws)

![aws](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3r76jz8za3nz.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F02%2FAWS-cloud-computing-IaaS.jpg&f=1&nofb=1)

- Security, Identity, & Compliance
  - `IAM`: AWS’s permission system that can control users and AWS services.
  - `Cognito`: User and password management system. Useful for managing users for your applications.
- Compute
  - `EC2`: Virtual Private Servers
  - `Lambda`: Functions you can run, written in Python, NodeJS, Go etc. Can run many in parallel.
  - `Elastic Beanstalk`: Run software on managed virtual machines
- Storage
  - `S3`: File / object storage. Not primarily used for mounting as filesystem, but you can directly download files through HTTP.
  - `S3 Glacier`: Low cost storage system for backups and archives and such
- Database
  - `RDS`: Managed mysql, postgres databases etc.
  - `DynamoDB`: Large & scalable non-relational database
  - `Amazon QLDB`: Database for immutable and cryptographically verifiable data (money transactions etc)
- Networking & Content Delivery
  - `VPC`: Create your own virtual private network within AWS.
  - `CloudFront`: Content Delivery Network.
  - `Route 53`: Manage domain names and records.
  - `API Gateway`: Create HTTP APIs and let them connect to different backends.
- Blockchain
  - `Amazon Managed Blockchain`: Block chains
- Management & Governance
  - `CloudWatch`: Logging from various AWS components
  - `CloudFormation`: Templates to create and configure AWS components (think terraform/sls)
- Machine Learning
  - `Amazon SageMaker`: Machine learning tools
- Analytics
  - `Athena`: Query data stored in s3 buckets.
  - `AWS Glue`: ETL service. Enrich, validate data.
- Mobile
  - `AWS Amplify`: Let AWS automatically generate frontend & backend apps and deploy them automatically.
  - `AWS AppSync`: Create API backends that you can connect to. Can be created through AWS Amplify as well.
- Application Integration
  - `Application Integration`: State machines written in amazon’s own language
  - `Simple Notification Service`: Notification system that can notify through email, api endpoints, sms etc.
  - `Simple Queue Service`: Message queue system
- Customer Engagement
  - `Simple Email Service`: Send out emails. Email provider.
- Internet Of Things
  - `IoT Core`: Manage fleets of IOT devices through MQTT broker
  - `FreeRTOS`: RTOS operating system for microcontrollers to automatically connect to IOT-Core or greengrass.
  - `IoT 1-Click`: Manage 1-click buttons that can be connected to other systems - like Lambda
  - `IoT Analytics`: Clean up and save messages from topics into a data-store for analytics
  - `IoT Device Defender`: Detect unwanted issues on your devices and take actions
  - `IoT Device Management`: Organize IoT devices into groups, schedule jobs on the devices and configure remote access
  - `IoT Events`: Monitor telemetry from devices and then trigger other AWS services or jobs on the devices themselves
  - `IoT Greengrass`: A message broker can buffer messages for groups of up to 200 devices which can communicate and process data locally if connectivity to IoT Core is intermittent.
  - `IoT SiteWise`: Collect, organize, analyze and visualize data from industrial equipment at scale
  - `IoT Things Graph`: Cloudformation-like designer for graphing how devices should communicate with other AWS services
- Containers
  - `Elastic Container Registry`: Store docker images like on DockerHub
  - `Elastic Container Service`: Run containers, either on your own EC2 machines, or on managed machines called Fargate.
  - `Elastic Kubernetes Service`: Kubernetes as a service

## Elastic Container

```zsh
aws ecr describe-repositories

aws ecr list-images --repository-name your-repository-name
```

## Resources

- [How to Build AWS Lambdas with TypeScript](https://blog.appsignal.com/2022/09/21/how-to-build-aws-lambdas-with-typescript)
