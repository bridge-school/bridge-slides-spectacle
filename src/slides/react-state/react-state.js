import {
  BasicCodeSlideMaker,
  BasicSlideMaker,
  ReplFrameSlide
} from "../../tools";

/* eslint import/no-webpack-loader-syntax: off */
import * as stateExample1 from "!raw-loader!./state-example-1";
import * as stateExample2 from "!raw-loader!./state-example-2";
import * as stateExample3 from "!raw-loader!./state-example-3";
import * as stateExample4 from "!raw-loader!./state-example-4";

const Slide1 = BasicSlideMaker(
  `React State`,
  `While React Props are available in both function components and class components, 'state' can only exist on a class component`,
  `In class components, you have the opportunity to control when and how your component re-renders`,
  `This combines with the ability to store state in your component (which you cannot do in function components, aka, stateless components)`,
  `What this means is that there is a keyword property, 'state', that you can interact with in your class component`
);

const Slide2 = BasicCodeSlideMaker(stateExample1, 20);

const Slide3 = BasicSlideMaker(
  `React State`,
  `We can use any property on the class to store information to use in the render, however the state property is special`,
  `That's because of a method provided to React class components (this is provided by the extend React.Component snippet!)`,
  `The method, .setState(), takes an object and shallow merges it into your state property`
);

const Slide4 = BasicCodeSlideMaker(stateExample2, 18);

const Slide5 = BasicSlideMaker(
  `React State`,
  `What makes setState special isn't just shallow merging, we can do that ourselves, what it also does is it triggers a re-render`,
  `if you were to directly change the value of your state, with something like... this.state.name = 'Pauline', your value WOULD update, but your component wouldn't re-render`,
  `This means that if you inspected it, your this.state.name would equal 'Pauline' - but your live component would still show whatever name was there originally`,
  `This is also why we use state instead of some other property, another property wouldn't have this relationship with setState`
);

const Slide6 = BasicCodeSlideMaker(stateExample3, 20);
const Slide7 = BasicCodeSlideMaker(stateExample4, 20);

const Slide8 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/react-state-exercise-1?lite=true"
);

const Slide9 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/react-state-exercise-2?lite=true"
);

const Slide10 = BasicSlideMaker(
  `Using State Correctly`,
  `Do not modify state directly, instead use setState`,
  `State updates may be asynchronous, do not rely on them for calculating the next state. Instead use a callback function with prevState`,
  `State updates are shallow merged.`
);

export const reactStateSlideSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10
];
