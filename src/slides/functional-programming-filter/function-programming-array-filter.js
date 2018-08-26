import * as filterCode from "!raw-loader!./functional-programming-filter.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const Slide1 = ListSlideMaker(
  "Array Filter",
  ["Iterates through a list of items in an array and applies a provided function to each item to determine whether to put the result into the new array",
  "The .filter() method can be called on any array",
  "The .filter() method expects a function 'callback'",
  "This function is fired for each item in the array - if there are three items, the function will run three times",
  "Each time the function is run, it is passed the current array item as the first parameter"]
);

const Slide2 = ListSlideMaker(
  "Array Filter",
  ["The callback function should return a 'truthy' or 'falsy' value",
  "If the function returns a truthy value, the current item will be added to the result array. If not, it will be ignored.",
  "Filter will always return a new array that is the same length or shorter than the original",
  "The original list will -not- be changed or mutated"]
);

const Slide4 = ReplClassSignup(
  "Array Filter",
  "https://repl.it/classroom/invite/UfIUspT"
);
const Slide5 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/997023/5c42df2c82f4a8d9922c36b9a92f2383"
);
const Slide6 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/997024/d4a5a2556ea9fbc4cf4aeff970f24fea"
);

export const FPFilterSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(filterCode),
  Slide4,
  Slide5,
  Slide6
];
