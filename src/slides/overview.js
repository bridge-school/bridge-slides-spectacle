import React from 'react';
import { Heading, List, ListItem, Slide, Text } from 'spectacle';

export class OverviewSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="85" textColor="secondary">
          Agenda
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Function Anatomy: Return, Parameters & Arrow
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Functional Programming: Filter & Map
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">Immutability</ListItem>
        </List>
      </Slide>
    );
  }
}
