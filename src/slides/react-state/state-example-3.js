import React from 'react';

export class StatefulComponent extends React.Component {
  state = {
    name: 'Carol Danvers',
    age: 17
  };

  componentDidMount(){
    // updating the value of name this way would technically work - the value would change, but we wouldn't see it
    this.state.name = 'Kamala Khan';
  }

  render() {
    return <div>
      Hello {this.state.name},
      Can't believe you're {this.state.age} years old!
    </div>
  }
}
