import React from 'react';

// Let's imagine I import a react component from this path, notice the name starts with a capital letter!
import { MyReactComponent } from './components';


// Here you can see that this component I've imported isn't instantiated the same way I do with
// other javascript variables or non-component elements, but as though it was a native HTML element!
const  myApp = <div>
  <h1>Hello everyone</h1>
  <h2>Welcome to app!</h2>

  <MyReactComponent />
</div>;