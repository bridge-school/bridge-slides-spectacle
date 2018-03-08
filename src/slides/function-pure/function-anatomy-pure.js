import React from 'react';
import { CodePane, Heading, List, ListItem, Slide } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as pureCode from '!raw-loader!./function-anatomy-pure-example';

class FAnatomyPureSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="65" textColor="secondary">
          Pure Function
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Minimalistic and explicit - you want these to be small and very clear
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            No Side effects! A side effect is something that is that in some way accesses a variable that either was not passed in as a parameter, or defined inside the function itself
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Should have a return statement - a pure function should be thought of as a small factory, you give it the supplies, and it outputs the product, same supplies should always give the same product
          </ListItem>
        </List>
      </Slide>
    );
  }
}

class FAnatomyPureCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <CodePane
          textSize="26"
          lang="js"
          source={pureCode}
          overflow="overflow"
        />
      </Slide>
    );
  }
}

export const FAnatomyPureSlideSet = [FAnatomyPureSlide, FAnatomyPureCode];
