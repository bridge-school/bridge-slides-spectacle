import * as arrowCode from "!raw-loader!./function-arrow.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";
import { ARROW_FUNCTIONS } from "../../links";

const Slide1 = ListSlideMaker("Arrow Function", [
  "A shorthand for a regular function",
  "Must be defined on a variable - can't use the 'function' keyword",
  "Can be written in a way to return a value by default and without using the 'return' keyword",
  "Can be written as a single line!"
]);

const Slide2 = ReplClassSignup("Arrow Function", ARROW_FUNCTIONS.invite);
const Slide3 = ReplFrameSlide(ARROW_FUNCTIONS.exercise1);

export const ArrowSlideSet = [
  Slide1,
  BasicCodeSlideMaker(arrowCode),
  Slide2,
  Slide3
];
