import React from 'react';
import * as reduceCode from '!raw-loader!./reduce.example';
import * as reduceCode2 from '!raw-loader!./reduce-2.example';
import * as reduceCode3 from '!raw-loader!./reduce-3.example';

import { BasicCodeSlideMaker, ReplClassSignup, ReplFrameSlide } from '../../tools';
import { REDUCE } from '../../links';
import { Slide, Heading, Text, List, ListItem } from 'spectacle';

export class Slide1 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75" textColor="secondary">
          Reduce
        </Heading>
        <Text textColor="secondary" textSize="42">
          To <strong>reduce</strong> a collection of values into one new value
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
          Array.reduce()
        </Heading>
        <Text textColor="secondary" textSize="42">
          [
          <span role="img" aria-label="Array with a popcorn emoji and fried egg emoji">
            🍿, 🍳
          </span>
          ].reduce(eat) =>
          <span role="img" aria-label="Poop emoji">
            💩
          </span>
        </Text>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Takes a reduce function
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Does not change the given array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Returns the reduced value computed by the passing each item in the array into the reduce function
          </ListItem>
        </List>
      </Slide>
    );
  }
}

const Slide3 = ReplClassSignup('Array Reduce', REDUCE.invite);
const Slide4 = ReplFrameSlide(REDUCE.exercise1);
const Slide5 = ReplFrameSlide(REDUCE.exercise2);
const Slide6 = ReplFrameSlide(REDUCE.exercise3);

export const ReduceSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(reduceCode),
  BasicCodeSlideMaker(reduceCode2, 24),
  BasicCodeSlideMaker(reduceCode3),
  Slide3,
  Slide4,
  Slide5,
  Slide6,
];
