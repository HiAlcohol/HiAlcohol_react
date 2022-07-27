import HomeTemplate from "../components/HomeTemplate";
import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [random, setRandom] = useState(null);
	const [recipe, setRecipe] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {

		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/');
				setRandom(response.data.data);
			} catch(e) {
				setError(e);
			}
		};
		fetchBoard()
		
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!random) return <div>데이터가 없습니다.</div>

    return (
        <HomeTemplate cocktail = {random} />
    )
}

export default Homepage;