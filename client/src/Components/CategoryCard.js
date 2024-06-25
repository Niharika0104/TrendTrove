import React from 'react';

function CategoryCard({ image, title, discount, ratings, addtocart }) {
  return (
    <div className="mx-5 my-2 flex flex-col">
      <div>
        <img
          src={image}
          className="h-52 w-40 object-cover rounded-lg"
          alt={title}
        />
      </div>
      <div className="mt-2">
        <p className="font-semibold font-xl">{title}</p>
        <p className="text-md text-black">Price:${discount}</p>
        <p className="text-md text-black">Rating : {ratings}</p>

        <p></p>
      </div>
     
        <button
          onClick={addtocart}
          className="bg-green-400 rounded-full py-1 px-4 text-green-900 transition duration-300 hover:bg-green-300 font-semibold"
        >
          Add
        </button>
      
    </div>
  );
}

export default CategoryCard;
