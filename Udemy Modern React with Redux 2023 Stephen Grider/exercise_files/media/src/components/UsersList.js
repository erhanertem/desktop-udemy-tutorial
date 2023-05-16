import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //import useDispatch to call thunk action
import { fetchUsers } from '../store'; //import thunk to fetch data
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();

  //->Access BIG state objects and desructure its variables
  const { isLoading, data, error } = useSelector(state => {
    return state.users; // {data:[], isLoading:false, error:null}
  });

  //->Dispatch current data inside the db using async thunk @ start only!
  useEffect(() => {
    dispatch(fetchUsers()); //thunk requires useDispatch to run...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //If loading true display....
  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  //If error fetching display...
  if (error) {
    return <div> Error Fetching Data...</div>;
  }
  //If success fetching display...
  const renderedUsers = data.map(user => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return <div>{renderedUsers}</div>;
}

export default UsersList;
