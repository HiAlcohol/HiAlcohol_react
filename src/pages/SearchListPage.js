import SearchListTemplate from "../components/SearchTemplate";
import SearchListItem from "../components/SearchListItem";
import Header from "../components/Header";

function SearchListPage () {
    const params = new URLSearchParams(window.location.search);
    let key = params.get("keyword");
    
    return <div>
            <Header right='common'></Header>
            <SearchListTemplate />
            <SearchListItem keyword={key} type='search'/>
            
        </div>
        
    
}

export default SearchListPage;

