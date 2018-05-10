import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as pureCode from '!raw-loader!./function-callback-example';
import * as pureCode2 from '!raw-loader!./function-callback-example2';
import {BasicCodeSlideMaker, BasicSlideMaker, ReplClassSignup, ReplFrameSlide} from "../../tools";

const Slide1 = BasicSlideMaker(
  'Function Callback',
  'Functions can be assigned to variables',
  'Functions that are assigned to variables can be invoked like you would expect'
);

const Slide2 =  BasicCodeSlideMaker(pureCode);

const Slide3 = BasicSlideMaker(
  'Function Callback',
  'If we can assign a function to a variable, this means we can assign a function as an argument',
  'Parameters that are functions are often referred to as callbacks'
);

const Slide4 =  BasicCodeSlideMaker(pureCode2);

const Slide5 = ReplClassSignup('Function Callback', 'https://repl.it/classroom/invite/U57Ds9p');
const Slide6 = ReplFrameSlide('https://repl.it/student_embed/assignment/984647/65e52fcb62b3c7f4bd1e7671b32069a0');

export const FCallbackSlideset = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
