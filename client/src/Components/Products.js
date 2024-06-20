import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import FilterOptions from './FilterOptions';
import SortOptions from './sortOption';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [discountFilter, setDiscountFilter] = useState(0);
  const { product } = useParams();

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/getproducts`, { query: product });
        if (Array.isArray(res.data)) {
          setData(res.data);
          setFilteredData(res.data); 
          setLoading(false);
        } else {
          console.error('Fetched data is not an array:', res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [product]);

  useEffect(() => {
    if (Array.isArray(data)) {
      filterAndSortData();
    } else {
      console.error('Data is not an array:', data);
    }
  }, [selectedSort, priceRange, discountFilter, data]);

  const filterAndSortData = () => {
    if (!Array.isArray(data)) {
      console.error('Data is not an array in filterAndSortData:', data);
      return;
    }

    let updatedData = [...data];

   
    updatedData = updatedData.filter(item => {
      const price = parsePrice(item.discountprice);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    
    updatedData = updatedData.filter(item => {
      const discount = parseFloat(item.discountpercentage);
      return discount >= discountFilter;
    });

    
    updatedData.sort((a, b) => {
      const priceA = parsePrice(a.discountprice);
      const priceB = parsePrice(b.discountprice);

      switch (selectedSort) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'discount-asc':
          return parseFloat(a.discountpercentage) - parseFloat(b.discountpercentage);
        case 'discount-desc':
          return parseFloat(b.discountpercentage) - parseFloat(a.discountpercentage);
        case 'brand-asc':
          return a.brand.localeCompare(b.brand);
        case 'brand-desc':
          return b.brand.localeCompare(a.brand);
        default:
          return 0;
      }
    });

    setFilteredData(updatedData);
  };

  const parsePrice = (price) => {
    let parsedPrice = price.replace(/[^\d.-]/g, '');
    return parsedPrice ? parseFloat(parsedPrice) : 0;
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 w-5/6 mx-auto">
        <div className="flex justify-between mb-4">
          <FilterOptions 
            onPriceRangeChange={setPriceRange}
            onDiscountFilterChange={setDiscountFilter}
          />
          <SortOptions 
            onSortChange={setSelectedSort} 
            selectedSort={selectedSort} 
          />
        </div>
        <div className="flex flex-wrap justify-center gap-9">
          {loading && <div>Loading...</div>}
          {filteredData.length > 0 && filteredData.map((item, i) => (
            <ProductCard key={i} prop={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
