import React from 'react';
import {
  Heading,
  Slide,
  Text,
} from 'spectacle';

export class IntroSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        Intro
      </Heading>
      <Heading size={5}>Hussein and Alex:</Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Developers working at Rangle who will walk you through some awesome things you can do with JavaScript!
        Say HI!
      </Text>
    </Slide>
  }
}