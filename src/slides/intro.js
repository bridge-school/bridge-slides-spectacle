import React from 'react';
import { Heading, Slide, Text } from 'spectacle';

export class IntroSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading size={2} lineHeight={1} textColor="secondary">
          Intermediate JavaScript
        </Heading>
      </Slide>
    );
  }
}
