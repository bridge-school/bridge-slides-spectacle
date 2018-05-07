// Import React
import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { colours, fontFamilies } from './theme';

import {
  FAnatomyOverview,
  FAnatomyParameterSlideSet,
  FAnatomyReturnSlideSet,
  FPFilterSlideSet,
  FPMapSlideSet,
  FPOverviewSlideSet,
  ImmutabilityOverviewSlide,
  OrderOfOperationsSlideSet,
  IntroSlide,
  OverviewSlide,
  FAnatomyPureSlideSet,
  ArrowSlideSet,
  PromisesSlideSet,
} from './slides';
import {ReduceSlideSet} from "./slides/functional-programming-reduce";

const slideList = [
  ...FAnatomyReturnSlideSet,
  ...FAnatomyPureSlideSet,
  ...ArrowSlideSet,
  ...FAnatomyParameterSlideSet,
  ...FPMapSlideSet,
  ...FPFilterSlideSet,
  ...ReduceSlideSet,
  ...OrderOfOperationsSlideSet,
  ImmutabilityOverviewSlide,
  ...PromisesSlideSet
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
