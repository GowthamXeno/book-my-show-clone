import { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import axios from "axios";
import PosterSlider from "../Components/PosterComp/PosterSlider";
import HeroCarousel from "../Components/HeroCarousel/HeroCarouselComp";
import EndlessEntertainment from "../Components/Entertainment/EndlessEntertainment";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCardSlider";
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
      <HeroCarousel />


      <div className="mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          posters={recommendedMovies}
          isDark={false}
          title="Recommended Movies"
          subtitle="List of recommonded movies"
        />
      </div>

      <EndlessEntertainment />

      <EntertainmentCardSlider />

      <div>
        <div className="mx-auto px-4 md:px-12 my-8 bg-premier-800">
          <div>
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={PremierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
