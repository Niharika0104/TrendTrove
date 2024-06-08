import React from "react";

function CategoryCard(props) {
  return (
    <div className="">
      <img src={props.image} className="h-96 w-72 bg-cover" />
      <div className="mt-3 flex flex-col">
        <h5 className="text-xl">{props.title}</h5>
        <p className="font-normal text-sm">{props.discount}</p>
        <span className="font-light underline mt-3">Explore all dresses</span>
      </div>
    </div>
  );
}

export default CategoryCard;
