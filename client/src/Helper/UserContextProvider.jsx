import React, { useState } from 'react';
import UserContext from './Context';
import { useEffect } from 'react';
import axios from 'axios';
import useLocalStorageState from 'use-local-storage-state'

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser] =useState(null);
  const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart',{defaultValue:[]})
  
  const [productsInfos, setProductsInfos] = useState([]);
  
  console.log("selected",selectedProducts)
  console.log(selectedProducts.length)
  useEffect(() => {
    if(!user){
      axios.get('http://localhost:5000/profile', { withCredentials: true }).then(({data})=>{
       setUser(data)
      })
    }
   
  }, []);
  
 
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const uniqIds = selectedProducts.map(product => product.itemId);
        const uniqueIds = [...new Set(uniqIds)]; 
        if (uniqueIds.length > 0) {
          const response = await axios.get(`http://localhost:5000/products?ids=${uniqueIds.join(',')}`);
          console.log('Fetched products:', response.data);
          setProductsInfos(response.data); 
          console.log('response',response)
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }};
    fetchProducts();
  }, [selectedProducts]);


  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, user,setUser,selectedProducts,setSelectedProducts , productsInfos,setProductsInfos }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
