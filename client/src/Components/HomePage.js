import { React } from "react";
import { useNavigate } from "react-router-dom";
import BannerText from "./BannerText";
import CarouselComponent from "./CarouselComponent";
import CategorySection from "./CategorySection";
import Icons from "./Icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <BannerText />
      <Icons />
      <CategorySection />
      <Footer />
    </div>
  );
}

export default HomePage;
