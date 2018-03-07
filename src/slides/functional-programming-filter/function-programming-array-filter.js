import React from 'react';
import {
  CodePane,
  Heading, List, ListItem,
  Slide,
} from 'spectacle';


/* eslint import/no-webpack-loader-syntax: off */
import * as filterCode from '!raw-loader!./functional-programming-filter-example';

class FPFilterSlide1 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Filter
      </Heading>
      <List>
        <ListItem>The .filter() method can be called on any Array</ListItem>
        <ListItem>The .filter() method Expects a function 'callback'</ListItem>
        <ListItem>This function is fired for each item in the array - if there are 3 items it fires 3 times</ListItem>
        <ListItem>Each time it fires, it can expect the first parameter to be the current item it is iterating
          over</ListItem>
      </List>
    </Slide>
  };
}

class FPFilterSlide2 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Filter
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

class FPFilterSlide3 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Filter
      </Heading>
      <List>
        <ListItem>The function should return a 'truthy' or 'falsy' value:
        <List>
          <ListItem>If what's returned is truthy, keep the item currently iterated over in the new list</ListItem>
          <ListItem>If what's returned is falsy, dont keep the item currently iterated over in the new list</ListItem>
        </List>
      </ListItem>
      </List>
    </Slide>
  };
}
class FPFilterSlide4 extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Array Filter
      </Heading>
      <List>
        <ListItem>The original list has -not- been changed</ListItem>
        <ListItem>The new list will be the same length or smaller (most likely smaller) as the old list</ListItem>
      </List>
    </Slide>
  };
}

class FPFilterCode extends React.Component {
  render() {
    return <Slide
      {...this.props}
    >
      <CodePane
        lang="js"
        source={filterCode}
        overflow="overflow"
      />
    </Slide>
  }
}

export const FPFilterSlideSet = [
  FPFilterSlide1,
  FPFilterSlide2,
  FPFilterSlide3,
  FPFilterSlide4,
  FPFilterCode
];