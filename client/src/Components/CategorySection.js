import React from "react";
import data from "../Assests/HomePageData";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import Button from "./UI/Button";

function CategorySection() {
  const navigate = useNavigate();
  return (
    <section className="container p-20 w-full h-full">
      <div className="flex flex-col md:flex-row gap-y-5 justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <img className="h-6 hidden md:block" src="icons/dots.png" alt="" />
            <h1 className="text-4xl font-medium">Explore from categories</h1>
          </div>
          <p className="tracking-wider">
            Pick items from our wide range of categories and collections .
          </p>
        </div>
        <Button text="See All Category" />
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 justify-center mt-11 gap-2 w-5/6 mx-auto">
        {data.slice(0, 3).map((item, i) => (
          <article
            onClick={() => {
              navigate("/" + item.search);
            }}
            className="cursor-pointer"
          >
            <CategoryCard
              image={item.image}
              title={item.title}
              discount={item.discount}
              key={i}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
