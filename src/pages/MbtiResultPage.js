import Header from "../components/Header";
import result from '../result.json'
import cocktail from '../img/cocktail.png'
import '../scss/MbtiResult.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function MbtiResult() {
	const [mbti, setMbti] = useState(null);
	const [error, setError] = useState(null);
	const params = new URLSearchParams(window.location.search).get("selected");

	const restart = () => {
		window.location.href = "/mbti/test"
	}
	const copy = () => {

	}
	useEffect(() => {
		const fetchMbti = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/mbti?result=' + params)
				setMbti(response.data.data.mbti)
			} catch (e) {
				setError(e)
			}
		}
		fetchMbti();
	}, [])

	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!mbti) return <div>데이터가 없습니다.</div>
	return <>
	<Header right='common'></Header>
	<div id="capture">
		<div className="result">
			<p>당신에게 어울리는 술은</p>
			<br/>
			<img src = {cocktail} className='cockimg' />
			<br/>
			<p>{result[mbti].cocktail} {'>'}</p>
			<div className="desc">
				<ul>
					{result[mbti].description.map(desc => (<li>{desc}</li>))}
				</ul>
			</div>
		</div>
		<div className="match">
			<div>
				최고의 궁합
				<br/>
				{'<'}{result[mbti].best}{'>'}
			</div>
			<div>
				최악의 궁합
				<br/>
				{'<'}{result[mbti].worst}{'>'}
			</div>
		</div>
	</div>
	<button className="restart" onClick={restart}>처음으로</button>
	<br/>
	<button className="copy" onClick={copy}>링크복사</button>
	<div className="recommend">
		더 많은 술을 추천받고 싶다면?
		<br/>
		술 조합 추천 웹사이트 <Link to='/' className='logo'>Hi Alcohol</Link>
	</div>
	</>
}

export default MbtiResult;