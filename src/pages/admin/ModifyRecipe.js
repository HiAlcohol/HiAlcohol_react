import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import "../../scss/admin/AddRecipe.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect} from "react";

function AddRecipeTemplate() {
	const [cocktail, SetCocktail] = useState("")
	const [rate, SetRate] = useState("")
    const [content, SetContent] = useState("")
	const [material, SetMaterial] = useState("")
	const [modi, setModi] = useState(null);
	const params = useParams();

	const [recipe , setRecipe] = useState(null);
	const [error, setError] = useState(null);
    let keyId = params.id
    useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://43.200.182.67:5000/cocktails/recipe/'+ keyId );
				setRecipe(response.data.data);
			} catch(e) {
				setError(e);
			}
		};
		fetchBoard()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!recipe) return <div>데이터가 없습니다.</div>

    const cocktailHandler = (e) => {
        e.preventDefault();
        SetCocktail(e.target.value);
    }
	const RateHandler = (e) => {
        e.preventDefault();
        SetRate(e.target.value);
    }
    const contentHandler = (e) => {
        e.preventDefault();
        SetContent(e.target.value);
    }
	const materialHandler = (e) => {
        e.preventDefault();
        SetMaterial(e.target.value)
    }
	const cancleEvent = () => {
		window.location.replace("/admin/cocktail")
	}


	const modify = async () => {
		let body = {
            cocktail : cocktail,
 			materials: material.split(','),
  			rate: rate,
  			content: content
        };
		console.log("??", body)

		try {
			const response = await axios.patch('http://43.200.182.67:5000/admin/recipe/' + params.id);
			setModi(response.data.data);
			console.log(response.data.data)
		} catch(e) {
			setError(e);
		}
	};
	console.log('l',modi)

    return (

        <>
        <Header right='common' />
        <p className="add_title">레시피 수정</p>

        <table className="input_box">
			<tr className="cockname_box">
				<th><p>칵테일 이름</p></th>
				<td><input type="text" onchange={cocktailHandler} value={recipe[0].cocktail} /></td>
			</tr>
            <tr className="alcotype_box">
				<th><p>술종류</p></th>
				<td><input type="text"  value={recipe[0].alcotype}/></td>
			</tr>
            <tr className="alconame_box">
				<th><p>(제품명)</p></th>
				<td><input type="text" value={recipe[0].product} /></td>
			</tr>
            <tr className="cockinput_box">
				<th><p>재료</p></th>
				<td><input type="text" onchange={materialHandler} value={recipe[0].materials}/>
				</td>
				
			</tr>
            <tr className="cockrate_box">
				<th><p>비율</p></th>
				<td><input type="text" onchange={RateHandler} value={recipe[0].rate} /></td>
			</tr>
            <tr className="cockncontent_box">
				<th><p>설명</p></th>
				<td><input type="text" onchange={contentHandler} value={recipe[0].content}/></td>
			</tr>
			<tr className="cockimg">
				<th><p>칵테일 사진 업로드 +</p></th>
				<td><input type='file' accept='image/*'/></td>
			</tr>
		</table>
		<div className="btnzone">
			<button id = "canclebtn" onClick={cancleEvent}>취소</button>
			<button id = "okbtn" onClick={modify}>확인</button>
		</div>

        
        </>
    );
};

export default AddRecipeTemplate;