import React from 'react';


const MyComponent = () => <h2>Hello World</h2>;

const MyComponentAlternative = function(){
  return <h2>Hello other world</h2>
};


const view = <div>
  <p>Here we have our component</p>
  <MyComponet />
  <MyComponetAlternative />
</div>;
