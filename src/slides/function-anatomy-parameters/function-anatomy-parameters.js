import React from 'react';
import {
  CodePane,
  Heading,
  List,
  ListItem,
  Slide,
} from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as paramCode from '!raw-loader!./function-anatomy-parameters-example';

export class FAnatomyParamSlide extends React.Component {
  render() {
    return <Slide bgColor="primary" transition={['slide']} {...this.props}>
      <Heading size={1} lineHeight={1} textColor="secondary">
        Parameters
      </Heading>
      <List>
        <ListItem>0 or many items, passed into a function to be used inside of a function</ListItem>
        <ListItem>A function defines it's expected parameters</ListItem>
        <ListItem>The order they are passed in and the order they are expected matters, the first passed in 'maps' to the first expected</ListItem>
      </List>
    </Slide>
  }
}

class FAnatomyParameterCode extends React.Component {
  render() {
    return <Slide {...this.props}>
      <CodePane
        lang="js"
        source={paramCode}
        overflow="overflow"
      />
    </Slide>
  }
}

export const FAnatomyParameterSlideSet = [
  FAnatomyParamSlide,
  FAnatomyParameterCode
];