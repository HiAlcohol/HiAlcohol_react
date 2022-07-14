import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import BoardWrite from "./pages/board/BoardWritePage";
import Map from "./pages/MapPage";
import Recipe from "./pages/RecipePage"
import Boards from "./pages/board/BoardListPage"
import BoardDetailPage from "./pages/board/BoardDetailPage";
import LikeList from "./pages/LikeListPage";
import MyBoards from "./pages/board/MyBoardPage";
import MbtiTest from "./pages/MbtiTestPage";
import MbtiResult from "./pages/MbtiResultPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/cocktails" element={<SearchList />} />
      {/* <Route path="/recipe" element={<Recipe />} /> */}
      <Route path="/map" element={<Map />} />
      <Route path="/boards" element={<Boards />}/>
	  <Route path="/board/:id" element={<BoardDetailPage/>}/>
      <Route path="/board/write" element={<BoardWrite />} />
	  <Route path="/likes" element={<LikeList/>}/>
	  <Route path="/myboard" element={<MyBoards/>}/>
	  <Route path="/mbti/test" element={<MbtiTest/>}/>
	  <Route path="/mbti/result" element={<MbtiResult/>}/>
    </Routes>
  );  
};

export default App;
