import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as pureCode from '!raw-loader!./function-anatomy-pure-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Pure Function',
  'Minimalistic and explicit - you want these to be small and very clear',
  'No Side effects! A side effect is something that is that in some way accesses a variable that either was not passed in as a parameter, or defined inside the function itself',
  'Should have a return statement - a pure function should be thought of as a small factory, you give it the supplies, and it outputs the product, same supplies should always give the same product'
);

export const FAnatomyPureSlideSet = [Slide1, BasicCodeSlideMaker(pureCode)];
