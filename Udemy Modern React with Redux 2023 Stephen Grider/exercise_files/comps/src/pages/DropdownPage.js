import { useState } from 'react';
import Dropdown from '../components/Dropdown';

//FOR DROPDOWNMENUS, ITS CONVINIENT TO PRODIDE AN ARRAY OF OBJECTS THAT TAKES IN LABEL AND CORRESPONDING VALUE TO TRIGGER SOMETHING
function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = option => {
    setSelection(option);
  };
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
