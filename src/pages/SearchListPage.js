import SearchListTemplate from "../components/SearchTemplate";
import SearchListItem from "../components/SearchListItem";
import Header from "../components/Header";

function SearchListPage () {
    const recipe = [
        {id:1, 
            cocktail: '마가리타', 
            rate: '1 : 1 : 1', 
            content:'설명입니다.', 
            img : '../img/cocktail.png',
            materials : ['사이다', '콜라', '환타']
        },
        {id:1, 
            cocktail: '마가리타2', 
            rate: '1 : 1 : 2', 
            content:'설명입니다.2', 
            img : '../img/cocktail.png',
            materials : ['사이다2', '콜라2', '환타2']
        },
            ]
    return <div>
            <Header />
            <SearchListTemplate />
            <SearchListItem recipe={recipe}></SearchListItem>
        </div>
        
    
}

export default SearchListPage;

