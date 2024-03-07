import React, { useContext, useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";
import MovieContext from "../Context/MovieContext";

const MoviePage = () => {
  const { movie } = useContext(MovieContext);
  // const [movie,setMovie] = useState([]);
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommdenedMovies, setRecommendedMovies] = useState([]);

//   useEffect(() => {
//     const requestMovie = async () => {
//       const getMovieData = await axios.get(`/movie/${id}`);
//       setMovie(getMovieData.data);
//     };
//     requestMovie();
//   }, [id]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  const settingCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          initialSlide: 4,
        },
      },
    ],
  };
  //   setTimeout(() => {
  //     console.log(movie);
  //   }, 3000);

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default MoviePage;
