import React from "react";
import {
  BasicCodeSlideMaker,
  ListSlideMaker,
  ReplFrameSlide
} from "../../tools";

import * as classComponent1 from "!raw-loader!./class-component.example";
import { Link } from "spectacle";

const Slide1 = ListSlideMaker(
  `React Components - Class`,
  [`Another way to write a component is to use a class, classes were introduced in es6`,
  <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">
    More on classes
  </Link>,
  `They are more complex than function components, and require more boilerplate`,
  `They introduce the idea of lifecycle methods - which are methods that fire at certain points in a class components life, and you can 'tap into'`]
);

const Slide2 = BasicCodeSlideMaker(classComponent1);

const Slide3 = ListSlideMaker(
  `React Components - Class`,
  [`The render method on a class is where we define what the UI of the component will be`,
  `What gets returned in a render method should be either a single parent element (with as many children as you want) or an array of elements`,
  `Class components generally re-render when their state or props change, but you can prevent a re-render by tying into some lifecycle methods`]
);

const Slide4 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/class-components?lite=true"
);
const Slide5 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/exercise-components-2?lite=true"
);

export const classComponentSlideSet = [Slide1, Slide2, Slide3, Slide4, Slide5];
