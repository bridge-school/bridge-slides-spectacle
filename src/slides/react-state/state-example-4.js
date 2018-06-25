import React from 'react';

export class StatefulComponent extends React.Component {
  state = {
    name: 'Carol Danvers',
    age: 17
  };

  componentDidMount(){
    // updating the value of name this way triggers a re-render, meaning the hello {this.state.name} will correctly
    //display Kamala Khan!
    this.setState({name: 'Kamala Khan'})
  }

  render() {
    return <div>
      Hello {this.state.name},
      Can't believe you're {this.state.age} years old!
    </div>
  }
}
