import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent() {
  return (
    <div className='mt-20 '>
    <Carousel infiniteLoop={true} interval={3000} showStatus={false} showArrows={false} showThumbs={false}>
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
  )
}

export default CarouselComponent
