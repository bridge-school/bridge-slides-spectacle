import * as arrowCode from "!raw-loader!./function-arrow.example";
import {
  BasicCodeSlideMaker,
  BasicSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const Slide1 = BasicSlideMaker(
  "Arrow Function",
  "A shorthand for a regular function",
  "Must be defined on a variable - can't use the 'function' keyword",
  "Can be written in a way to return a value by default and without using the 'return' keyword",
  "Can be written as a single line!"
);

const Slide2 = ReplClassSignup(
  "Arrow Function",
  "https://repl.it/classroom/invite/U58GrJ"
);
const Slide3 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/994892/2990a9577dc2df49e19e6c36d40ff428"
);

export const ArrowSlideSet = [
  Slide1,
  BasicCodeSlideMaker(arrowCode),
  Slide2,
  Slide3
];
