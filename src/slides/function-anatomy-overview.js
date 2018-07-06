import React from "react";
import { Heading, List, ListItem, Slide } from "spectacle";

export class FAnatomyOverview extends React.Component {
  render() {
    return (
      <Slide bgColor="primary" transition={["slide"]} {...this.props}>
        <Heading textSize="45" textColor="secondary">
          What do Functions look like?
        </Heading>
        <List>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            A Return Statement: what the function 'resolves to' or outputs as a
            result of running the code in the function
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Parameters: what information a function can expect as input
          </ListItem>
          <ListItem textSize="32" margin="0 0 1.2rem 0">
            Pure Function: a function that uses the above two ideas to be as
            reusable, predictable and durable as possible
          </ListItem>
        </List>
      </Slide>
    );
  }
}
