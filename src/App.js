import './App.css';
import {Routes , Route} from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <Routes>
      <Route path="/" ></Route>
      <Route path="/movie/:id" ></Route>
      <Route path="/plays" ></Route>
   </Routes>
  );
}

export default App;
