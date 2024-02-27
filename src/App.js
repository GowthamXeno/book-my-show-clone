import './App.css';
import {Routes , Route} from "react-router-dom"




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
