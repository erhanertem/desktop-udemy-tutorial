import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <div>
        <Counter>
          <Counter.Label>My super flexible counter</Counter.Label>
          <Counter.Increase icon="+" />
          <Counter.Decrease icon="-" />
          <Counter.Count />
        </Counter>
      </div>

      <div>
        <Counter>
          <Counter.Label>My other super flexible counter</Counter.Label>
          <div>
            <Counter.Increase icon="+" />
          </div>
          <Counter.Count />
        </Counter>
      </div>
    </div>
  );
}
