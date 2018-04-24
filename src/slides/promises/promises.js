import React from 'react';
import { CodePane, Heading, List, ListItem, Slide } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as usingPromiseCode from '!raw-loader!./using-a-promise';
import * as makingPromiseCode from '!raw-loader!./making-a-promise';

class PromisesSlide1 extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={['slide']} {...this.props}>
        <Heading textSize="75">
          Promises
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            A promise is a placeholder for a value that is unknown at the time of its creation.
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Promises have been supported as of the ES6/ES2015 standard and all of the major browsers, other than IE, support most if not all of the corresponding functionality.
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Promises represent one of a handful of ways to deal with asynchronous behaviour
          </ListItem>
        </List>
      </Slide>
    );
  }
}

class PromisesSlide2 extends React.Component {
    render() {
        return (
            <Slide bgColor="primary" transition={['slide']} {...this.props}>
                <Heading textSize="75">
                    Promises
                </Heading>
                <List>
                    <ListItem textSize="32" margin="0 0 1.5rem 0">
                        In simple terms, a promise is an object with a 'then' function that takes a callback
                    </ListItem>
                    <ListItem textSize="32" margin="0 0 1.5rem 0">
                        When the promise resolves, the callback fires
                    </ListItem>
                    <ListItem textSize="32" margin="0 0 1.5rem 0">
                        You can make your own promises, but libraries tend to provide them for you
                    </ListItem>
                </List>
            </Slide>
        );
    }
}

class UsingPromiseCode extends React.Component {
    render() {
        return (
            <Slide {...this.props}>
                <Heading textSize="75">
                    Promises
                </Heading>
                <CodePane
                    textSize="26"
                    lang="js"
                    source={usingPromiseCode}
                    overflow="overflow"
                />
            </Slide>
        );
    }
}

class MakingPromiseCode extends React.Component {
    render() {
        return (
            <Slide {...this.props}>
                <Heading textSize="75">
                    Promises
                </Heading>
                <CodePane
                    textSize="18"
                    lang="js"
                    source={makingPromiseCode}
                    overflow="overflow"
                />
            </Slide>
        );
    }
}

export const PromisesSlideSet = [
    PromisesSlide1,
    PromisesSlide2,
    UsingPromiseCode,
    MakingPromiseCode,
];
