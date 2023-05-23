import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  // console.log('😊', useFetchAlbumsQuery(user));
  // console.log(data, isError, isLoading);

  // eslint-disable-next-line
  const [addAlbum, results] = useAddAlbumMutation();
  // console.log(useAddAlbumMutation());
  // console.log(results);
  //NOTE: We are not interested in the result, as we are not intending to add this returned result into the list but rather choose to refrresh the list by intiiating a refetching of the list.

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (isError) {
    content = <div>Error Loading albums..</div>;
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
