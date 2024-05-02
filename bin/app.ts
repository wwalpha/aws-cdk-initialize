#!/usr/bin/env node
import { App, DefaultStackSynthesizer, StackProps } from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';

const app = new App();
const props: StackProps = {
  synthesizer: new DefaultStackSynthesizer({
    generateBootstrapVersionRule: false,
  }),
};

new AppStack(app, 'AppStack', props);
