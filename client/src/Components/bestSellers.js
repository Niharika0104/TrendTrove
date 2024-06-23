import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function BestSellers() {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/getbestsellers`);
                if (data) {
                    setdata(res.data);
                    setloading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const navigate = useNavigate();
    return (
        <div className='my-10 bg-darkblue text-white py-5 flex flex-col gap-4'>
            <div className='font-extrabold text-center text-2xl'>BEST SELLERS</div>
            <div className='flex flex-wrap justify-center gap-3 w-5/6 mx-auto'>
                {loading && <div>loading </div>}
                {data.length > 0 &&
                    data.map((item, i) => {
                        return (
                            <ProductCard key={i} prop={item} type='bestsellers' />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSellers