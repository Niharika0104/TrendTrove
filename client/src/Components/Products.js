import {React,useState,useEffect} from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import {useParams} from 'react-router-dom'
import axios from 'axios';
function Products() {
  const [data,setdata]=useState([]);
  const [loading,setloading]=useState(true);
  const {product}= useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(process.env.REACT_APP_API_URL,"url");
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/getproducts`, { query: product });
   console.log(res.data)
   if(data){
        setdata(res.data);
        setloading(false);
   }
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  
  }, [product]);
  
  return (
    <>
    <Navbar/>
    <div>
    <div className='  mt-24 flex flex-wrap justify-center w-5/6 mx-auto gap-9'>
          {loading && <div>loading </div>}
    {data.length>0 &&
      data.map((item,i)=>{
        return (
          <>
          <ProductCard key={i} prop={item}/>
          </>
        )
      })
    }
   
    
   
  </div>
    </div>
    </>
  )
}

export default Products
