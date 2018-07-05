import { BasicCodeSlideMaker, BasicSlideMaker } from "../../tools";

import * as jsxExample from "!raw-loader!./jsx.example";
import * as reactComponentExample from "!raw-loader!./react-component.example";

const Slide1 = BasicSlideMaker(
  `React Components`,
  `React is a component based library - meaning that it uses components to represents parts of the user view`,
  `A component can be thought of as javascript, html and css all packaged into a an (ideally) small and reusable piece of code`,
  `Component based architecture has been around for a while, and is now increasingly common on the web`,
  `List of Component based Libraries/Frameworks: React.js, Vue.js, Angular 2+, Polymer, Aurelia, more++`
);

const Slide2 = BasicSlideMaker(
  `React Components - JSX`,
  `In React, the way to write components representing html elements is to use JSX`,
  `JSX is an extension to how you can write javascript - it allows you to easily mix javascript/html`,
  `This is valuable because we often need to have logic mixed into our UI, and this is made easily with jsx`,
  `In other libraries/frameworks, often the HTML itself is 'enhanced' in React it's the javascript`
);

const Slide3 = BasicCodeSlideMaker(jsxExample);

const Slide4 = BasicSlideMaker(
  `React Components`,
  `One very important thing to remember is that in React, components must be defined with their first letter Capitalized`,
  `myComponent - for example this would not be rendered as a normal component`,
  `MyComponent - this COULD be rendered as a component`,
  `Rendering a component is slightly different than regular JS variables`
);

const Slide5 = BasicCodeSlideMaker(reactComponentExample);

export const reactComponentsIntroSlideSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5
];
