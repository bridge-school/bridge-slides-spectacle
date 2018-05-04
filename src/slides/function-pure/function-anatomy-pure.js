import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as pureCode from '!raw-loader!./function-anatomy-pure-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Pure Function',
  'Minimalistic and explicit - you want these to be small and very clear',
  'No side effects! Don\'t access or change something that exists outside the function; only use or modify values that are passed into or defined inside the function',
  'Should have a return statement - think of a pure function like a small factory: you give it the supplies and it outputs the product. The most important part is that the same supplies should always give you the same end product'
);

export const FAnatomyPureSlideSet = [Slide1, BasicCodeSlideMaker(pureCode)];
