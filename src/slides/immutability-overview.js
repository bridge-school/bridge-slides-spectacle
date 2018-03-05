import React from 'react';
import {
  Heading, List, ListItem,
  Slide,
  Text,
} from 'spectacle';
export class ImmutabilityOverviewSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Immutability
      </Heading>
      <List>
        <ListItem>Working in an immutable way means to never -modify- an object, but rather make a new copy of an object with changes</ListItem>
        <ListItem>This is valuable for writing pure and predictable functions</ListItem>
        <ListItem>This is valuable for writing tests and having easily debugged code</ListItem>
        <ListItem>This is valuable for 'state management' - ie, keeping ontop of what your apps data is, what changed it, and when</ListItem>
      </List>
    </Slide>
  }
}