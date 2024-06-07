import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import data from '../Assests/HomePageData';
import CategoryCard from './CategoryCard';

function WomanProduct() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-4">
        
        
        <div className='flex flex-wrap justify-center gap-6 w-5/6 mx-auto mt-11'>
          {data.map((item, i) => (
            (item.title.includes("Women") || item.title.includes("Beauty") || item.title.includes("Sarees") || item.title.includes("Jewellery") || item.title.includes("Handbags")) && (
              <div
                key={i}
                onClick={() => navigate("/" + item.search)}
                className='cursor-pointer transform hover:scale-105 transition-transform duration-300'
              >
                <CategoryCard
                  image={item.image}
                  title={item.title}
                  discount={item.discount}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomanProduct;
