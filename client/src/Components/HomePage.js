import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import data from '../Assests/HomePageData';
import CategoryCard from './CategoryCard';
import Icons from './Icons';
import CarouselComponent from './CarouselComponent';
import { useEffect } from 'react';

function HomePage() {
  const navigate = useNavigate();


 

  return (
    <div>
      <Navbar  />
      <CarouselComponent />
      <Icons />
      <div>
        <div className="font-extrabold text-center">SHOP BY CATEGORY</div>
        <div className="flex flex-wrap justify-center gap-3 w-5/6 mx-auto">

          {data.map((item, i) => (

            <div
              key={i}
              onClick={() => {
                navigate("/" + item.search);
              }}
              className="cursor-pointer"
            >
              <CategoryCard
                image={item.image}
                title={item.title}
                discount={item.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
