import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import SearchList from './pages/SearchListPage';
import HomeTemplate from "./components/HomeTemplate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="searchlist" element={<SearchList />} />

    </Routes>
  );  
};

export default App;
