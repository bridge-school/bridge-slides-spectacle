import React from 'react';
import { Heading, List, ListItem, Slide, Text } from 'spectacle';

export class FAnatomyOverview extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="45" textColor="secondary">
          What do Functions look like?
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            A Return Statement: What the function 'resolves' to when the function finishes running
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Parameters: What information a function can expect to have provided to it
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Pure Function: A function that uses the above two ideas to be as reusable, predictable and durable as possible
          </ListItem>
        </List>
      </Slide>
    );
  }
}
