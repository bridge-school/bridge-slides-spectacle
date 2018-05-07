import React from 'react';
import { Heading, List, ListItem, Slide, Text, SlideSet } from 'spectacle';

class FPOverviewSlideIntro extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="55" margin="0 0 2rem 0">
          What is functional programming?
        </Heading>
        <Text textColor="secondary">
        A way of writing code that uses pure functions as building blocks that can be combined together to manage data and handle various behaviour.  
        </Text>
      </Slide>
    );
  }
}

class FPOverviewSlideExamples extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="65">
          Functional programming
        </Heading>
        <Text textColor="secondary">
          Three common methods that we often use in functional programming come built in with arrays: map, filter and reduce.
        </Text>
      </Slide>
    );
  }
}

export const FPOverviewSlideSet = [
  FPOverviewSlideIntro,
  FPOverviewSlideExamples,
];