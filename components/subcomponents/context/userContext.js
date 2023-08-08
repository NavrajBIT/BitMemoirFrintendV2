// UserContext.js

import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component that will wrap your app and provide the state and any necessary functions
export const UserContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(initialState);

  // Define any functions to update the state if needed
  const updateState = (newValue) => {
    setMyState(newValue);
  };

  return (
    <UserContext.Provider value={{ myState, updateState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
