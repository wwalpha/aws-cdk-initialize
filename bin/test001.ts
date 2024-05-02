#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Test001Stack } from '../lib/common-roles-stack';

const app = new cdk.App();
new Test001Stack(app, 'Test001Stack');
