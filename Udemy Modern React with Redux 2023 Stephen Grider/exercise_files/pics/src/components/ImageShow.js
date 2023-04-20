function ImageShow({ image }) {
  // console.log(image);
  // return <div>{image.id}</div>;
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
