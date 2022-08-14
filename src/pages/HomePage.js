import HomeTemplate from "../components/HomeTemplate";
import axios from "axios";
import { useEffect, useState } from "react";
import UserInfo from "../components/auth/UserInfo";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

const Homepage = () => {
    const [random, setRandom] = useState(null);
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
				const response = await axios.get('http://43.200.182.67:5000/');
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