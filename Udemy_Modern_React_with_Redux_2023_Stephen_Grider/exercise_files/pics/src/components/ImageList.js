import './ImageList.css';
import ImageShow from '../components/ImageShow';

function ImageList({ imagesL }) {
  // return <div>ImageList: {images.length}</div>;
  const renderedImages = imagesL.map(each => {
    return <ImageShow key={each.id} image={each} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
