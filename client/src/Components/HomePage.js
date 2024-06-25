import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import CategoryCard from './CategoryCard';
import Icons from './Icons';
import CarouselComponent from './CarouselComponent';
import UserContext from '../Helper/Context';

function HomePage() {
  const { setSelectedProducts } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []); 

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products/all'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log('fetched',data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error if needed, e.g., show a toast or error message
    }
  };

  const addToCart = (item) => {
    setSelectedProducts((prev) => [
      ...prev,
      {
        itemId: item._id,
        title: item.title,
        discount: item.discount,
        image: item.image,
        price: item.price,
      }
    ]);
  };

  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <Icons />
      <div>
        <div className="font-extrabold text-center">SHOP BY CATEGORY</div>
        <div className="flex flex-wrap justify-center gap-3 w-5/6 mx-auto">
          {products.map((item) => (
            <div key={item._id} className="cursor-pointer">
              <CategoryCard
                image={item.image}
                title={item.title}
                discount={item.discountprice}
                ratings={item.ratings}
                addtocart={() => addToCart(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
