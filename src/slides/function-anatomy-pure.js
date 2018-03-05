import React from 'react';
import {
  Heading,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';

export class FAnatomyPureSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} lineHeight={1} textColor="secondary">
        Pure Function
      </Heading>
      <List>
        <ListItem>Minimalistic and explicit - you want these to be small and very clear</ListItem>
        <ListItem>No Side effects! A side effect is something that is that in some way accesses a variable that either was not passed in as a parameter, or defined inside the function itself</ListItem>
        <ListItem>Should have a return statement - a pure function should be thought of as a small factory, you give it the supplies, and it outputs the product, same supplies should always give the same product</ListItem>
      </List>
    </Slide>
  };
}