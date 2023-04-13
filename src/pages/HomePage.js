import HomeTemplate from "../components/HomeTemplate";
import Api from '../Api.js';
import { useEffect, useState } from "react";
import UserInfo from "../components/auth/UserInfo";

const Homepage = () => {
    const [random, setRandom] = useState({id: 1, cocktail: "블랙 러시안", image: {defaultImage}});
	const [error, setError] = useState(null);
	const query = new URLSearchParams(window.location.search).get("token");

	useEffect(() => {
		const setToken = async () => {
			try {
				if (query) {
					localStorage.setItem('token', query);
				}
			} catch(e) {
				setError(e);
			}
		};
		setToken();

		const fetchHome = async () => {
			try {
				const response = await Api.get('/');
				setRandom(response.data.data);
			} catch(e) {
				setError(e);
			}
		};
		fetchHome()
		
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!random) return <div>데이터가 없습니다.</div>

    return (
        <HomeTemplate cocktail = {random} />
    )
}

export default Homepage;