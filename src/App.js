import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import BoardWrite from "./pages/board/BoardWritePage";
import Map from "./pages/MapPage";
// import RecipeView from "./pages/RecipeViewPage"
import Boards from "./pages/board/BoardListPage"
import BoardDetailPage from "./pages/board/BoardDetailPage";
import LikeList from "./pages/LikeListPage";
import MyBoards from "./pages/board/MyBoardPage";
import MbtiTest from "./pages/MbtiTestPage";
import MbtiResult from "./pages/MbtiResultPage";
import Recipe from "./pages/RecipePage";
import NicknameEdit from "./pages/NickNameEditPage";
import AdminReport from "./pages/admin/AdminReportPage";
import AdminCocktail from "./pages/admin/AdminCocktailPage";
import AddRecipe from "./pages/admin/AddRecipe";
import Suggestion from "./pages/board/SuggestionListPage";
import SuggestionDetail from "./pages/board/SuggestionDetailPage";
import SuggestionWrite from "./pages/board/SuggestionWritePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/cocktails" element={<SearchList />} />
      {/* <Route path="/cocktails/recipe" element={<Recipe />} /> */}
      <Route path="/map" element={<Map />} />
      <Route path="/boards" element={<Boards />}/>
	  <Route path="/board/:id" element={<BoardDetailPage/>}/>
      <Route path="/board/write" element={<BoardWrite />} />
	  <Route path="/likes" element={<LikeList/>}/>
	  <Route path="/myboard" element={<MyBoards/>}/>
	  <Route path="/mbti/test" element={<MbtiTest/>}/>
	  <Route path="/mbti/result" element={<MbtiResult/>}/>
	  {/* <Route path="/recipe" element={<Recipe />} /> */}
	  <Route path="/nickname/edit" element={<NicknameEdit/>}/>
	  <Route path="/admin/report" element={<AdminReport/>}/>
	  <Route path="/admin/cocktail" element={<AdminCocktail/>}/>
    <Route path= "/admin/cocktail/addrecipe" element={<AddRecipe />} />
    <Route path= "/suggestions" element={<Suggestion />} />
    <Route path="/suggestions/:id" element={<SuggestionDetail />} />
    <Route path = "/suggestion" element= {<SuggestionWrite />} />
    </Routes>
  )
};

export default App;