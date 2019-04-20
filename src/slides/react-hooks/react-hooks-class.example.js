import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <section>
        <h1>{count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>Plus Plus</button>
      </section>
    );
  }
}
