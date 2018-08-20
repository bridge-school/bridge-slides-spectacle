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
    reduxIntroSet,
    reduxThunksIntroSet,
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
    ...FPFilterSlideSet,
    ...FPMapSlideSet,
    ...ReduceSlideSet,
    ...immutabilitySlideSet,
  ];

  // INTERPRETER
  const interpreterSlideList = [
    ...OrderOfOperationsSlideSet,
  ];

  // PROMISES
  const promisesSlideList = [
    ...PromisesSlideSet,
  ];

  // REACT
  const reactSlideList = [
    ...classComponentSlideSet,
    ...lifecycleSlideSet,
    ...reactComponentsIntroSlideSet,
    ...functionComponentSlideSet,
    ...reactPropsSlideSet,
    ...reactStateSlideSet,
  ];

  // REDUX
  const reduxSlideList = [
    ...reduxIntroSet,
    ...reduxThunksIntroSet,
  ];

  export {
      functionsSlideList,
      functionalProgrammingSlideList,
      interpreterSlideList,
      promisesSlideList,
      reactSlideList, 
      reduxSlideList
  };
  