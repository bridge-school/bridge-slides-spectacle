/* eslint-disable */
import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as arrowCode from '!raw-loader!./function-arrow-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Arrow Function (Bonus!)',
  'A shorthand for a regular function',
  'Must be defined on a variable - can\'t use the \'function\' keyword',
  'Can be written in a way to default return a value, without using the \'return\' keyword',
  'Can be written as a single line!'
);

export const ArrowSlideSet = [Slide1, BasicCodeSlideMaker(arrowCode)];
