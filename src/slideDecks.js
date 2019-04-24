// divide slides into modules

import {
  FAnatomyParameterSlideSet,
  FAnatomyReturnSlideSet,
  ArrowSlideSet,
  FCallbackSlideset,
  FAnatomyPureSlideSet,
  FPFilterSlideSet,
  FPMapSlideSet,
  immutabilitySlideSet,
  OrderOfOperationsSlideSet,
  PromisesSlideSet,
  reactComponentsIntroSlideSet,
  functionComponentSlideSet,
  classComponentSlideSet,
  reactPropsSlideSet,
  lifecycleSlideSet,
  reactStateSlideSet,
  reactHooksSlideSet,
  reduxIntroSet,
  reduxThunksIntroSet,
  unitTestingIntroSet,
  unitTestingSet,
} from './slides';
import { ReduceSlideSet } from './slides/functional-programming-reduce';

// FUNCTIONS
const functionsSlideList = [
  ...FAnatomyParameterSlideSet,
  ...FAnatomyReturnSlideSet,
  ...ArrowSlideSet,
  ...FCallbackSlideset,
  ...FAnatomyPureSlideSet,
];

// FUNCTIONAL PROGRAMMING
const functionalProgrammingSlideList = [
  ...FPMapSlideSet,
  ...FPFilterSlideSet,
  ...ReduceSlideSet,
  ...immutabilitySlideSet,
];

// INTERPRETER
const interpreterSlideList = [...OrderOfOperationsSlideSet];

// PROMISES
const promisesSlideList = [...PromisesSlideSet];

// UNIT TESTING
const unitTestingSlideList = [...unitTestingIntroSet, ...unitTestingSet];

// REACT
const reactSlideList = [
  ...reactComponentsIntroSlideSet,
  ...functionComponentSlideSet,
  ...reactPropsSlideSet,
  ...classComponentSlideSet,
  ...reactStateSlideSet,
  ...lifecycleSlideSet,
  ...reactHooksSlideSet,
];

// REDUX
const reduxSlideList = [...reduxIntroSet, ...reduxThunksIntroSet];

export {
  functionsSlideList,
  functionalProgrammingSlideList,
  interpreterSlideList,
  promisesSlideList,
  reactSlideList,
  reduxSlideList,
  unitTestingSlideList,
};
