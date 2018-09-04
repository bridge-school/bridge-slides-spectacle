import * as pureCode from "!raw-loader!./function-callback.example";
import * as pureCode2 from "!raw-loader!./function-callback-2.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";
import { CALLBACKS } from "../../links";

const Slide1 = ListSlideMaker("Function Callback", [
  "Functions can be assigned to variables",
  "Functions that are assigned to variables can be invoked like you would expect"
]);

const Slide2 = BasicCodeSlideMaker(pureCode);

const Slide3 = ListSlideMaker("Function Callback", [
  "If we can assign a function to a variable, this means we can assign a function as an argument",
  "Parameters that are functions are often referred to as callbacks"
]);

const Slide4 = BasicCodeSlideMaker(pureCode2);

const Slide5 = ReplClassSignup("Function Callback", CALLBACKS.invite);

const Slide6 = ReplFrameSlide(CALLBACKS.exercise1);

export const FCallbackSlideset = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6
];
