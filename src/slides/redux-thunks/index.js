import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplFrameSlide
} from "../../tools";

import * as reduxThunksConnectExample from "!raw-loader!./thunks-redux-connect.example";
import * as reduxThunksBasicExample from "!raw-loader!./thunks-basic.example";

const Slide1 = ListSlideMaker(
  `What is a Thunk?`,
  [`It's a special name for a function that is returned by another function`,
  `It is a functional programming technique used to delay a task`,
  `Perform work later rather than doing it now and instead, return a function or an expression`]
);

const Slide2 = ListSlideMaker(
  `Why do we need to use a middleware?`,
  [`Actions are plain objects and we use action creators so we can pass in specific information to that action, for example`,
  `const ADD_TODO = (text) => { type: "ADD_TODO", text };`,
  `What if we want to make our actions do something fun such as do some "async" but we can't perform async network calls in reducers as they need to be pure functions and we don't want side-effects.`,
  `Hence we use a middleware such as redux-thunks.`]
);

const Slide3 = ListSlideMaker(
  `Redux Thunks`,
  [`Thunks help us to handle side-effects`,
  `Anything impure needs to be handled in a thunk`,
  `Async calls are impure as they make network calls and can be moved into a middleware which thunks provide`]
);

const Slide4 = BasicCodeSlideMaker(
  reduxThunksConnectExample,
  16,
  `Connect Redux and Thunks`
);

const Slide5 = BasicCodeSlideMaker(
  reduxThunksBasicExample,
  16,
  "Dispatch actions using Thunks"
);

const Slide6 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/redux-thunks-in-react?lite=true"
);

export const reduxThunksIntroSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6
];
