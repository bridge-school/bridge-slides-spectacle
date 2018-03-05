import React from 'react';
import {
  Heading,
  List,
  ListItem,
  Slide,
} from 'spectacle';

export class FAnatomyReturnSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} lineHeight={1} textColor="secondary">
        Returns
      </Heading>

      <List>
        <ListItem>A return statement is something you should have in almost all of your functions</ListItem>
        <ListItem>Without a return, a function resolves to 'undefined'</ListItem>
        <ListItem>You can be very creative about what gets returned - for example, another function</ListItem>
        <ListItem>The result of a function return can be used immediately after that function has finished it's business</ListItem>
      </List>
    </Slide>
  };
}