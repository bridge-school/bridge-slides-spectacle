import React from 'react';
import {
  Heading, List, ListItem,
  Slide,
  Text,
} from 'spectacle';
export class FAnatomyArrowSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
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