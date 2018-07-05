import React from 'react';

// this variable, hello, represents a simple bit of HTML!
const hello = <h1>Hello world</h1>;

const name = 'Stephanie';

// using { } brackets within your html syntax signals that you want to 'move back' to working in js
// this allows you to combine javascript and html very easily
const helloName = <h1>{ name }</h1>;


// you can go so far as to do javascript logic operations right inside those {} brackets
// when inside {} brackets, if you write another element using < > brackets, you 'switch back'
// to 'html mode' - meaning all things written within those brackets are considered HTML again
const helloItem = <div>
  <h1>Hello {name}</h1>
  {name === 'Stephanie' ? <h2>I know you! Hey Steph</h2> : <h3>Who're you?</h3>}
</div>;

// these variables representing dom elements can be used inside of jsx, like helloItem is used here
const final = <div>
  <h2>Greeting</h2>
  { helloItem }
</div>;