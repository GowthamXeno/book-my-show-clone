import React, { useEffect, useState } from "react";

import axios from "axios";

import PosterSlider from "../Components/PosterComp/PosterSlider";
import Slider from "react-slick";
import StreamPoster from "../Components/PosterComp/StreamPoster";
import { NextArrow, PrevArrow } from "../Components/HeroCarousel/ArrowComp";
import DefaultLayout from "../Layouts/DefaultLayout";

const StreamPage = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommdenedMovies, setRecommendedMovies] = useState([]);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`movie/now_playing?region=IN`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, []);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `movie/now_playing`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, []);
  const settingStream = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      {/* <div className="flex flex-col items-start sm:ml-3 my-2 w-1/2"></div> */}
      <div className="overflow-hidden mt-2">
        <Slider {...settingStream}>
          {recommdenedMovies.map((each, index) => {
            return <StreamPoster {...each} key={index} />;
          })}
        </Slider>
      </div>

      <div className="my-12 px-4 lg-ml-20 lg:w-2/1">
        <div className="my-8">
          <hr />
        </div>

        {/* Recommended Sliders  */}
        <div className="my-8 overflow-hidden">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommdenedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="overflow-hidden mb-16">
          <PosterSlider
            config={settings}
            title="Upcoming Releases"
            posters={similarMovies}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(StreamPage);
