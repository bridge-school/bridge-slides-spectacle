import * as reduceCode from "!raw-loader!./reduce.example";
import * as reduceCode2 from "!raw-loader!./reduce-2.example";
import * as reduceCode3 from "!raw-loader!./reduce-3.example";

import {
  BasicCodeSlideMaker,
  BasicSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const Slide1 = BasicSlideMaker(
  "Array Reduce",
  "Iterates through a list of items in an array and applies a provided function to each item to create the desired output value",
  "The .reduce() method can be called on any array",
  "The .reduce() method expects a function 'callback' and accepts an optional 'initial value'",
  "Unlike filter and map, reduce does not have to result in an array; it could return any kind of value"
);

const Slide2 = BasicSlideMaker(
  "Array Reduce",
  "The callback in reduce is different from the previous ones we've seen; it takes in two parameters",
  "The first parameter in the callback is often referred to as the accumulator; it contains the combined result of the previous iterations' returns",
  "The second parameter in the callback is the current array item from the source array"
);

const Slide3 = BasicSlideMaker(
  "Array Reduce",
  "In addition to the callback method, reduce can take an optional second parameter: an initial value for the callback's accumulator",
  "You often use this to indicate the final output's type",
  "If you don't provide an initial value, reduce will pass the first item from the source array to the callback instead. This will be used as the initial value of the accumulator",
  "The last time the reduce callback fires, the result it outputs will be the final reduced value"
);

const Slide4 = ReplClassSignup(
  "Array Reduce",
  "https://repl.it/classroom/invite/UdzE1SB"
);
const Slide5 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/994125/d6cbf3fc8c3cd0c249e5e408a086d44a"
);
const Slide6 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/994126/53c2d803a1c1989efbf5e82a1ecd39e1"
);
const Slide7 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/994142/03d8caadb086d52746992fe0973bc866"
);

export const ReduceSlideSet = [
  Slide1,
  Slide2,
  Slide3,
  BasicCodeSlideMaker(reduceCode),
  BasicCodeSlideMaker(reduceCode2, 24),
  BasicCodeSlideMaker(reduceCode3),
  Slide4,
  Slide5,
  Slide6,
  Slide7
];
