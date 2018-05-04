import React from 'react';
import { Link } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as reduceCode from '!raw-loader!./reduce-example';
import * as reduceCode2 from '!raw-loader!./reduce-example2';

import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Array Reduce',
  'Iterates through a list of items in an array and applies a provided function to each item to create the desired output value',
  'The .reduce() method can be called on any array',
  'The .reduce() method expects a function \'callback\' and accepts an optional \'initial value\'',
  'Unlike filter and map, reduce does not have to result in an array; it could return any kind of value',
);

const Slide2 = BasicSlideMaker(
  'Array Reduce',
  'The callback in reduce is different from the previous ones we\'ve seen; it takes in two parameters',
  'The first parameter in the callback is often referred to as the accumulator; it contains the combined result of the previous iterations\' returns',
  'The second parameter in the callback is the current array item from the source array',
);

const Slide3 = BasicSlideMaker(
  'Array Reduce',
  'In addition to the callback method, reduce can take an optional second parameter: an initial value for the callback\'s accumulator',
  'You often use this to indicate the final output\'s type',
  'If you don\'t provide an initial value, reduce will pass the first item from the source array to the callback instead. This will be used as the initial value of the accumulator',
  'The last time the reduce callback fires, the result it outputs will be the final reduced value',
);

const Slide4 = BasicSlideMaker(
  'Array Reduce',
  <Link href="https://repl.it/classroom/invite/UdzE1SB" target="_blank">Try these exercises!</Link>
);

export const ReduceSlideSet = [
  Slide1,
  Slide2,
  Slide3,
  BasicCodeSlideMaker(reduceCode),
  BasicCodeSlideMaker(reduceCode2, 24),
  Slide4,
];
