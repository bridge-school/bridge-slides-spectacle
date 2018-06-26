import React from "react";

export class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Carol Danvers",
      age: 17
    };
  }

  // this is a lifecycle hook! There are a few in react, what they are, are methods that fire at certain points
  // in a react class components life - constructor for example fires at the very beginning of the lifecycle
  componentDidMount() {
    // here you can see that an object is passed into the setState method, with just one property
    this.setState({
      name: "Kamala Khan"
    });

    // this would show you that the only property that updated on state is the name property
    // age is left alone! Shallow merges are non-destructive, they only replace or add properties, they don't remove them
    console.log(this.state);
  }
}
