import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as paramCode from '!raw-loader!./function-anatomy-parameters-example';
import * as paramCode2 from '!raw-loader!./parameter-default-and-spread-example';
import {BasicCodeSlideMaker, BasicSlideMaker, ReplClassSignup, ReplFrameSlide} from '../../tools';
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

const Slide3 = ReplClassSignup('Parameters', 'https://repl.it/classroom/invite/U53uwpg');
const Slide4 = ReplFrameSlide('https://repl.it/student_embed/assignment/984641/b612cfbf9148ec128d6929f5fe21cfca');

export const FAnatomyParameterSlideSet = [
  Slide1,
  BasicCodeSlideMaker(paramCode),
  Slide2,
  BasicCodeSlideMaker(paramCode2),
  Slide3,
  Slide4,
];
