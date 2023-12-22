import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Increase the count by 1
    setCount(count + 1);
  };

  const handleDecrement = () => {
    // Decrease the count by 1
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

