import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselComponent() {
  return (
    <section className="">
      <Carousel
        infiniteLoop={true}
        interval={1000}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        labels={"Hello"}
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
    </section>
  );
}

export default CarouselComponent;
