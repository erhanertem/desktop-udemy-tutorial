import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
	const [removeAlbum, results] = useRemoveAlbumMutation();

	const handleRemoveAlbum = () => {
		removeAlbum(album);
	};

	const header = (
		<>
			<Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
				<GoTrashcan />
			</Button>
			{album.title}
		</>
	);

	return (
		<div>
			<ExpandablePanel key={album.id} header={header}>
				<PhotosList album={album} />
			</ExpandablePanel>
		</div>
	);
}

export default AlbumsListItem;
