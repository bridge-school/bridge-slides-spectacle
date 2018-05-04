import React from 'react';
import {BasicCodeSlideMaker, BasicSlideMaker} from "../../tools";
import {Link} from "spectacle";

/* eslint import/no-webpack-loader-syntax: off */
import * as orderCode from '!raw-loader!./operator-precedence-example';
import * as orderCode2 from '!raw-loader!./immediately-executing-function-example';

const Slide1 = BasicSlideMaker(
  'Operator Precedence',
  'aka the order of operations for JavaScript',
  'The interpreter is what executes our JavaScript code',
  `it 'reads' the code from top to bottom (ignoring hoisting)`,
  <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting">Hoisting info</Link>
);

const Slide2 = BasicSlideMaker(
  'Operator Precedence',
  'Like in math, ( ) brackets are very high priority',
  'Also like in math, the right side of an assignment operator (=, +=, etc) resolves and is then applied to the left',
  'Function arguments are resolved before being passed into a function',
  <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">Operator precedence link</Link>
);

const Slide3 = BasicSlideMaker(
  'Operator Precedence',
  'We can take advantage of parenthesis to resolve the value of something in high priority',
  'useful for arrow functions that need to return an object',
  'useful for immediately executing functions'
);

const Slide4 = BasicSlideMaker(
  'Operator Precedence',
  <Link href="https://repl.it/classroom/invite/U4z6byR" target="_blank">Try these exercises!</Link>
);

export const OrderOfOperationsSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(orderCode),
  Slide3,
  BasicCodeSlideMaker(orderCode2),
  Slide4
];