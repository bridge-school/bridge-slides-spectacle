import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as usingPromiseCode from '!raw-loader!./using-a-promise';
import * as makingPromiseCode from '!raw-loader!./making-a-promise';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Promises',
  'A promise is a placeholder for a value that is unknown at the time of its creation.',
  'Promises have been supported as of the ES6/ES2015 standard and all of the major browsers, other than IE, support most if not all of the corresponding functionality.',
  'Promises represent one of a handful of ways to deal with asynchronous behaviour'
);

const Slide2 = BasicSlideMaker(
  'Promises',
  'In simple terms, a promise is an object with a \'then\' function that takes a callback',
  'When the promise resolves, the callback fires',
  'You can make your own promises, but libraries tend to provide them for you'
);

export const PromisesSlideSet = [
    Slide1,
    Slide2,
    BasicCodeSlideMaker(usingPromiseCode),
    BasicCodeSlideMaker(makingPromiseCode),
];
