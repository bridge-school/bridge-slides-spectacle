import * as pureCode from "!raw-loader!./function-anatomy-pure.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const WhyPureFunctions = ListSlideMaker(
  "Why Pure Functions",
  ["Essential to functional programming, React/redux apps",
  "More predictable, easier to test"]
);

const WhatIsAPureFunction = ListSlideMaker(
  "What Is A Pure Function",
  ["Small and explicit, 'do one thing'",
  "No side effects! Don't access or change something that exists outside the function; only use or modify values that are passed into or defined inside the function",
  "Should have a return statement - think of a pure function like a small factory: you give it the supplies and it outputs the product. The most important part is that the same supplies should always give you the same end product"]
);

const Slide2 = ReplClassSignup(
  "Pure Function",
  "https://repl.it/classroom/invite/U59Jpjv"
);
const Slide3 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/984648/07a60b50ab2b579174bff1011fa952af"
);

export const FAnatomyPureSlideSet = [
  WhyPureFunctions,
  WhatIsAPureFunction,
  BasicCodeSlideMaker(pureCode),
  Slide2,
  Slide3
];
