// UserContext.js

import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component that will wrap your app and provide the state and any necessary functions
export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  // Define any functions to update the state if needed
  const updateUserDetails = (newValue) => {
    setUserDetails(newValue);
  };

  return (
    <UserContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
