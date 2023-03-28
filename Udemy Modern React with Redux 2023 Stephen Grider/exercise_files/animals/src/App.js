import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Animal
      </button>
      <div>Number of Animals: {count}</div>
    </div>
  );
}

export default App;
