import * as mapCode from "!raw-loader!./functional-programming-map.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const Slide1 = ListSlideMaker(
  "Array Map",
  ["Iterates through a list of items in an array and applies a provided function to each item before putting the result into a new array",
  "The .map() method expects a function 'callback'",
  "This function is fired for each item in the array - if there are three items, the function will run three times",
  "Each time the function is run, it is passed the current array item as the first parameter"]
);

const Slide2 = ListSlideMaker(
  "Array Map",
  ["The result of the callback function will be added to the new array at the same index as the input from the original",
  "Map will always return a new array that is the same length of the original",
  "The original list will -not- be changed or mutated"]
);

const Slide3 = ReplClassSignup(
  "Array Map",
  "https://repl.it/classroom/invite/UfJXrZW"
);
const Slide4 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/997068/7542de722e6e8190419a5dd009540b01"
);
const Slide5 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/997070/8d1fa5a839000aa36e665e77fe051b05"
);

export const FPMapSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(mapCode),
  Slide3,
  Slide4,
  Slide5
];
