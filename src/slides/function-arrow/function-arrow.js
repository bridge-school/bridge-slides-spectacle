/* eslint-disable */
import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as arrowCode from '!raw-loader!./function-arrow-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";
import {Link} from "spectacle";

const Slide1 = BasicSlideMaker(
  'Arrow Function (Bonus!)',
  'A shorthand for a regular function',
  'Must be defined on a variable - can\'t use the \'function\' keyword',
  'Can be written in a way to return a value by default and without using the \'return\' keyword',
  'Can be written as a single line!'
);


const Slide2 = BasicSlideMaker(
  'Arrow Function',
  <Link href="https://repl.it/classroom/invite/U58GrJs" target="_blank">Try these exercises!</Link>
);

export const ArrowSlideSet = [Slide1, BasicCodeSlideMaker(arrowCode), Slide2];
