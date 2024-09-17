import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomer } from './customerSlice';

function Customer() {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');

  const dispatch = useDispatch();

  function handleClick() {
    // GUARD CLAUSE
    if (!fullName || !nationalId) return;
    // #5. UPDATE STORE FEATURE VIA ACTION CREATOR FUNC
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
