import HomeTemplate from "../components/HomeTemplate";

const Homepage = () => {

    const recipe = 
        {id:1, 
            cocktail: '마가리타', 
            rate: '1 : 1 : 1', 
            content:'설명입니다.', 
            img : '../img/cocktail.png',
            materials : ['사이다', '콜라', '환타']
        }

    return (
        <HomeTemplate recipe = {recipe}>

        </HomeTemplate>
    )
}

export default Homepage;