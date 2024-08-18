import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //BACK-FORWARD BROWSER BUTTON NAVIGATION PER HISTORY STACK
  useEffect(
    () => {
      //IMPORTANT!! EVENHANDLER FOR BACK-FORWARD CLICKS ON THE BROWSER which got added with pushstate not user typed url IN THE BROWSER HISTORY STACK (no refresh happens and states are kept in tact while switching between different routes)
      const handler = () => {
        setCurrentPath(window.location.pathname);
      };
      window.addEventListener('popstate', handler);
      //CLEANUP EVENTHANDLER WHEN DONE
      return () => {
        window.removeEventHandler('popstate', handler);
      };
    },
    [] //we call it one time
  );

  //PROGRAMMATIC NAVIGATION
  const navigate = to => {
    window.history.pushState({}, '', to); //push state do not trigger refresh so we have to set the currentpath manually.
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {/* <div>
        <button onClick={() => navigate('/accordion')}>Go to accordion</button>
        <button onClick={() => navigate('/dropdown')}>Go to dropdown</button>
      </div>
      {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
