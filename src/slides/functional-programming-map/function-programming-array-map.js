import React from 'react';
import {CodePane, Heading, Link, List, ListItem, Slide} from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as mapCode from '!raw-loader!./functional-programming-map-example';
import {BasicSlideMaker} from "../../tools";

class FPMapSlide1 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75">
          Array Map
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            The .map() method can be called on any Array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            The .map() method Expects a function 'callback'
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            This function is fired for each item in the array - if there are 3 items it fires 3 times
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Each time it fires, it can expect the first parameter to be the current item it is iterating
            over
          </ListItem>
        </List>
      </Slide>
    );
  }
}

class FPMapSlide2 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75">
          Array Map
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            The function should return whatever we want to have in the new array at the same index as the old array
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            The original list has -not- been changed
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            The new list will be the same length as the old list
          </ListItem>
        </List>
      </Slide>
    );
  }
}

const Slide3 = BasicSlideMaker(
  'Array Map',
  <Link href="https://repl.it/classroom/invite/U04khTZ" target="_blank">Try these exercises!</Link>
);


class FPMapCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <CodePane
          textSize="26"
          lang="js"
          source={mapCode}
          overflow="overflow"
        />
      </Slide>
    );
  }
}

export const FPMapSlideSet = [FPMapSlide1, FPMapSlide2, FPMapCode, Slide3];
