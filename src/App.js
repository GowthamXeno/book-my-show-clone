import './App.css';
import {Routes , Route} from "react-router-dom";

import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import PlayPage from './Pages/PlayPage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
