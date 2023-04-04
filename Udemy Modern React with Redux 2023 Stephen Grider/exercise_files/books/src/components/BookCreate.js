import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  //Update the title input in every key stroke
  const handleChange = e => {
    setTitle(e.target.value);
  };
  //Shoot the title up to parent component eventhandler
  const handleSubmit = e => {
    e.preventDefault();
    onCreate(title);
    //reset the state to clear the form area after submittal
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
