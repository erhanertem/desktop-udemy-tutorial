// import { useState } from 'react';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

//In order to prevent typo error - nothing more!
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const CHANGE_VALUE = 'change-value-to-add';
const SUBMIT_VALUE = 'submit-value';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case SUBMIT_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      // throw new Error('unexpected action type: ' + action.type);
      return state;
  }
  // if (action.type === INCREMENT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }

  // if (action.type === DECREMENT) {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }

  // if (action.type === CHANGE_VALUE) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }

  // return state;
};

function CounterPageReducer({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    // dispatch(); //NOTE: We do not pass in argument so reducer function's action argument is undefined/not used
    dispatch({ type: INCREMENT }); //Plate action object that tells reducer what action to take
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT }); //Plate action object that tells reducer what action to take
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;
    // console.log(value);
    // console.log(typeof value);
    // setValueToAdd(value);
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0); // reset the display
    dispatch({
      type: SUBMIT_VALUE,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPageReducer;
