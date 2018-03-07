// Import React
import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import {
  FAnatomyOverview,
  FAnatomyParameterSlideSet,
  FAnatomyReturnSlideSet,
  FPFilterSlideSet,
  FPMapSlideSet,
  FPOverviewSlide,
  ImmutabilityOverviewSlide,
  IntroSlide,
  OverviewSlide,
  FAnatomyPureSlideSet,
  ArrowSlideSet,
} from './slides';

const slideList = [
  IntroSlide,
  OverviewSlide,
  FAnatomyOverview,
    ...FAnatomyReturnSlideSet,
    ...FAnatomyPureSlideSet,
    ...ArrowSlideSet,
    ...FAnatomyParameterSlideSet,
  FPOverviewSlide,
    ...FPFilterSlideSet,
    ...FPMapSlideSet,
  ImmutabilityOverviewSlide
];

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]} transitionDuration={0} progress="bar"
        theme={theme}>
          {slideList.map((WorkshopSlide, i) => <WorkshopSlide key={'slide' + i} />)}
      </Deck>
    );
  }
}