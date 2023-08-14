"use client";
// UserContext.js

import React, { createContext, useEffect, useState } from 'react';
import { ethers } from "ethers";
import { Web3Provider } from "ethers/providers";
// Create the context
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [isWallet, setIsWallet] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    // This effect runs after the component is mounted on the client side
    const checkWalletAvailableAndConnect = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const web3Provider = new Web3Provider(window.ethereum);
          setProvider(web3Provider);

          setIsWallet(true);
          setIsWalletConnected(
            window.ethereum.selectedAddress !== null &&
            window.ethereum.selectedAddress !== ""
          );
        } catch (error) {
          console.error("Error initializing Web3Provider:", error);
        }
      }
    };

    // Delay the execution to ensure the component is fully mounted
    const timer = setTimeout(checkWalletAvailableAndConnect, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);


  const connectWallet = async () => {
    try {
      await provider.send("eth_requestAccounts", []);
      setIsConnected(true);
    } catch (err) {
      // handle error
    }
    checkWalletAvailableAndConnect();
  };

  const updateUserDetails = (newValue) => {
    setUserDetails(newValue);
  };

  const updateLogin = (newValue) => {
    setIsLogin(newValue);
  };

  const updateWallet = (newValue) => {
    setIsWallet(newValue);
  };

  const updateWalletConnected = (newValue) => {
    setIsWalletConnected(newValue);
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        updateUserDetails,
        isLogin,
        updateLogin,
        isWallet,
        isWalletConnected,
        updateWallet,
        updateWalletConnected,
        connectWallet,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
