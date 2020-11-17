import React from 'react';
import ReactDOM from 'react-dom';
import CarouselItem from './carouselItem.jsx'

const Carousel = (props) => {
  console.log(props.images)
  return (
    <div>
      {props.images.map((image, index) => {
        return (
          <CarouselItem image={image}/>
        )
      })}
    </div>
  )
};

export default Carousel;