import React, { useState } from 'react';
import UserContext from './Context';
import { useEffect } from 'react';
import axios from 'axios';

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser] =useState({});
  
  useEffect(() => {
    if (!user) {
      axios.get('http://localhost:5000/profile')
        .then(({ data }) => {
          setUser(data);  // Assuming the server returns the user data on successful login
         // Flag to indicate that the context is ready
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
          // Even if there's an error, indicate that the context is ready
        });
    }
  }, [user]); 
  // const  handleLoginSuccess = (userData) => {
  //   console.log('User logged in:', userData);
  //   setUser(userData);
  //   setLoggedIn(true);
  // };

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, user,setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
