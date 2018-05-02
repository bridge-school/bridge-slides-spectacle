import React from 'react';
import {CodePane, Link, Slide} from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as filterCode from '!raw-loader!./functional-programming-filter-example';
import {BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Array Filter',
  'The .filter() method can be called on any Array',
  'The .filter() method Expects a function \'callback\'',
  'This function is fired for each item in the array - if there are 3 items it fires 3 times',
  'Each time it fires, it can expect the first parameter to be the current item it is iterating over',
);

const Slide2 = BasicSlideMaker(
  'Array Filter',
  'The function should return a \'truthy\' or \'falsy\' value:',
  ' If what\'s returned is truthy, keep the item currently iterated over in the new list',
  'If what\'s returned is falsy, dont keep the item currently iterated over in the new list'
);

const Slide3 = BasicSlideMaker(
  'Array Filter',
  'The original list has -not- been changed',
  'The new list will be the same length or smaller (most likely smaller) as the old list'
);

const Slide4 = BasicSlideMaker(
  'Array Filter',
  <Link href="https://repl.it/classroom/invite/U0uxHqc" target="_blank">Try these exercises!</Link>
);

class FPFilterCode extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <CodePane
          textSize="26"
          lang="js"
          source={filterCode}
          overflow="overflow"
        />
      </Slide>
    );
  }
}

export const FPFilterSlideSet = [
  Slide1,
  Slide2,
  FPFilterCode,
  Slide3,
  Slide4,
];
