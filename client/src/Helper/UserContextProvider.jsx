import React, { useState } from 'react';
import UserContext from './Context';
import { useEffect } from 'react';
import axios from 'axios';

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser] =useState(null);
  console.log("user in context",user)
  
  useEffect(() => {
    if(!user){
      axios.get('http://localhost:5000/profile', { withCredentials: true }).then(({data})=>{
       setUser(data)
      })
    }
   
  }, []);


  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, user,setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
