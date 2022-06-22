import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import BoardWrite from "./pages/BoardWritePage";
import Map from "./pages/MapPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="searchlist" element={<SearchList />} />

      <Route path="map" element={<Map />} />

      <Route path="board/write" element={<BoardWrite />} />

    </Routes>
  );  
};

export default App;
