import React from 'react';
import { Heading, List, ListItem, Slide } from 'spectacle';

export const BasicSlideMaker = (title, ...points) => class FPFilterSlide3 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75">{title}</Heading>
        <List>
          {points.map(point => <ListItem textSize="32" margin="0 0 1.5rem 0">
            {point}
          </ListItem>)}
        </List>
      </Slide>
    );
  }
};
