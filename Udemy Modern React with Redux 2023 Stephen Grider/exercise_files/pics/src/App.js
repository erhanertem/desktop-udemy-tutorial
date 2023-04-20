import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async term => {
    //term is coming from the child component - searchbar
    // console.log('Do a search with', term);
    const result = await searchImages(term);
    // console.log(result);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmittal={handleSubmit} />
      {/* create a  prop named onSubmit or could be named anything */}
      <ImageList imagesL={images} />
    </div>
  );
}

export default App;
