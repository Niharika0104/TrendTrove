import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselComponent() {
  return (
    <div className="">
      <Carousel
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
      >
        <div>
          <img src="Images/carousel-pic-1.webp" />
        </div>
        <div>
          <img src="Images/carousel-pic-2.webp" />
        </div>
        <div>
          <img src="Images/carousel-pic-3.webp" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
