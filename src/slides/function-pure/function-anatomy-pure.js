import React from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import * as pureCode from '!raw-loader!./function-anatomy-pure-example';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";
import {Link} from "spectacle";

const Slide1 = BasicSlideMaker(
  'Pure Function',
  'Minimalistic and explicit - you want these to be small and very clear',
  'No side effects! Don\'t access or change something that exists outside the function; only use or modify values that are passed into or defined inside the function',
  'Should have a return statement - think of a pure function like a small factory: you give it the supplies and it outputs the product. The most important part is that the same supplies should always give you the same end product'
);


const Slide2 = BasicSlideMaker(
  'Pure Function',
  <Link href="https://repl.it/classroom/invite/U59Jpjv" target="_blank">Try these exercises!</Link>
);

export const FAnatomyPureSlideSet = [Slide1, BasicCodeSlideMaker(pureCode), Slide2];
