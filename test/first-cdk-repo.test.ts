import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as FirstCdkRepo from '../lib/first-cdk-repo-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FirstCdkRepo.FirstCdkRepoStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
