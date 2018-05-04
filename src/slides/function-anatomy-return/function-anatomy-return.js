import React from 'react';
/* eslint import/no-webpack-loader-syntax: off */
import * as returnCode from '!raw-loader!./function-anatomy-return-example';
import { BasicCodeSlideMaker, BasicSlideMaker } from '../../tools';

const Slide1 = BasicSlideMaker(
  'Returns',
  'A return statement is something you should have in almost all of your functions',
  'Without a return, a function resolves to \'undefined\'',
  'You can be very creative about what gets returned - for example, another function',
  'The result of a function return can be used immediately after that function has finished it\'s business'
);

export const FAnatomyReturnSlideSet = [Slide1, BasicCodeSlideMaker(returnCode)];
