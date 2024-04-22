import {React,useState,useEffect} from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import {useParams} from 'react-router-dom'
import axios from 'axios';
function Products() {
  const [data,setdata]=useState([]);
  const [loading,setloading]=useState(true);
  const {product}= useParams();
  console.log(product+"front")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:5000/getproducts", { query: product });
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
    <div className=' mt-24 flex flex-wrap justify-center w-5/6 mx-auto gap-10'>
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
    </>
  )
}

export default Products
