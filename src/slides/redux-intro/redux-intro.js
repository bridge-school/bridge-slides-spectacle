import {
  BasicCodeSlideMaker,
  BasicSlideMaker,
  ReplFrameSlide
} from "../../tools";

/* eslint import/no-webpack-loader-syntax: off */
import * as appStateExample from "!raw-loader!./app-state-example";
import * as actionExample from "!raw-loader!./action-example";
import * as reducerExample from "!raw-loader!./reducer-example";

const Slide1 = BasicSlideMaker(
  `Redux`,
  `Redux is a state management library for applications`,
  `It helps keeps our apps predictable, easy to test and runs in different environments (client, server, native mobile)`,
  `You can use Redux with React or any other view library`
);

const Slide2 = BasicSlideMaker(
  `Redux - Motivation`,
  `Front-end apps are expected to handle more state than ever before`,
  `At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state`,
  `Mixing mutation and asynchronicity is difficult to reason about. Redux tries to make state mutations predtictable`
);

const Slide3 = BasicCodeSlideMaker(
  appStateExample,
  20,
  "Your application state represented as a single object"
);

const Slide4 = BasicSlideMaker(
  `App State`,
  `Your application state is a like a model except there are no setters. This is so that different parts of the code cant randomly change the application state.`,
  `In order to update the state we'll need to dispatch an action`,
  `An action is a plain JavaScript object that describes what happened to make the state change`,
  `If something changed, we know why it changed. Actions are like breadcrumbs of what has happened.`
);

const Slide5 = BasicCodeSlideMaker(actionExample, 20, "Action Objects");

const Slide6 = BasicSlideMaker(
  `Reducers`,
  `To tie actions and the app state together, we write a function called a reducer`,
  `This function only ever takes the state and the action as arguments and returns the next state`
);

const Slide7 = BasicCodeSlideMaker(reducerExample, 20, "Reducer Functions");

const Slide8 = BasicSlideMaker(
  `Three Principles`,
  `Single source of truth: your application state is stored in an object tree within a single store`,
  `State is read-only: the only way to change the state is with an action`,
  `Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers`
);

const Slide9 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/Redux-simple-example?lite=true"
);

export const reduxIntroSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9
];
