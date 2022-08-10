import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from '../../components/Header'
import "../../scss/admin/AddRecipe.scss"

function AddRecipeTemplate() {
	const [cocktail, SetCocktail] = useState("")
	const [rate, SetRate] = useState("")
    const [content, SetContent] = useState("")
	const [material, SetMaterial] = useState("")
	const [materials, SetMaterials] = useState("")

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

    const submitHandler = (e) => {
        e.preventDefault();

        let body = {
            cocktail : cocktail,
 			materials: material.split(', '),
  			rate: rate,
  			content: content
        };
		console.log("??", body)
    
        // axios.post('http://43.200.182.67:5000/admin/recipe', body,
        // {headers: {
		// 	Authorization: `Bearer ${localStorage.getItem("token")}`,
		//   }
		// })
        // .then((res) => console.log(res));
		// window.location.replace("/admin/cocktail");
        
    }

    return (

        <>
        <Header right='common' />
        <p className="add_title">레시피 추가</p>

        <table className="input_box">
			<tr className="cockname_box">
				<th><p>칵테일 이름</p></th>
				<td><input type="text"  onChange={cocktailHandler}/></td>
			</tr>
            <tr className="alcotype_box">
				<th><p>술종류</p></th>
				<td><input type="text" /></td>
			</tr>
            <tr className="alconame_box">
				<th><p>(제품명)</p></th>
				<td><input type="text"  /></td>
			</tr>
            <tr className="cockinput_box">
				<th><p>재료</p></th>
				<td><input type="text" onChange={materialHandler}/>

				{/* <button id="inputbtn" type="submit" onClick={addmaterial(material)}>재료추가+</button> */}
				</td>
				
			</tr>
			<tr>
			<div className="matzone"></div>
			</tr>
            <tr className="cockrate_box">
				<th><p>비율</p></th>
				<td><input type="text"  onChange={RateHandler}/></td>
			</tr>
            <tr className="cockncontent_box">
				<th><p>설명</p></th>
				<td><input type="text" onChange={contentHandler}/></td>
			</tr>
			<tr className="cockimg">
				<th><p>칵테일 사진 업로드 +</p></th>
				<td><input type='file' accept='image/*'/></td>
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