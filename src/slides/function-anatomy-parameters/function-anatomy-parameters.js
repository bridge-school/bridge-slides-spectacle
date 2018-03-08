import React from 'react';
import { CodePane, Heading, List, ListItem, Slide } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as paramCode from '!raw-loader!./function-anatomy-parameters-example';

export class FAnatomyParamSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="65" textColor="secondary">
          Parameters
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            0 or many items, passed into a function to be used inside of a function
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            A function defines it's expected parameters
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            The order they are passed in and the order they are expected matters, the first passed in 'maps' to the first expected
          </ListItem>
        </List>
      </Slide>
    );
  }
}

class FAnatomyParameterCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <CodePane
          textSize="26"
          lang="js"
          source={paramCode}
          overflow="overflow"
        />
      </Slide>
    );
  }
}

export const FAnatomyParameterSlideSet = [
  FAnatomyParamSlide,
  FAnatomyParameterCode,
];
