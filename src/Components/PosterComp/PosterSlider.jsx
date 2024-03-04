import React from "react";
import Slider from "react-slick";
import Poster from "./Poster";
const PosterSlider = (props) => {
    const {posters} = props;
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <>
      <Slider {...setting}>
        {posters.map((each,index)=>{
        return <Poster {...each} key={index}/>
        })}
      </Slider>
    </>
  );
};

export default PosterSlider;
