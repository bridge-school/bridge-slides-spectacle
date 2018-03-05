import React from 'react';
import {
  Heading,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';

export class OverviewSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Agenda
      </Heading>
        <List>
          <ListItem>Function Anatomy: Return</ListItem>
          <ListItem>Function Anatomy: Parameters</ListItem>
          <ListItem>Function Anatomy: Arrow (es2015)</ListItem>
          <ListItem>Functional Programming: Filter</ListItem>
          <ListItem>Functional Programming: Map</ListItem>
          <ListItem>Immutability</ListItem>
        </List>
    </Slide>
  }
}