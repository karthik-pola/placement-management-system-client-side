
import React, { useContext, useState } from 'react';
import { json } from 'react-router-dom';

// Create contexts for authentication token, user data, and updating user data
const AuthContext = React.createContext();
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

// Custom hook to consume authentication token
export function useAccessToken() {
  return useContext(AuthContext);
}

// Custom hook to consume function for updating authentication token
export function useUpdateAccessToken() {
  return useContext(UserUpdateContext);
}

// Custom hook to consume user data
export function useUserData() {
  return useContext(UserContext);
}

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // Retrieve token from local storage or set to an empty string
  const storedToken = localStorage.getItem('accessToken') || '';
  const storedUserData = JSON.parse(localStorage.getItem('userData')) || null;

  // State for authentication token
  const [accessToken, setAccessToken] = useState(storedToken);

  // State for user data
  const [userData, setUserData] = useState(storedUserData);

  // Function to update both token and user data and store them in local storage
  const updateUserData = async (token, data) => {
    setAccessToken(token);
    setUserData(data);
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  // Render provider components with respective values
  return (
    <AuthContext.Provider value={accessToken}>
      <UserContext.Provider value={userData}>
        <UserUpdateContext.Provider value={updateUserData}>
          {children}
        </UserUpdateContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};



