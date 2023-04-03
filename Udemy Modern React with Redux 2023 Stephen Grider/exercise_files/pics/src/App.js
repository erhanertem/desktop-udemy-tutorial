import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = term => {
    //term is coming from the child component - searchbar
    console.log('Do a search with', term);
  };

  return (
    <div>
      <SearchBar onSubmittal={handleSubmit} />
      {/* create a  prop named onSubmit or could be named anything */}
    </div>
  );
}

export default App;
