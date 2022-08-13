import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import BoardWrite from "./pages/board/BoardWritePage";
import BoardEdit from "./pages/board/BoardEditPage";
import Map from "./pages/MapPage";
import Boards from "./pages/board/BoardListPage"
import BoardDetailPage from "./pages/board/BoardDetailPage";
import LikeList from "./pages/LikeListPage";
import MyBoards from "./pages/board/MyBoardPage";
import MbtiTest from "./pages/MbtiTestPage";
import MbtiResult from "./pages/MbtiResultPage";
import NicknameEdit from "./pages/NickNameEditPage";
import AdminReport from "./pages/admin/AdminReportPage";
import AdminCocktail from "./pages/admin/AdminCocktailPage";
import AddRecipe from "./pages/admin/AddRecipe";
import ModifyRecipe from "./pages/admin/ModifyRecipe"
import Suggestion from "./pages/board/SuggestionListPage";
import SuggestionDetail from "./pages/board/SuggestionDetailPage";
import SuggestionWrite from "./pages/board/SuggestionWritePage";
import SuggestionModify from "./pages/board/SuggestionModify"

function isLogin() {
	console.log(localStorage.getItem("token")?true:false)
	return localStorage.getItem("token")?true:false;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/cocktails/search" element={<SearchList />} />
      <Route path="/map" element={<Map />} />
      <Route path="/boards" element={<Boards />}/>
	  <Route path="/board/:id" element={<BoardDetailPage/>}/>
      <Route path="/board/write" element={isLogin() ? <BoardWrite /> : <Navigate replace to="/boards"/>} />
	  <Route path="/board/edit/:id" element={isLogin() ? <BoardEdit /> : <Navigate replace to="/boards"/>} />
	  <Route path="/likes" element={isLogin() ? <LikeList/> : <Navigate replace to="/"/>}/>
	  <Route path="/myboard" element={isLogin() ? <MyBoards /> : <Navigate replace to="/"/>}/>
	  <Route path="/mbti/test" element={<MbtiTest/>}/>
	  <Route path="/mbti/result" element={<MbtiResult/>}/>

	  <Route path="/profile/edit" element={isLogin() ? <NicknameEdit /> : <Navigate replace to="/"/>}/>
	  <Route path="/admin/reports/board" element={isLogin() ? <AdminReport /> : <Navigate replace to="/"/>}/>
	  <Route path="/admin/cocktail" element={isLogin() ? <AdminCocktail /> : <Navigate replace to="/"/>}/>
    <Route path= "/admin/cocktail/addrecipe" element={isLogin() ? <AddRecipe /> : <Navigate replace to="/"/>}/>
    <Route path= "/admin/cocktail/modifyrecipe/:id" element={isLogin() ? <ModifyRecipe /> : <Navigate replace to="/"/>}/>

    
    <Route path= "/suggestions" element={<Suggestion />} />
    <Route path="/suggestions/:id" element={<SuggestionDetail />} />
    <Route path="/suggestion" element={isLogin() ? <SuggestionWrite /> : <Navigate replace to="/suggestions"/>} />
    <Route path="/suggestion/:id" element={isLogin() ? <SuggestionModify /> : <Navigate replace to="/suggestions"/>} />
    </Routes>
  )
};

export default App;