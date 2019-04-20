import { ListSlideMaker, BasicCodeSlideMaker } from '../../tools';

// import code examples with raw loader for BasicCodeSlideMaker
import * as hooksClassExample from '!raw-loader!./react-hooks-class.example';
import * as hooksFunctionExample from '!raw-loader!./react-hooks-function.example';

// pushing to an array to avoid re-numbering slides when adding content
// in between existing slides
const slides = [];

slides.push(
  ListSlideMaker(`Intro to React Hooks`, [
    `Hooks are a feature available in React 16.8.0 and later that let you use things like State without Classes`,
    `You will recognize them as always starting with 'use' and always called at the top level of a Function Component`,
    `Hooks enable you to use Functions in place of Classes for Components`,
  ]),
);

slides.push(
  ListSlideMaker(`The ✌️Rules Again`, [
    `Always call Hooks in the top level of a function, not in a loop or an if statement for example`,
    `Always call Hooks from Function Components`,
  ]),
);

slides.push(
  ListSlideMaker(`Completely Opt-in!`, [
    `Hooks don't replace your current React knowledge, but they provide more direct access to things like State and Lifecycle`,
    `100% backwards compatible with your current code`,
    `No need to rewrite Classes, but you can start creating small components with Hooks today!`,
  ]),
);

slides.push(
  ListSlideMaker(`Our First Hook: useState`, [
    `useState is a function provided by React that lets you interact with local state`,
    `It returns an array with two values: the current state and a way to change it (like this.setState)`,
    `useState also takes an initial state as a parameter`,
    `You can destructure the array: const [count, setCount] = useState(0)`,
    `Let's take a look at a simple Class Component and then how it could be a Function with Hooks`,
  ]),
);

slides.push(BasicCodeSlideMaker(hooksClassExample, 24));

slides.push(BasicCodeSlideMaker(hooksFunctionExample, 34));

slides.push(
  ListSlideMaker(`What Have We Done?`, [
    `We have less, more readable code to accomplish the same thing`,
    `"Readable" meaning setCount explains what it does better than this.setState`,
    `We used Hooks!`,
  ]),
);

slides.push(
  ListSlideMaker(`Learning More About Hooks`, [
    `Official docs: https://reactjs.org/docs/hooks-intro.html`,
    `Check out useEffect next! https://reactjs.org/docs/hooks-effect.html`,
    `Great examples of custom Hooks: https://usehooks.com/`,
    `Try to recreate some of your Class Components using Hooks!`,
  ]),
);

export const reactHooksSlideSet = [...slides];
