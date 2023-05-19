import { useEffect } from 'react';
import { useSelector } from 'react-redux'; //import useDispatch to call thunk action
import { fetchUsers, addUser } from '../store'; //import thunk to fetch data
import { useThunk } from '../hooks/use-thunk';
import Button from './Button';
import Skeleton from './Skeleton';
import UsersListItem from './UsersListItem';

function UsersList() {
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  // const dispatch = useDispatch();

  //->Access BIG state objects and desructure its variables
  const { data } = useSelector(state => {
    return state.users; // {data:[], isLoading:false, error:null}
  });

  //->Dispatch current data inside the db using async thunk @ start only!
  useEffect(() => {
    // setIsLoadingUsers(true);
    // dispatch(fetchUsers())
    //   .unwrap() //NOTE: returns the promise from the dispatch function properly to continue with then and catch functions.Its buiult into dispatch(fetchUsers()) - see console.log message
    //   // .then(() => {
    //   //   // console.log('SUCCESS');
    //   //   // setIsLoadingUsers(false);
    //   // })
    //   .catch(err => {
    //     // console.log('FAILED');
    //     setLoadingUsersError(err);
    //     // setIsLoadingUsers(false);
    //   })
    //   .finally(() => {
    //     setIsLoadingUsers(false);
    //   }); //thunk requires useDispatch to run...
    // // console.log(
    // //   '🚀 | file: UsersList.js:24 | useEffect | dispatch:',
    // //   dispatch(fetchUsers())
    // // );
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    doFetchUsers();
  }, [doFetchUsers]); //For functions to be called inside useEffect, array needs to include this function but also causes to repeat itself to inifinity. In order to make it call once, we have to wrap the actuall function with a useCallBack() hook

  //Eventhandlers
  const handleUserAdd = () => {
    // setIsCreatingUser(true);
    // dispatch(addUser())
    //   .unwrap()
    //   .catch(err => setCreatingUserError(err))
    //   .finally(() => setIsCreatingUser(false)); //thunk requires useDispatch to run ...
    doCreateUser();
  };

  let content;
  //If loading true display....
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  }
  //If error fetching display...
  else if (loadingUsersError) {
    content = <div> Error Fetching Data...</div>;
  }
  //If success fetching display...
  else {
    content = data.map(user => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {/* {isCreatingUser ? (
          'Creating User....'
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
          )} */}
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
