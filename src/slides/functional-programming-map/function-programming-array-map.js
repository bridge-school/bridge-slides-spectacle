import React from 'react';
import {
  CodePane,
  Heading, List, ListItem,
  Slide,
} from 'spectacle';


/* eslint import/no-webpack-loader-syntax: off */
import * as mapCode from '!raw-loader!./functional-programming-map-example';

class FPMapSlide1 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Map
      </Heading>
      <List>
        <ListItem>The .map() method can be called on any Array</ListItem>
        <ListItem>The .map() method Expects a function 'callback'</ListItem>
        <ListItem>This function is fired for each item in the array - if there are 3 items it fires 3 times</ListItem>
        <ListItem>Each time it fires, it can expect the first parameter to be the current item it is iterating
          over</ListItem>
      </List>
    </Slide>
  };
}

class FPMapSlide2 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Map
      </Heading>
      <List>
        <ListItem>This function is fired for each item in the array - if there are 3 items it fires 3 times</ListItem>
        <List>
          <ListItem>first time it fires the first parameter will be the first item in the list</ListItem>
          <ListItem>second time it fires the first parameter will bbe the second item in the list</ListItem>
        </List>
      </List>
    </Slide>
  };
}

class FPMapSlide3 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Map
      </Heading>
      <List>
        <ListItem>The function should return whatever we want to have in the new array at the same index as the old array</ListItem>
        <ListItem>The original list has -not- been changed</ListItem>
        <ListItem>The new list will be the same length as the old list</ListItem>
      </List>
    </Slide>
  };
}

class FPMapCode extends React.Component {
  render() {
    return <Slide
      {...this.props}
    >
      <CodePane
        lang="js"
        source={mapCode}
        overflow="overflow"
      />
    </Slide>
  }
}

export const FPMapSlideSet = [
  FPMapSlide1,
  FPMapSlide2,
  FPMapSlide3,
  FPMapCode
];