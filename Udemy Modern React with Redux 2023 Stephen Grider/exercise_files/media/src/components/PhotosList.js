import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';

function PhotosList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  // console.log(
  //   '🚀 | file: PhotosList.js:6 | PhotosList | useFetchPhotosQuery(album):',
  //   useFetchPhotosQuery(album)
  // );
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();
  // console.log(
  //   '🚀 | file: PhotosList.js:7 | PhotosList | addPhotoResults:',
  //   addPhotoResults
  // );

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (isError) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map(photo => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          +Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
