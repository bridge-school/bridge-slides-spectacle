import * as paramCode from '!raw-loader!./function-anatomy-parameters.example';
import * as paramCode2 from '!raw-loader!./parameter-default-and-spread.example';
import { BasicCodeSlideMaker, ListSlideMaker } from '../../tools';

const Slide1 = ListSlideMaker('Parameters', [
  '0 or many items that are passed into a function for its use',
  'A function defines the parameters it expects',
  'The order of the parameters passed in should match the order expected by the function',
]);

const Slide2 = ListSlideMaker('Parameters', [
  'In ES6, you can assign default parameter values to be used when an argument is not passed in',
  'You can also use the rest operator to group the parameters together as an array',
  "It's important to name your parameters well to help with readability",
]);

export const FAnatomyParameterSlideSet = [
  Slide1,
  BasicCodeSlideMaker(paramCode),
  Slide2,
  BasicCodeSlideMaker(paramCode2),
];
