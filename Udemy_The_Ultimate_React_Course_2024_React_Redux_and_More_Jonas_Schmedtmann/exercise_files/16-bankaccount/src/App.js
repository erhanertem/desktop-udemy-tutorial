import { useReducer } from 'react';
import './styles.css';

/*
6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(currState, action) {
  switch (action.type) {
    case 'newAccount':
      return {
        ...currState,
        isActive: true,
        balance: 500,
      };
    case 'closeAccount':
      if (currState.loan === 0 && currState.balance === 0) {
        return { ...initialState };
      }
      return currState;
    case 'deposit':
      return { ...currState, balance: currState.balance + action.payload };
    case 'withdraw':
      return { ...currState, balance: currState.balance - action.payload };
    case 'takeLoan':
      if (!currState.loan) {
        return {
          ...currState,
          balance: currState.balance + action.payload,
          loan: currState.loan + action.payload,
        };
      }
      return currState;
    case 'payOffLoan':
      if (currState.balance >= currState.loan) {
        return {
          ...currState,
          balance: currState.balance - action.payload,
          loan: 0,
        };
      }
      return currState;
    default:
      throw new Error('Invalid action type: ' + action.type);
  }
}

export default function App() {
  const [currState, dispatch] = useReducer(reducer, initialState);

  const { balance, loan, isActive } = currState;

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {isActive ? balance : 'N/A'}</p>
      <p>Loan: {isActive ? loan : 'N/A'}</p>

      {!isActive && (
        <p>
          <button
            onClick={() => dispatch({ type: 'newAccount' })}
            disabled={false}
          >
            Open account
          </button>
        </p>
      )}
      {isActive && (
        <>
          <p>
            <button
              onClick={() => dispatch({ type: 'deposit', payload: 150 })}
              disabled={false}
            >
              Deposit 150
            </button>
          </p>
          <p>
            <button
              onClick={() => dispatch({ type: 'withdraw', payload: 50 })}
              disabled={false}
            >
              Withdraw 50
            </button>
          </p>
          <p>
            <button
              onClick={() => dispatch({ type: 'takeLoan', payload: 5000 })}
              disabled={false}
            >
              Request a loan of 5000
            </button>
          </p>
          <p>
            <button
              onClick={() => dispatch({ type: 'payOffLoan', payload: 5000 })}
              disabled={false}
            >
              Pay loan
            </button>
          </p>
          <p>
            <button
              onClick={() => dispatch({ type: 'closeAccount' })}
              disabled={false}
            >
              Close account
            </button>
          </p>
        </>
      )}
    </div>
  );
}
