import React from 'react';
import {
  Heading,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';
export class FAnatomyParamSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} lineHeight={1} textColor="secondary">
        Parameters
      </Heading>
      <List>
        <ListItem>0 or many items, passed into a function to be used inside of a function</ListItem>
        <ListItem>A function defines it's expected parameters</ListItem>
        <ListItem>The order they are passed in and the order they are expected matters, the first passed in 'maps' to the first expected</ListItem>
      </List>
    </Slide>
  }
}