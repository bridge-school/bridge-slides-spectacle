import React from 'react';
import { CodePane, Heading, List, ListItem, Slide } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as returnCode from '!raw-loader!./function-anatomy-return-example';

class FAnatomyReturnSlide extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <Heading textSize="75" textColor="secondary">
          Returns
        </Heading>

        <List>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            A return statement is something you should have in almost all of your functions
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Without a return, a function resolves to 'undefined'
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            You can be very creative about what gets returned - for example, another function
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            The result of a function return can be used immediately after that function has finished it's business
          </ListItem>
        </List>
      </Slide>
    );
  }
}

class FAnatomyReturnCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <CodePane
          textSize="26"
          lang="js"
          source={returnCode}
          overflow="overflow"
        />
      </Slide>
    );
  }
}

export const FAnatomyReturnSlideSet = [FAnatomyReturnSlide, FAnatomyReturnCode];
