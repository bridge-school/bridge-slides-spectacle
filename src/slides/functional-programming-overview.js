import React from 'react';
import {
  Heading, List, ListItem,
  Slide,
  Text,
} from 'spectacle';
export class FPOverviewSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is functional programming?
      </Heading>
      <Text>
        It is a way to write your code where you pass your data in one direction through a chain of functions that can manipulate that data.
        It utilizes Arrays and functions in javascript to achieve this
      </Text>
      <List>
        <ListItem>Filter: 'Iterating' over a list of items in an Array, -return- a new array that excludes items that don't pass a 'test' ie, turn a list of numbers into a list of numbers less than 20</ListItem>
        <ListItem>Map: 'Iterating' over a list of items in an Array, -return- a new array that uses each item in the former list to inform what each item should be in the latter list ie, [1, 2, 3] original array, pass through a doubling function, return a new list of [2, 4, 6]</ListItem>
      </List>
    </Slide>
  }
}