// Import React
import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { colours, fontFamilies } from './theme';

import {
  FAnatomyParameterSlideSet,
  FAnatomyReturnSlideSet,
  FPFilterSlideSet,
  FPMapSlideSet,
  immutabilitySlideSet,
  OrderOfOperationsSlideSet,
  FAnatomyPureSlideSet,
  ArrowSlideSet,
  PromisesSlideSet,
  FCallbackSlideset,
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

const slideList = [
  ...FAnatomyReturnSlideSet,
  ...FAnatomyParameterSlideSet,
  ...FAnatomyPureSlideSet,
  ...FCallbackSlideset,
  ...ArrowSlideSet,
  ...FPMapSlideSet,
  ...FPFilterSlideSet,
  ...ReduceSlideSet,
  ...OrderOfOperationsSlideSet,
  ...immutabilitySlideSet,
  ...PromisesSlideSet,
  ...reactComponentsIntroSlideSet,
  ...functionComponentSlideSet,
  ...classComponentSlideSet,
  ...reactPropsSlideSet,
  ...lifecycleSlideSet,
  ...reactStateSlideSet,
  ...reduxIntroSet,
  ...reduxThunksIntroSet,
];

// Require CSS
require('normalize.css');
require('./style.css');

const theme = createTheme(colours, fontFamilies);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar" theme={theme}>
        {slideList.map((WorkshopSlide, i) => (
          <WorkshopSlide key={'slide' + i} />
        ))}
      </Deck>
    );
  }
}
