import React, { useState } from 'react';

function Counter() {
  // or const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus Plus</button>
    </section>
  );
}
