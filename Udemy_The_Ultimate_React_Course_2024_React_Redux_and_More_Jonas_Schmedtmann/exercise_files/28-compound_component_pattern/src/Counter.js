import { createContext, useContext, useState } from "react";

//> #1.Create a context
const CounterContext = createContext();

//> #2.Create a Parent Component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((count) => ++count);
  const decrease = () => setCount((count) => --count);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

//> #3.Create Child Components to help implement the common tasks
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}
//> #4.Add Child Components as Custom properties to Parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
export default Counter;
