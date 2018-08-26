import React from "react";
import { Slide, Heading, Text, List, ListItem, Link } from "spectacle";
import { ListSlideMaker } from "../../tools";

class OverviewSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={["slide"]} {...this.props}>
        <Heading textSize="75">The Component Lifecycle Events</Heading>
        <Text textSize="32" textColor="white">
          Events that fire throughout the lifecycle of a component. There are
          events for:
        </Text>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Mounting (creating) the component
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Updating the component
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            Unmounting (destroying) the component
          </ListItem>
        </List>
      </Slide>
    );
  }
}

const MountSlide = ListSlideMaker(`Mounting Events`);

const ConstructorSlide = ListSlideMaker(
  `constructor (props)`,
  [`Called to construct an instance of the component class`,
  `Used to initialize state and bind methods`]
);

const DerivedStateSlide = ListSlideMaker(
  `getDerivedStateFromProps (props, state)`,
  [`Called just before the render method. Both on initial mount and updates`,
  `Used to help compute state based on a prop change`,
  `Returns an object to update the state or null to update nothing`,
  `Should be used sparingly`]
);

const DidMountSlide = ListSlideMaker(
  `componentDidMount ()`,
  [`Called once the component is successfully mounted (rendered into the DOM)`,
  `A great place to make fetch calls`]
);

const UpdateSlide = ListSlideMaker(`Updating Events`);

const ShouldUpdateSlide = ListSlideMaker(
  `shouldComponentUpdate (nextProps, nextState)`,
  [`Called after getDerivedStateFromProps`,
  `Used to return a boolean to determine whether the component should rerender`,
  `Useful but should not be needed often`]
);

const DidUpdateSlide = ListSlideMaker(
  `componentDidUpdate (previousProps, PreviousState)`,
  [`Called right after the component is updated in the DOM`,
  `Good place to make HTTP requests as long as you compare your previous state and props their current values`,
  `Can call this.setState as long is it wrapped in a condition to avoid an infinite loop`]
);

const UnmountSlide = ListSlideMaker(`Unmounting Events`);

const WillUnmountSlide = ListSlideMaker(
  `componentWillUnmount ()`,
  [`Called before the component is unmounted and destroyed`,
  `Used for clean up like removing timers, cancelling network requests, etc`]
);

const DeprecatedSlide = ListSlideMaker(
  `Deprecated Events`,
  [`componentWillMount`,
  `componentWillUpdate`,
  `componentWillRecieveProps`]
);

class ResourcesSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={["slide"]} {...this.props}>
        <Heading textSize="75">Resources</Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            <Link href="https://reactjs.org/docs/react-component.html">
              Documentation for all lifecycle methods
            </Link>
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.5rem 0">
            <Link href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
              Lifecycle event order diagram
            </Link>
          </ListItem>
        </List>
      </Slide>
    );
  }
}

export const lifecycleSlideSet = [
  OverviewSlide,
  MountSlide,
  ConstructorSlide,
  DerivedStateSlide,
  DidMountSlide,
  UpdateSlide,
  ShouldUpdateSlide,
  DidUpdateSlide,
  UnmountSlide,
  WillUnmountSlide,
  DeprecatedSlide,
  ResourcesSlide
];
