import React from 'react';
import * as filterCode from '!raw-loader!./functional-programming-filter.example';
import { BasicCodeSlideMaker, ReplClassSignup, ReplFrameSlide } from '../../tools';
import { FILTER } from '../../links';
import { Slide, Heading, Text, List, ListItem } from 'spectacle';

export class Slide1 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75" textColor="secondary">
          Filter
        </Heading>
        <Text textColor="secondary" textSize="42">
          To <strong>remove</strong> unwanted data
        </Text>
      </Slide>
    );
  }
}

export class Slide2 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75" textColor="secondary">
          Array.filter()
        </Heading>
        <Text textColor="secondary" textSize="42">
          [
          <span role="img" aria-label="Array with a popcorn emoji, burger emoji, and fried egg emoji">
            🍿, 🍔, 🍳
          </span>
          ].filter(isVegetarian) => [
          <span role="img" aria-label="Array with a popcorn emoji and fried egg emoji">
            🍿, 🍳
          </span>
          ]
        </Text>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Takes a filter function
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Does not change the given array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Returns a new array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            New array values are the values of the original array that passed the test of the filter function
          </ListItem>
        </List>
      </Slide>
    );
  }
}

const Slide4 = ReplClassSignup('Array Filter', FILTER.invite);
const Slide5 = ReplFrameSlide(FILTER.exercise1);
const Slide6 = ReplFrameSlide(FILTER.exercise2);

export const FPFilterSlideSet = [Slide1, Slide2, BasicCodeSlideMaker(filterCode), Slide4, Slide5, Slide6];
