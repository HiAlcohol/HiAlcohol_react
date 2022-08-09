import axios from "axios";
import { useEffect, useState } from "react";


function RecipeModal(props) {
    const [recipe , setRecipe] = useState(null);
	const [error, setError] = useState(null);
    let keyId = props.keyID
    useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://3.36.153.6/cocktails/recipe/'+ keyId );
				setRecipe(response.data.data);
			} catch(e) {
				setError(e);
			}
		};
		fetchBoard()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!recipe) return <div>데이터가 없습니다.</div>

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