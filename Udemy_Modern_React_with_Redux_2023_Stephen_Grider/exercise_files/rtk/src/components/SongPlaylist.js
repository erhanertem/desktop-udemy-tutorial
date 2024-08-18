import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../data/index';
import { addSong, removeSong } from '../store/index';

function SongPlaylist() {
  const dispatch = useDispatch();
  // Get list of songs
  const songPlaylist = useSelector(state => {
    // console.log(state);
    //IMPORTANT! STATE IS THE BIG STATE. DO NOT MIX WITH THE STATE BEING USED INSIDE THE SLICE REDUCERS!
    return state.songs;
  });

  const handleSongAdd = song => {
    // Add song to list of songs
    // console.log(song);
    // const action = addSong(song); //@ the source of export note that addSong action type requires a payload (song as argumenbt in this function)
    // console.log(action);
    // dispatch(action);
    dispatch(addSong(song));
  };
  const handleSongRemove = song => {
    // Remove song from list of songs
    // const action = removeSong(song);
    // dispatch(action);
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map(song => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
