/* eslint-disable */
import React from 'react';
import {
  CodePane,
  Heading,
  List,
  ListItem,
  Slide,
  SlideSet,
} from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as arrowCode from '!raw-loader!./function-arrow-example';

class ArrowSlide extends React.Component {
  render() {
    return <Slide {...this.props}>
      <Heading size={1} lineHeight={1} textColor="secondary">
        Arrow Function (Bonus!)
      </Heading>
      <List>
        <ListItem>A shorthand for a regular function</ListItem>
        <ListItem>Must be defined on a variable - can't use the 'function' keyword</ListItem>
        <ListItem>Can be written in a way to default return a value, without using the 'return' keyword</ListItem>
        <ListItem>Can be written as a single line!</ListItem>
      </List>
    </Slide>
  }
}

class ArrowSlideCode extends React.Component {
  render() {
    return <Slide
      {...this.props}
    >
      <CodePane
        lang="js"
        source={arrowCode}
        overflow="overflow"
      />
    </Slide>
  }
}

export const ArrowSlideSet = [
  ArrowSlide,
  ArrowSlideCode
];