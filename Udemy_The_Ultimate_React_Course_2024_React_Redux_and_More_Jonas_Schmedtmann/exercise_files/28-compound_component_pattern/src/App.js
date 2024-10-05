import Counter from './Counter';
import './styles.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter
        label='My NOT so flexible counter'
        iconIncrease='+'
        iconDecrease='-'
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount='top'
      />

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon='-' />
        <Counter.Count />
        <Counter.Increase icon='+' />
      </Counter>

      <div>
        <br />
        <Counter>
          <Counter.Label>My other super flexible counter</Counter.Label>
          <Counter.Decrease icon='➖' />
          <Counter.Count />
          <Counter.Increase icon='➕' />
        </Counter>
      </div>
    </div>
  );
}
