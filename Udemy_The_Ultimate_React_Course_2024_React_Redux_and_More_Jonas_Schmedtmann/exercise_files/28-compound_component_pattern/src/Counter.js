import { createContext, useContext, useState } from 'react';

// > #1.CREATE CONTEXT API
const CounterContext = createContext();

// > #2.CREATE PARENT COMPONENT W/STANDARD CONTEXT PROVIDER IMPLEMENTATION
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement }}
    >
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// > #3.CREATE CHILD COMPONENT TO HELP IMPLEMENT THE COMMON TASK
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label() {
  const { label } = useContext(CounterContext);
  return <span>{label}</span>;
}
function Increase({ icon }) {
  const { handleIncrement } = useContext(CounterContext);
  return <button onClick={handleIncrement}>{icon}</button>;
}
function Decrease({ icon }) {
  const { handleDecrement } = useContext(CounterContext);
  return <button onClick={handleDecrement}>{icon}</button>;
}

// > #4.ADD CHILD COMPONENTS AS PROPERTIES TO PARENT COMPONENT
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
