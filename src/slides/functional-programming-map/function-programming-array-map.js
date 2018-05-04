import React from 'react';
import { Link } from 'spectacle';

/* eslint import/no-webpack-loader-syntax: off */
import * as mapCode from '!raw-loader!./functional-programming-map-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Array Map',
  'The .map() method can be called on any Array',
  'The .map() method Expects a function \'callback\'',
  'This function is fired for each item in the array - if there are 3 items it fires 3 times',
  'Each time it fires, it can expect the first parameter to be the current item it is iterating over'
);

const Slide2 = BasicSlideMaker(
  'Array Map',
  'The function should return whatever we want to have in the new array at the same index as the old array',
  'The original list has -not- been changed',
  'The new list will be the same length as the old list'
);

const Slide3 = BasicSlideMaker(
  'Array Map',
  <Link href="https://repl.it/classroom/invite/U04khTZ" target="_blank">Try these exercises!</Link>
);

export const FPMapSlideSet = [Slide1, Slide2, BasicCodeSlideMaker(mapCode), Slide3];
