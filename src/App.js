import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import BoardWrite from "./pages/BoardWritePage";
import Map from "./pages/MapPage";
import Recipe from "./pages/RecipePage"
import Boards from "./pages/BoardListPage"
import BoardDetailPage from "./pages/BoardDetailPage";
import LikeList from "./pages/LikeListPage";
import MyBoards from "./pages/MyBoardPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/searchlist" element={<SearchList />} />
      <Route path="/recipe" element={<Recipe />} />

      <Route path="/map" element={<Map />} />
      <Route path="/boards" element={<Boards />}/>
	  <Route path="/board/:id" element={<BoardDetailPage/>}/>
      <Route path="/board/write" element={<BoardWrite />} />
	  <Route path="/likes" element={<LikeList/>}/>
	  <Route path="/myboard" element={<MyBoards/>}/>
    </Routes>
  );  
};

export default App;
