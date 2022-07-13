import SearchListTemplate from "../components/SearchTemplate";
import SearchListItem from "../components/SearchListItem";
import Header from "../components/Header";

function SearchListPage () {
    const recipe = [
        {id:1, cocktail: '마가리타', rate: '1 : 1 : 1', content:'설명입니다.', img : '../img/cocktail.png'},
        {id:2, cocktail: '마가리타2', rate: '1 : 1 : 2', content:'설명입니다2.',img : '../img/cocktail.png'}
    ]
    return <div>
            <Header />
            <SearchListTemplate />
            <SearchListItem recipe={recipe}></SearchListItem>
        </div>
        
    
}

export default SearchListPage;

