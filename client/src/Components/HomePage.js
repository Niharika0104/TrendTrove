import { React, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import data from "../Assests/HomePageData";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import Products from "./Products";
import Icons from "./Icons";
import CarouselComponent from "./CarouselComponent";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <Icons />
      <div>
        <div className="font-extrabold text-center">SHOP BY CATEGORY</div>

        <div className=" flex flex-wrap justify-center gap-3 w-5/6 mx-auto">
          {data.map((item, i) => {
            return (
              <div
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
