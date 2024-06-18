import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import data from '../Assests/HomePageData';
import CategoryCard from './CategoryCard';
import Icons from './Icons';
import CarouselComponent from './CarouselComponent';

function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar query={query} onSearch={handleSearch} />
      <CarouselComponent />
      <Icons />
      <div>
        <div className="font-extrabold text-center">SHOP BY CATEGORY</div>
        <div className="flex flex-wrap justify-center gap-3 w-5/6 mx-auto">
          {filteredData.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate("/" + item.search)}
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
