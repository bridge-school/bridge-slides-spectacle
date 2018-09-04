import React from 'react';
import * as mapCode from '!raw-loader!./functional-programming-map.example';
import { BasicCodeSlideMaker, ReplClassSignup, ReplFrameSlide } from '../../tools';
import { MAP } from '../../links';
import { Slide, Heading, List, ListItem, Text } from 'spectacle';

export class Slide1 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75" textColor="secondary">
          Map
        </Heading>
        <Text textColor="secondary" textSize="42">
          To <strong>transform</strong> a value from one value to another
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
          Array.map()
        </Heading>
        <Text textColor="secondary" textSize="42">
          [
          <span role="img" aria-label="Array with a corn emoji, cow emoji, and chicken emoji">
            🌽, 🐮, 🐔
          </span>
          ].map(cook) => [
          <span role="img" aria-label="Array with a popcorn emoji, burger emoji, and fried egg emoji">
            🍿, 🍔, 🍳
          </span>
          ]
        </Text>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Takes a transform function
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Does not change the given array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Returns a new array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            New array values are the values of the original array after applying the transform
          </ListItem>
        </List>
      </Slide>
    );
  }
}

const Slide3 = ReplClassSignup('Array Map', MAP.invite);
const Slide4 = ReplFrameSlide(MAP.exercise1);
const Slide5 = ReplFrameSlide(MAP.exercise2);

export const FPMapSlideSet = [Slide1, Slide2, BasicCodeSlideMaker(mapCode), Slide3, Slide4, Slide5];
