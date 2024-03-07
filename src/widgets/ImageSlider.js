import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const image = 'https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg'
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 // Set autoplay interval in milliseconds
      };

  return (
    <Slider {...settings}>
      <div>
        <img src={image} alt="Image 1"  height={100} width={100}/>
      </div>
      <div>
        <img src={image} alt="Image 2" height={100} width={100}/>
      </div>
      <div>
        <img src={image} alt="Image 3" height={100} width={100}/>
      </div>
      {/* Add more images here */}
    </Slider>
  );
};

export default ImageSlider