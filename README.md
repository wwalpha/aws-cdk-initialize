# aws-cdk-initialize
You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack 
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Prerequisites
- [Node.js Active LTS](https://nodejs.org/en/about/previous-releases)


## Initialize

```
npm i -g aws-cdk

mkdir hello-cdk
cd hello-cdk
cdk init sample-app --language=typescript
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
