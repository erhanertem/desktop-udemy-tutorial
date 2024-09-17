// NON-REDUX PART****************************

// #1. SET INITIAL STATE OBJECT
const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

// #2. SETUP REDUCER FUNCTION - ACTION CREATORS
// NOTE: currState is set to initialState object directly unlike useREducer setup
export default function customerReducer(currState = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...currState,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return { ...currState, fullName: action.payload.fullName };
    default:
      return currState;
    // NOTE: default should return currState instead of throwing error as in useReducer
    // throw new Error('Unknown action type specified');
  }
}

// #3. SETUP ACTION CREATOR FUNCTIONS
// NOTE: These functions will not be imported by the store but the components that would need to create the actions
export function createCustomer(fullName, nationalID) {
  return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
}
export function updateName(fullName) {
  return { type: 'customer/updateName', payload: { fullName } };
}
