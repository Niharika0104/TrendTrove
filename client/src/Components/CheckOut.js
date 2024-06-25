import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../Helper/Context';
import axios from 'axios';

const CheckOut = () => {
  const { selectedProducts  ,setSelectedProducts ,productsInfos} = useContext(UserContext);
 
  function moreOfThisProduct(id) {
   
    setSelectedProducts((prev) => [...prev,{itemId:id}]);
  }
  
  function lessOfThisProduct(id) {
    const pos = selectedProducts.findIndex(product => product.itemId === id);
    console.log('pos', pos);
  
    if (pos !== -1) {
      setSelectedProducts(prev => prev.filter((_, index) => index !== pos));
    }
  }
  

  
  return (
    <div className="p-5 max-w-4xl mx-auto">
      {!productsInfos.length && (
        <div className="text-center text-gray-600 font-semibold">No products in your shopping cart</div>
      )}
      {productsInfos.length > 0 && productsInfos.map(productInfo => {
        const amount = selectedProducts.filter(product => product.itemId === productInfo._id).length;
        if (amount === 0) return null;
        return (
          <div className="flex mb-5 items-center bg-white shadow-lg rounded-xl p-4" key={productInfo._id}>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0" >
              <img className="w-24 h-24 object-fit rounded-lg" src={productInfo.image} alt={productInfo.title} />
            </div>
            <div className="pl-4 flex-grow">
              <h3 className="font-bold text-lg mb-1">{productInfo.title}</h3>
              <p className="text-sm leading-4 font-bold text-black mb-1">Price: ${productInfo.discountprice}</p>
              <p className="text-sm leading-4 font-bold text-black mb-1">Ratings : {productInfo.ratings}</p>
              <p className="text-sm leading-4 font-bold text-black mb-1">Brand : {productInfo.brand}</p>
              <p className="text-sm leading-4 font-bold text-black mb-1">Actual Price : {productInfo.actualprice}</p>
              <div className="flex items-center justify-end gap-1">
                <button onClick={() => lessOfThisProduct(productInfo._id)} className="border bg-green-500 px-2 text-sm py-1 rounded-lg text-white transition duration-300 hover:bg-red-600">-</button>
                <span className='text-xl'>{selectedProducts.filter(product => product.itemId === productInfo._id).length} </span>
                <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-green-500 px-2 text-sm py-1  rounded-lg text-white transition duration-300 hover:bg-green-600">+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;

// {selectedProducts.filter(product => product.itemId === productInfo._id).length}
// 