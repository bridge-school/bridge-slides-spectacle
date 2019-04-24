import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplFrameSlide
} from "../../tools";

import * as functionComponent1 from "!raw-loader!./function-component.example";

const Slide1 = ListSlideMaker(
  `React Components - Function`,
  [`One of the ways you can create a React component is using a function`,
  `This is the simplest way to write a component, it's just a function that returns an element`,
  `The returned element is rendered, and you can only return either a single element, or an array of elements`,
  `You use this component as if it were a real HTML element`]
);

const Slide2 = BasicCodeSlideMaker(functionComponent1);

const Slide3 = ListSlideMaker(
  `React Components - Function`,
  [`They're often simpler than class components, but just as powerful`,
  `They do not have any lifecycle methods, unlike class components`,
  `Instead of lifecycle methods, function components can use hooks`]
);

const Slide4 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/function-components?lite=true"
);
const Slide5 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/exercise-components-1?lite=true"
);

export const functionComponentSlideSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5
];
