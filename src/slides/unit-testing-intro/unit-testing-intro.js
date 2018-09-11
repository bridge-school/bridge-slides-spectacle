import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import { BasicCodeSlideMaker, ListSlideMaker } from '../../tools';

import * as htmlExample from '!raw-loader!./html.example';

class Slide1 extends React.Component {
  render() {
    return (
      <Slide>
        <Heading size={1} fit lineHeight={1}>
          <span role="img" aria-label="nerd emoji">
            🤓
          </span>{' '}
          Unit Testing{' '}
          <span role="img" aria-label="nerd emoji">
            🤓
          </span>
        </Heading>
      </Slide>
    );
  }
}

const Slide2 = ListSlideMaker('Why do we want this?', [
  '🐛 Fewer bugs',
  '📦 Forces separation of concerns',
  '♻️ Easier refactoring for long term maintainability',
  '📝 Self documentation',
]);

const Slide3 = BasicCodeSlideMaker(htmlExample, 16, 'Unit testing this is hard 😅');

class Slide4 extends React.Component {
  render() {
    return (
      <Slide>
        <Heading fit>What is a unit?</Heading>
        <Text textColor="secondary">
          {'Single purpose pure function where you control the inputs and the output is deterministic'}
        </Text>
      </Slide>
    );
  }
}

const Slide5 = ListSlideMaker('Examples of Units', ['Pure functions', 'Components']);

const Slide6 = ListSlideMaker('Tools', [
  'testing structure (Mocha, Jasmine, Jest, Cucumber)',
  'assertions functions (Chai, Jasmine, Jest, Unexpected)',
  'generate, display, and watch test results (Mocha, Jasmine, Jest, Karma)',
  'Generate and compare snapshots of component and data structures to make sure changes from previous runs are intended (Jest, Ava)',
  'Provide mocks, spies, and stubs (Sinon, Jasmine, enzyme, Jest, testdouble)',
  'Generate code coverage reports (Istanbul, Jest, Blanket)',
  'browser or browser-like environment with a control on their scenarios execution (Protractor, Nightwatch, Phantom, Casper)',
]);

class Slide7 extends React.Component {
  render() {
    return (
      <Slide>
        <Heading fit>
          TLDR: Use Jest{' '}
          <span role="img" aria-label="clown emoji">
            🤡
          </span>
        </Heading>
      </Slide>
    );
  }
}

export const unitTestingIntroSet = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];
