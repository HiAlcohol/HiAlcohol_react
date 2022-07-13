import React, { useState } from 'react';
import Header from "../components/Header";
import question from '../question.json'
import '../scss/MbtiTest.scss'

function progress(number) {
	var pro_bar = String(number * 8.3) + '%'
	console.log(pro_bar)
	return {
		width: pro_bar,
	}
}

function MbtiTest() {
	console.log(question)
	const [number, setNumber] = useState(1);
	console.log('number', number)
	const onIncrease = () => {
		setNumber(String(Number(number) + 1))
		if (number === '12') {
			window.location.href = "/mbti/result"
		}
	}
	return <>
		<Header right='common'></Header>
		<div className='progress_bar'>
			<div className='progress' style={progress(number)}></div>
		</div>
		<div className='number'>{number}/12</div>
		<div className='qna'>
			<p id='q'>Q{number}. {question[number].question}</p>
			<div className='answer' onClick={onIncrease}>
				{question[number].answer1}
			</div>
			<div className='answer' onClick={onIncrease}>
				{question[number].answer2}
			</div>
		</div>
	</>
}

export default MbtiTest;