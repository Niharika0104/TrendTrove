import { React } from "react";
import { useNavigate } from "react-router-dom";

import CarouselComponent from "./CarouselComponent";
import CategoryCard from "./CategoryCard";
import Icons from "./Icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerText from "./BannerText";
import CategorySection from "./CategorySection";
function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <CarouselComponent />
      <BannerText />
      <Icons />
      <CategorySection />
      <Footer />
    </main>
  );
}

// #
export default HomePage;
