import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../Assests/HomePageData"; // Import your JSON data
import CategoryCard from "./CategoryCard"; // Import the CategoryCard component


function CategoryPage() {
  const { query } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on query parameter
    const filteredProducts = data.filter((item) =>
      item.search.toLowerCase().includes(query.toLowerCase())
    
    );
    setFilteredData(filteredProducts);
    // console.log(filteredProducts) // Update state with filtered data
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Filtered Products for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
        {filteredData.map((item, i) => (
          <CategoryCard
            key={i}
            image={item.image}
            title={item.title}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
