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
          It is a way to write your code where you pass your data in one direction through a chain of functions that can manipulate that data.
          It utilizes Arrays and functions in javascript to achieve this
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
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Filter: 'Iterating' over a list of items in an Array, -return- a new array that excludes items that don't pass a 'test' ie, turn a list of numbers into a list of numbers less than 20
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Map: 'Iterating' over a list of items in an Array, -return- a new array that uses each item in the former list to inform what each item should be in the latter list ie, [1, 2, 3] original array, pass through a doubling function, return a new list of [2, 4, 6]
          </ListItem>
        </List>
      </Slide>
    );
  }
}

export const FPOverviewSlideSet = [
  FPOverviewSlideIntro,
  FPOverviewSlideExamples,
];
