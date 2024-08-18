import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmittal }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    // console.log('I need to tell the parent about some data');
    onSubmittal(
      term
      //NEVER EVER EVER DO THIS
      // document.querySelector('input').value
    );
  };

  const handleChange = event => {
    // console.log(event.target.value);
    // setTerm(event.target.value.replace(/[a-z]/, '')); //do not allow lowercase
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
        {term.length < 3 && 'Term must be more than 3 characters'}
        {/* do not allow less than 3 chaarcters*/}
      </form>
    </div>
  );
}

export default SearchBar;
