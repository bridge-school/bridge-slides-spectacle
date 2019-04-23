import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplFrameSlide
} from "../../tools";

import * as stateExample1 from "!raw-loader!./state-1.example";
import * as stateExample2 from "!raw-loader!./state-2.example";
import * as stateExample3 from "!raw-loader!./state-3.example";
import * as stateExample4 from "!raw-loader!./state-4.example";

const Slide1 = ListSlideMaker(
  `React State`,
  [`While function components and class components both take in props, they have different approaches to managing state`,
  `Similarly to props, which are accessible using 'this.props', state in class components can be accessed using 'this.state'`,
  `Unlike props, which are passed in from a parent component, state lives inside the component`]
);

const Slide2 = BasicCodeSlideMaker(stateExample1, 20);

const Slide3 = ListSlideMaker(
  `React State`,
  [`We can use any property on the class to store information to use in the render, however the state property is special`,
  `That's because of a method provided to React class components (this is provided by the extend React.Component snippet!)`,
  `The method, .setState(), takes an object and shallow merges it into your state property`]
);

const Slide4 = BasicCodeSlideMaker(stateExample2, 18);

const Slide5 = ListSlideMaker(
  `React State`,
  [`What makes setState special isn't just shallow merging, we can do that ourselves, what it also does is it triggers a re-render`,
  `if you were to directly change the value of your state, with something like... this.state.name = 'Pauline', your value WOULD update, but your component wouldn't re-render`,
  `This means that if you inspected it, your this.state.name would equal 'Pauline' - but your live component would still show whatever name was there originally`,
  `This is also why we use state instead of some other property, another property wouldn't have this relationship with setState`]
);

const Slide6 = BasicCodeSlideMaker(stateExample3, 20);
const Slide7 = BasicCodeSlideMaker(stateExample4, 20);

const Slide8 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/react-state-exercise-1?lite=true"
);

const Slide9 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/react-state-exercise-2?lite=true"
);

const Slide10 = ListSlideMaker(
  `Using State Correctly`,
  [`Do not modify state directly, instead use setState`,
  `State updates may be asynchronous, do not rely on them for calculating the next state. Instead use a callback function with prevState`,
  `State updates are shallow merged.`]
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
