import React, { useState } from "react";
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
	const [img, SetImg] = useState(null)
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

	console.log(recipe)

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
	const imgHandler = (e) => {
        e.preventDefault();
        SetImg(e.target.files[0])
    }
	
	const cancleEvent = () => {
		window.location.replace("/admin/cocktail")
	}

	const submitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData();

		const mat = material ? material.split(',') : recipe[0].materials
		formData.append('id', keyId)
		formData.append('cocktail', cocktail ? cocktail : recipe[0].cocktail)
		for (var i=0; i<mat.length; i++){
			formData.append('materials[]', mat[i])
		}
		formData.append('rate', rate ? rate : recipe[0].rate)
		formData.append('content', content ? content : recipe[0].content)

		formData.append('image',img)
		for (const keyValue of formData) console.log("K",keyValue);
		

		axios.patch('http://43.200.182.67:5000/admin/recipe/',formData,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
			"Content-Type": `multipart/form-data; `,
		  }
		})
        .then((res) => console.log(res));	

		// window.location.replace("/admin/cocktail");
        
    }

    return (
        <>
        <Header right='common' />
        <p className="add_title">레시피 수정</p>

        <table className="input_box">
			<tr className="cockname_box">
				<th><p>칵테일 이름</p></th>
				<td><input type="text" onChange={cocktailHandler} defaultValue={recipe[0].cocktail} /></td>
			</tr>
            <tr className="cockinput_box">
				<th><p>재료</p></th>
				<td><input type="text" onChange={materialHandler} defaultValue={recipe[0].materials}/>
				</td>
			</tr>
            <tr className="cockrate_box">
				<th><p>비율</p></th>
				<td><input type="text" onChange={RateHandler} defaultValue={recipe[0].rate} /></td>
			</tr>
            <tr className="cockncontent_box">
				<th><p>설명</p></th>
				<td><input type="text" onChange={contentHandler} defaultValue={recipe[0].content}/></td>
			</tr>
			<tr className="cockimg">
				<th><p>칵테일 사진 업로드 +</p></th>
				<td><input type='file' multiple="multiple" accept='image/*' onChange={imgHandler}/></td>
			</tr>
		</table>
		<div className="btnzone">
			<button id = "canclebtn" onClick={cancleEvent}>취소</button>
			<button id = "okbtn" onClick={submitHandler}>확인</button>
		</div>
        </>
    );
};

export default AddRecipeTemplate;