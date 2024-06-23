import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ prop }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const navigate = useNavigate();

  return (
    <div className="w-72 h-[400px] rounded-xl shadow-md overflow-hidden mx-auto flex flex-col cursor-pointer relative group">
      <div className="flex-shrink-0 h-full">
        <img
          className="w-full h-full object-cover"
          src={prop.image}
          alt={prop.title}
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 p-1 border- rounded-full ${isFavorite ? ' text-red-600  border-transparent  ' : 'text-gray-900 font-bold border-white bg-gray-300 bg-opacity-30'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-end px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-0 absolute bottom-0 w-full h-28">
        <div className="flex justify-end">
          {/* navigate button on hover */}
          <button
            className="hidden group-hover:block bg-darkblue text-white px-4 py-1 rounded-full"
            onClick={() => navigate(`/product/${prop._id}`)}
          >
            View
          </button>
        </div>
        <div>
          <div className="font-bold text-xl text-gray-900">{prop.brand}</div>
          <p className="text-gray-700 text-base truncate">{prop.title}</p>
        </div>
        <div className="flex items-center mt-2">
          <div className="font-bold text-lg text-gray-900 mr-2">
            {prop.discountprice}
          </div>
          <div className="text-gray-500 line-through mr-2">
            {prop.actualprice}
          </div>
          <div className="text-red-600 font-medium">
            {`(${Number.parseInt(prop.discountpercentage)
              ? prop.discountpercentage
              : "30"}% OFF)`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
