import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as paramCode from '!raw-loader!./function-anatomy-parameters-example';
import * as paramCode2 from '!raw-loader!./parameter-default-and-spread-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from '../../tools';
import {Link} from "spectacle";

const Slide1 = BasicSlideMaker(
  'Parameters',
  '0 or many items, passed into a function to be used inside of a function',
  'A function defines it\'s expected parameters',
  'The order they are passed in and the order they are expected matters, the first passed in \'maps\' to the first expected'
);

const Slide2 = BasicSlideMaker(
  'Parameters',
  'you can assign default parameter values in es6 if you want a parameter to have a value if no argument is passed in',
  'you can also use the rest operator on parameters to group them up as an array',
  'name your parameters well! it helps a lot with readability'
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
