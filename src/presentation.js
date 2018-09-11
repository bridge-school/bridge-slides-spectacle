// Import React
import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { colours, fontFamilies } from './theme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  functionsSlideList,
  functionalProgrammingSlideList,
  interpreterSlideList,
  promisesSlideList,
  reactSlideList,
  reduxSlideList,
  unitTestingSlideList,
} from './slideDecks'; // get the slide decks

// Require CSS
require('normalize.css');
require('./style.css');

const theme = createTheme(colours, fontFamilies);

const contentModules = [
  {
    path: 'functions',
    deck: functionsSlideList,
    title: 'Functions',
  },
  {
    path: 'functional-programming',
    deck: functionalProgrammingSlideList,
    title: 'Functional Programming',
  },
  {
    path: 'interpreter',
    deck: interpreterSlideList,
    title: 'The Interpreter',
  },
  {
    path: 'promises',
    deck: promisesSlideList,
    title: 'Promises',
  },
  {
    path: 'unit-testing',
    deck: unitTestingSlideList,
    title: 'Unit Testing',
  },
  {
    path: 'react',
    deck: reactSlideList,
    title: 'React',
  },
  {
    path: 'redux',
    deck: reduxSlideList,
    title: 'Redux',
  },
];

export default class Presentation extends React.Component {
  renderSlides = slideList => {
    return slideList.map((WorkshopSlide, i) => <WorkshopSlide key={'slide' + i} />);
  };

  renderSlideDeck = (routeProps, slideList) => {
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar" theme={theme}>
        {this.renderSlides(slideList)}
      </Deck>
    );
  };

  createRoute = (module, key) => {
    return (
      <Route
        path={`${process.env.PUBLIC_URL}/${module.path}/`}
        key={key}
        render={props => this.renderSlideDeck(props, module.deck)}
      />
    );
  };

  createRouteList = modules => {
    return modules.map((module, i) => this.createRoute(module, i));
  };

  createLinkList = modules => {
    return (
      <ul className="slide-deck-link-list">
        {modules.map((module, i) => {
          return (
            <li key={i} className="link-section">
              <Link className="slide-deck-link" to={`${process.env.PUBLIC_URL}/${module.path}/`}>
                {module.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <Router>
        <div className="presentation-container">
          <div className="routes-list">{this.createRouteList(contentModules)}</div>
          <div className="links-list">
            <h2 className="links-heading">Modules:</h2>
            {this.createLinkList(contentModules)}
          </div>
        </div>
      </Router>
    );
  }
}
