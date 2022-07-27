import axios from "axios";
import { useEffect, useState } from "react";


function RecipeModal(props) {
    const [recipe1 , setRecipe] = useState(null);
	const [error, setError] = useState(null);

    useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/cocktails/recipe/1');
				setRecipe(response.data.data);
			} catch(e) {
				setError(e);
			}
		};
		fetchBoard()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!recipe1) return <div>데이터가 없습니다.</div>

    console.log('id', props.key)

    
    const recipe = [{
        cocktail: "블랙러시안",
        content: "보드카와 커피리큐어에 얼음을 넣고 가볍게 젓는다.",
        id: 1,
        materials:['보드카', '커피 리큐어'],
        rate: "보드카 2: 커피리큐어 1"
    }]
    const materials = recipe[0].materials
        const inputItem = []
        for (let j = 0; j<materials.length; j++){
            inputItem.push(
                <div className='in'>{materials[j]}</div>
            )
        }

    return(
        <>
        <div class="name">{recipe[0].cocktail}</div>
        <br />
        <img src = {recipe[0].img} className="recipe-img" />
        <br /><br />
        <div className="material">
                {inputItem}
        </div>
        <br /><br /><br />
        <p>- 비율 -</p>
        <h2>{recipe[0].rate}</h2>
        <br /><br />
        <p>{recipe[0].content}</p>
        

        </>
    )
}

export default RecipeModal;