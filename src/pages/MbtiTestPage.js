import React, { useState } from 'react';
import Header from "../components/Header";
import question from '../question.json'
import '../scss/MbtiTest.scss'
import { useCookies } from "react-cookie";

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
	const [sheet, setSheet] = useState('');
	
	const onIncrease = (params, e) => {
		setNumber(String(Number(number) + 1))
		console.log(number)
		setSheet(String(sheet + params))
		console.log('sheet:', sheet)

		if (number === '12') {
			window.location.href = "/mbti/result?selected=" + String(sheet + params)
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
			<div className='answer' onClick={(e) => {onIncrease('1', e)}}>
				{question[number].answer1}
			</div>
			<div className='answer' onClick={(e) => {onIncrease('2', e)}}>
				{question[number].answer2}
			</div>
		</div>
	</>
}

export default MbtiTest;