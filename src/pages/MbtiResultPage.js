import Header from "../components/Header";
import result from '../result.json'
import cocktail from '../img/cocktail.png'
import '../scss/MbtiResult.scss'
import { Link } from 'react-router-dom';

function MbtiResult() {
	const mbti = 'estj'
	const mbti_result = result[mbti]
	console.log('mbti', mbti_result.description)
	const restart = () => {
		window.location.href = "/mbti/test"
	}
	const copy = () => {

	}
	return <>
	<Header right='common'></Header>
	<div id="capture">
		<div className="result">
			<p>당신에게 어울리는 술은</p>
			<br/>
			<img src = {cocktail} className='cockimg' />
			<br/>
			<p>마가리타 {'>'}</p>
			<div className="desc">
				<ul>
					{mbti_result.description.map(desc => (<li>{desc}</li>))}
				</ul>
			</div>
		</div>
		<div className="match">
			<div>
				최고의 궁합
				<br/>
				{'<'}{mbti_result.best}{'>'}
			</div>
			<div>
				최악의 궁합
				<br/>
				{'<'}{mbti_result.worst}{'>'}
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