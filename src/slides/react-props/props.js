import { BasicSlideMaker, ReplFrameSlide } from "../../tools";

const Slide1 = BasicSlideMaker(
  `React Props`,
  `React components can often be thought of (and written as) pure functions`,
  `They often need to receive data, and render in a particular way with that data`,
  `Imagine a component for a user - receiving user data and displaying it appropriately`
);

const Slide2 = BasicSlideMaker(
  `React Props`,
  `If you think of a React Component as a function, you'll have the declaration of the component - where you define it`,
  `const MyFunction = () => <h1> Hello World </h1>; - this is defining our component`,
  `And you'll have it's invocation - where you 'call' your component`,
  `<MyFunction /> - this is what we would do to call the above component`
);
const Slide3 = BasicSlideMaker(
  `React Props`,
  `In that way, if we think of props as arguments/parameters, we would define our parameters in the function definition and our arguments in the invocation`,
  `const MyFunction = (props) => <h1> Hello {props.name} </h1>; - the first argument, props, represents an object with all your passed in arguments`,
  `<MyFunction name="World" /> - the 'name=' is specifying which prop value you are setting, and on the right you can set the value`
);

const Slide4 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/props-user-example?lite=true"
);

const Slide5 = BasicSlideMaker(
  `React Props`,
  `In  the next slide, you'll see some more examples, as well as in class exercises written in the comments around the examples`,
  `Good luck!`
);

const Slide6 = ReplFrameSlide(
  "https://repl.it/@AbdellaPurvi/React-Props?lite=true"
);

export const reactPropsSlideSet = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6
];
