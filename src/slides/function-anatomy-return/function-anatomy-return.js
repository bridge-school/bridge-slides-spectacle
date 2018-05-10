import React from 'react';
/* eslint import/no-webpack-loader-syntax: off */
import * as returnCode from '!raw-loader!./function-anatomy-return-example';
import {BasicCodeSlideMaker, BasicSlideMaker, ReplClassSignup, ReplFrameSlide} from '../../tools';
import {Link} from "spectacle";

const Slide1 = BasicSlideMaker(
  'Returns',
  'A return statement is something you should have in almost all of your functions',
  'Without a return, a function resolves to \'undefined\'',
  'You can be very creative about what is returned - for example, you can return another function',
  'The result of a function return can be used immediately after that function has finished its business'
);

const Slide2 = ReplClassSignup('Returns', "https://repl.it/classroom/invite/UeLeKQb");
const Slide3 = ReplFrameSlide("https://repl.it/student_embed/assignment/994891/d75eb0695d276c4e4316014626b380cd");
const Slide4 = ReplFrameSlide("https://repl.it/student_embed/assignment/994774/56685ccab70b740d0cae8b5d22adc1c5");
export const FAnatomyReturnSlideSet = [Slide1, BasicCodeSlideMaker(returnCode), Slide2, Slide3, Slide4];
