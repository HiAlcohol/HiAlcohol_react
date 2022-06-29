import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import BoardWrite from "./pages/BoardWritePage";
import Map from "./pages/MapPage";
import Recipe from "./pages/RecipePage"
import Boards from "./pages/BoardListPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/searchlist" element={<SearchList />} />
      <Route path="/recipe" element={<Recipe />} />

      <Route path="/map" element={<Map />} />
      <Route path="/boards" element={<Boards />}/>
      <Route path="/board/write" element={<BoardWrite />} />

    </Routes>
  );  
};

export default App;
