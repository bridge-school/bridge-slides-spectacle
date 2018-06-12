import React from 'react';
import {BasicCodeSlideMaker, BasicSlideMaker, ReplClassSignup, ReplFrameSlide} from '../../tools';
import { Link } from "spectacle";

/* eslint import/no-webpack-loader-syntax: off */
import * as arrayCode1 from '!raw-loader!./immutable-array-code';
import * as arrayCode2 from '!raw-loader!./immutability-array-code-2';
import * as objcode1 from '!raw-loader!./obj-code-1';
import * as objcode2 from '!raw-loader!./obj-code-2';


const Slide1 = BasicSlideMaker(
  'Immutability',
  'Working in an immutable way means to never -modify- an object, but rather make a new copy of an object with changes',
  'This is valuable for writing pure and predictable functions',
  'This is valuable for writing tests and having easily debugged code',
  'This is valuable for \'state management\' - ie, keeping ontop of what your apps data is, what changed it, and when'
);

const Slide2 = BasicSlideMaker(
  'Immutability - Array',
  `Array's have methods that modify their value, like .push()`,
  `Mutating Array's can lead you to losing original data in cases that you would like to keep that data`,
  `Mutation in general can make it hard to figure out how your data has changed`,
  `You can see which methods are 'mutators' here:`,
  <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods">Array Methods</Link>
);


const Slide3 = BasicCodeSlideMaker(arrayCode1);
const Slide4 = BasicCodeSlideMaker(arrayCode2);

const Slide5 = BasicSlideMaker(
  'Immutability - Object',
  `Objects are challenging to copy and modify without changing the original object`,
  `Traditionally we update properties on objects using the = operator, but this is not immutable`,
);

const Slide6 = BasicCodeSlideMaker(objcode1);

const Slide7 = BasicSlideMaker(
  'Immutability - Object',
  `Instead of using the = operator to change an object's values, it's a good idea to use Object.assign or object spread - {...}`,
  `When used correctly, these allow you to make copies of your objects, with changes, without changing the origiinal object`,
);

const Slide8 = BasicCodeSlideMaker(objcode2, 20);

const Slide9 = ReplClassSignup('Immutability', 'https://repl.it/classroom/invite/QXD4Cbe');
const Slide10 = ReplFrameSlide('https://repl.it/student_embed/assignment/1133724/174b162a59d3249af17447e4f53505b3');
const Slide11 = ReplFrameSlide('https://repl.it/student_embed/assignment/1134141/c645f1d5da203cb10a4d794825e486d9');


export const immutabilitySlideSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11
];