import React from 'react';
import { Link } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as mapCode from '!raw-loader!./functional-programming-map-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Array Map',
  'Iterates through a list of items in an array and applies a provided function to each item before putting the result into a new array',
  'The .map() method expects a function \'callback\'',
  'This function is fired for each item in the array - if there are three items, the function will run three times',
  'Each time the function is run, it is passed the current array item as the first parameter'
);

const Slide2 = BasicSlideMaker(
  'Array Map',
  'The result of the callback function will be added to the new array at the same index as the input from the original',
  'Map will always return a new array that is the same length of the original',
  'The original list will -not- be changed or mutated',
);

const Slide3 = BasicSlideMaker(
  'Array Map',
  <Link href="https://repl.it/classroom/invite/U04khTZ" target="_blank">Try these exercises!</Link>
);

export const FPMapSlideSet = [Slide1, Slide2, BasicCodeSlideMaker(mapCode), Slide3];
