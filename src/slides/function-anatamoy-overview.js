import React from 'react';
import {
  Heading, List, ListItem,
  Slide,
  Text
} from 'spectacle';

export class FAnatomyOverview extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What do Functions look like?
      </Heading>
        <List>
          <ListItem>A Return Statement: What the function 'resolves' to when the function finishes running</ListItem>
          <ListItem>Parameters: What information a function can expect to have provided to it</ListItem>
          <ListItem>Pure Function: A Function that uses the above two ideas to be as reusable, predictable and durable as possible</ListItem>
        </List>
    </Slide>
  };
}