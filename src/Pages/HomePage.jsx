import { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import axios from "axios";
import PosterSlider from "../Components/PosterComp/PosterSlider";

const HomePage = () => {
  const [recommendedMovies, SetrecommendedMovies] = useState([]);
  const [PremierMovies, SetPremierMovies] = useState([]);
  const [onlineStreamEvents, SetonlineStreamEvents] = useState([]);

  useEffect(() => {
    async function RequestTopRatedMovies() {
      try {
        const getTopRatedMovies = await axios.get("movie/top_rated");
        SetrecommendedMovies(getTopRatedMovies.data.results);
      } catch (err) {
        console.log(err.message);
      }
    }
    RequestTopRatedMovies();
  }, []);

  useEffect(() => {
    async function RequestPopularMovies() {
      try {
        const getPopularMovies = await axios.get("movie/popular");
        SetPremierMovies(getPopularMovies.data.results);
      } catch (err) {
        console.log(err.message);
      }
    }
    RequestPopularMovies();
  }, []);

  useEffect(() => {
    async function RequestUpcommingMovies() {
      try {
        const getUpcommingMovies = await axios.get("movie/upcoming");
        SetonlineStreamEvents(getUpcommingMovies.data.results);
      } catch (err) {
        console.log(err.message);
      }
    }
    RequestUpcommingMovies();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 md:px-12 my-8 bg-gray-700">
        <PosterSlider posters={recommendedMovies} />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
