// Import React
import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import {
  FAnatomyArrowSlide,
  FAnatomyOverview,
  FAnatomyParamSlide,
  FAnatomyReturnSlide,
  FPArrayFilterSlide,
  FPArrayMapSlide,
  FPOverviewSlide,
  ImmutabilityOverviewSlide,
  IntroSlide,
  OverviewSlide,
  FAnatomyPureSlide,
} from './slides';

const slideList = [
  IntroSlide,
  OverviewSlide,
  FAnatomyOverview,
  FAnatomyReturnSlide,
  FAnatomyPureSlide,
  FAnatomyArrowSlide,
  FAnatomyParamSlide,
  FPOverviewSlide,
  FPArrayFilterSlide,
  FPArrayMapSlide,
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
      <Deck theme={theme}>
        {slideList.map((WorkshopSlide, i) => <WorkshopSlide key={'slide' + i} />)}
      </Deck>
    );
  }
}