import React from 'react';
import { Link } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as filterCode from '!raw-loader!./functional-programming-filter-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Array Filter',
  'Iterates through a list of items in an array and applies a provided function to each item to determine whether to put the result into the new array',
  'The .filter() method can be called on any array',
  'The .filter() method expects a function \'callback\'',
  'This function is fired for each item in the array - if there are three items, the function will run three times',
  'Each time the function is run, it is passed the current array item as the first parameter'
);

const Slide2 = BasicSlideMaker(
  'Array Filter',
  'The callback function should return a \'truthy\' or \'falsy\' value',
  'If the function returns a truthy value, the current item will be added to the result array. If not, it will be ignored.',
  'Filter will always return a new array that is the same length or shorter than the original',
  'The original list will -not- be changed or mutated',
);

const Slide4 = BasicSlideMaker(
  'Array Filter',
  <Link href="https://repl.it/classroom/invite/U0uxHqc" target="_blank">Try these exercises!</Link>
);

export const FPFilterSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(filterCode),
  Slide4,
];
