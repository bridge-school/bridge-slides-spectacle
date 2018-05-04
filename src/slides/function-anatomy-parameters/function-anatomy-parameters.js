import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as paramCode from '!raw-loader!./function-anatomy-parameters-example';
import * as paramCode2 from '!raw-loader!./parameter-default-and-spread-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from '../../tools';
import {Link} from "spectacle";

const Slide1 = BasicSlideMaker(
  'Parameters',
  '0 or many items that are passed into a function for its use',
  'A function defines the parameters it expects',
  'The order of the parameters passed in should match the order expected by the function'
);

const Slide2 = BasicSlideMaker(
  'Parameters',
  'In ES6, you can assign default parameter values to be used when an argument is not passed in',
  'You can also use the rest operator to group the parameters together as an array',
  'It\'s important to name your parameters well to help with readability'
);

const Slide3 = BasicSlideMaker(
  'Parameters',
  <Link href="https://repl.it/classroom/invite/U53uwpg" target="_blank">Try these exercises!</Link>
);

export const FAnatomyParameterSlideSet = [
  Slide1,
  BasicCodeSlideMaker(paramCode),
  Slide2,
  BasicCodeSlideMaker(paramCode2),
  Slide3
];
