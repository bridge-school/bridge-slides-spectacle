import * as pureCode from "!raw-loader!./function-anatomy-pure.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const Slide1 = ListSlideMaker(
  "Pure Function",
  ["Minimalistic and explicit - you want these to be small and very clear",
  "No side effects! Don't access or change something that exists outside the function; only use or modify values that are passed into or defined inside the function",
  "Should have a return statement - think of a pure function like a small factory: you give it the supplies and it outputs the product. The most important part is that the same supplies should always give you the same end product"],
  ["A side effect is when a function changes something outside of its local function scope.",
  "Why it's a problem: if you mutated a variable outside of the function scope, and that variable is read by another function at some other point in time = potential concurrency bug.",
  "A side effect giveaway: no return statement. If it makes sense to call it without a return value it’s likely impure.",
  "The function return should be predictable: same inputs results in same outputs, 'idempotent'. Is a function that gets the current date idempotent?",
  "These properties make pure functions reliable building blocks, and prefered."]
);

const Slide2 = ReplClassSignup(
  "Pure Function",
  "https://repl.it/classroom/invite/U59Jpjv"
);

const Slide3 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/984648/07a60b50ab2b579174bff1011fa952af"
);

export const FAnatomyPureSlideSet = [
  Slide1,
  BasicCodeSlideMaker(pureCode),
  Slide2,
  Slide3
];
