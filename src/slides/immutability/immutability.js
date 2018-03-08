import React from 'react';
import { Heading, List, ListItem, Slide, Text } from 'spectacle';
export class ImmutabilityOverviewSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75">
          Immutability
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Working in an immutable way means to never -modify- an object, but rather make a new copy of an object with changes
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            This is valuable for writing pure and predictable functions
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            This is valuable for writing tests and having easily debugged code
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            This is valuable for 'state management' - ie, keeping ontop of what your apps data is, what changed it, and when
          </ListItem>
        </List>
      </Slide>
    );
  }
}
