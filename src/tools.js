import React from 'react';
import { CodePane, Heading, Link, List, ListItem, Slide, Notes } from 'spectacle';

export const ListSlideMaker = (title, points = [], notes = []) =>
  class FPFilterSlide3 extends React.Component {
    render() {
      return (
        <Slide bgColor="primary" transition={['slide']} {...this.props}>
          <Heading textSize="75">{title}</Heading>
          <List>
            {points.map((point, i) => (
              <ListItem key={i} textSize="32" margin="0 0 1.5rem 0">
                {point}
              </ListItem>
            ))}
          </List>
          <Notes>
            {notes.map((note, i) => (
              <p key={i}>{note}</p>
            ))}
          </Notes>
        </Slide>
      );
    }
  };

export const ReplClassSignup = (label, link) =>
  ListSlideMaker(label, [
    <Link href={link} style={{ textDecoration: 'underline' }} target="_blank">
      Click this link to sign up for the {label} related exercises if you {"haven't"} already
    </Link>,
    <span>Then return to this page and navigate to the next slide to see your exercises</span>,
  ]);

export const BasicCodeSlideMaker = (rawCode, textSize = 26, title) =>
  class FPMapCode extends React.Component {
    render() {
      return (
        <Slide {...this.props}>
          {title && <Heading textSize="50">{title}</Heading>}
          <CodePane theme="light" textSize={textSize} lang="js" source={rawCode} overflow="overflow" />
        </Slide>
      );
    }
  };

export const ReplFrameSlide = url =>
  class FPMapCode extends React.Component {
    render() {
      return (
        <Slide {...this.props}>
          <iframe title="repl-example" frameBorder="0" width="100%" height="600px" src={url} />
        </Slide>
      );
    }
  };
