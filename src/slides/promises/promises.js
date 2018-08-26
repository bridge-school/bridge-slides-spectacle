import * as usingPromiseCode from "!raw-loader!./using-a-promise.example";
import * as makingPromiseCode from "!raw-loader!./making-a-promise.example";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplClassSignup,
  ReplFrameSlide
} from "../../tools";

const Slide1 = ListSlideMaker(
  "Promises",
  ["A promise is a placeholder for a value that is unknown at the time of its creation.",
  "Promises have been supported as of the ES6/ES2015 standard and all of the major browsers, other than IE, support most if not all of the corresponding functionality.",
  "Promises represent one of a handful of ways to deal with asynchronous behaviour"]
);

const Slide2 = ListSlideMaker(
  "Promises",
  ["In simple terms, a promise is an object with a 'then' function that takes a callback",
  "When the promise resolves, the callback fires",
  "You can make your own promises, but libraries tend to provide them for you"]
);

const Slide3 = ReplClassSignup(
  "Promises",
  "https://repl.it/classroom/invite/V7RIbIS"
);

const Slide4 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/1129030/74479d935c296f8f9705a22acf29dd86"
);
const Slide5 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/1129032/5bf5309bdb323ced41ec1f28a148411f"
);
const Slide6 = ReplFrameSlide(
  "https://repl.it/student_embed/assignment/1129363/0cbafc25aa4f659c9385fe14d3525706"
);

export const PromisesSlideSet = [
  Slide1,
  Slide2,
  BasicCodeSlideMaker(usingPromiseCode),
  BasicCodeSlideMaker(makingPromiseCode),
  Slide3,
  Slide4,
  Slide5,
  Slide6
];
