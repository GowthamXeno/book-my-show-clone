import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlayPage from "./Pages/PlayPage";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZDEwNzliNGFhY2ViZDkzZWNiZmM5NjViMjUwMiIsInN1YiI6IjY1ZTQ3OTk3OWVlMGVmMDE4NTcxMGVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QTdoZBa_4JstqLmnbc8CrrraXSUaVkKKKfcs_7LRF8";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Accept"] = "Application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlayPage />}></Route>
    </Routes>
  );
}

export default App;
