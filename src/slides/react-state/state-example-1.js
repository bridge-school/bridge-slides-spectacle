import React from 'react';

export class StatefulComponent extends React.Component {

  // in classes, you can assign properties to the object like this, it sort of looks like
  // object notation, and it takes a little while to get used to.
  // Think of it like this - when you make an Instance of StatefulComponent, it will have .state on it as a property
  // inside of the definition of of the class, you can reference state by using the this keyword! ie, this.state
  state = {
    name: 'Kamala Khan',
    age: 17
  };

  render() {
    return <div>
      Hello {this.state.name},
      Can't believe you're {this.state.age} years old!
    </div>
  }
}
