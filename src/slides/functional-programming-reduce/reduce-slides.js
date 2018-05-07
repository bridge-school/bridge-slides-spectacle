import React from 'react';
import { Link } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as reduceCode from '!raw-loader!./reduce-example';
import * as reduceCode2 from '!raw-loader!./reduce-example2';

import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Array Reduce',
  'The .reduce() method can be called on any Array',
  'The .reduce() method Expects a function \'callback\'',
  'The .reduce() method can take an OPTIONAL second parameter',
  'Unlike filter and map, reduce does not HAVE to result in an array',
);

const Slide2 = BasicSlideMaker(
  'Array Reduce',
  'The callback in the first parameter in reduce works differently than filter and map',
  'The first parameter in the callback is what is often referred to as the accumulator',
  'it is the result of the previous iterative return of the reduce',
  'the second parameter is the \'current\' value\'s step'
);

const Slide3 = BasicSlideMaker(
  'Array Reduce',
  'The last time the reduce callback fires, the result of that function return is what the reduce finalizes',
  'When you give the reduce method a second parameter, that second parameter \'starts off\' your loop',
  'You often use this to end your loop as a different type'
);

const Slide4 = BasicSlideMaker(
  'Array Reduce',
  <Link href="https://repl.it/classroom/invite/UdzE1SB" target="_blank">Try these exercises!</Link>
);

export const ReduceSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(reduceCode),
  Slide3,
  BasicCodeSlideMaker(reduceCode2),
  Slide4,
];
