import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlayPage from "./Pages/PlayPage";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

function App() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=ta&page=1&region=ISO-3166-1%20IN";
  const YOUR_API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZDEwNzliNGFhY2ViZDkzZWNiZmM5NjViMjUwMiIsInN1YiI6IjY1ZTQ3OTk3OWVlMGVmMDE4NTcxMGVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QTdoZBa_4JstqLmnbc8CrrraXSUaVkKKKfcs_7LRF8";
  useEffect(() => {
    const GetData = async () => {
      console.log("Triggered!!!");
      try {
        const Details = await axios.get(url, {
          headers: {
            Accept: "Application/json",
            Authorization: `Bearer ${YOUR_API_KEY}`,
          },
        });
        console.log(Details.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    GetData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlayPage />}></Route>
    </Routes>
  );
}

export default App;
