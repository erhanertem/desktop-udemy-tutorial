import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //import useDispatch to call thunk action
import { fetchUsers, addUser } from '../store'; //import thunk to fetch data
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();

  //->Access BIG state objects and desructure its variables
  const { data } = useSelector(state => {
    return state.users; // {data:[], isLoading:false, error:null}
  });

  //->Dispatch current data inside the db using async thunk @ start only!
  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap() //NOTE: returns the promise from the dispatch function properly to continue with then and catch functions.Its buiult into dispatch(fetchUsers()) - see console.log message
      // .then(() => {
      //   // console.log('SUCCESS');
      //   // setIsLoadingUsers(false);
      // })
      .catch(err => {
        // console.log('FAILED');
        setLoadingUsersError(err);
        // setIsLoadingUsers(false);
      })
      .finally(() => {
        setIsLoadingUsers(false);
      }); //thunk requires useDispatch to run...
    // console.log(
    //   '🚀 | file: UsersList.js:24 | useEffect | dispatch:',
    //   dispatch(fetchUsers())
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Eventhandlers
  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch(err => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false)); //thunk requires useDispatch to run ...
  };

  //If loading true display....
  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  //If error fetching display...
  if (loadingUsersError) {
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
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          'Creating User....'
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && 'Error creating user...'}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
