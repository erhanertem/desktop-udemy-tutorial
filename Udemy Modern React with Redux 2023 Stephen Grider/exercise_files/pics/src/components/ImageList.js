import './ImageList.css';
import ImageShow from '../components/ImageShow';

function ImageList({ images }) {
  // return <div>ImageList: {images.length}</div>;
  const renderedImages = images.map(each => {
    return <ImageShow key={each.id} image={each} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
