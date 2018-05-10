import React from 'react';
import {CodePane, Heading, Link, List, ListItem, Slide} from 'spectacle';

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

export const ReplClassSignup = (label, link) => BasicSlideMaker(
  label,
  <Link href={link} style={{color: 'white', textDecoration: 'underline'}} target="_blank">
    Click this link to sign up for the {label} related exercises if you haven't already
  </Link>,
  <span>Then return to this page and navigate to the next slide to see your exercises</span>
);

export const BasicCodeSlideMaker = (rawCode, textSize = 26) => class FPMapCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <CodePane
          textSize={textSize}
          lang="js"
          source={rawCode}
          overflow="overflow"
        />
      </Slide>
    );
  }
};

export const ReplFrameSlide = url => class FPMapCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <iframe frameborder="0" width="100%" height="600px" src={url}></iframe>
      </Slide>
    );
  }
};

