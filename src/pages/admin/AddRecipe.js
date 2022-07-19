import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import "../../scss/admin/AddRecipe.scss"

function AddRecipeTemplate() {

	const dummyRecipe = {
		cocktail : '잭콕',
		alcotype : '위스키',
		product : '잭다니엘',
		materials : ["잭다니엘", "콜라"],
		rate : "2 : 1",
		content : "넣고 쉐이킷",
		cockimg : "!!"
	}

    return (

        <>
        <Header right='common' />
        <p className="add_title">레시피 수정</p>

        <table className="input_box">
			<tr className="cockname_box">
				<th><p>칵테일 이름</p></th>
				<td><input type="text" value={dummyRecipe.cocktail} /></td>
			</tr>
            <tr className="alcotype_box">
				<th><p>술종류</p></th>
				<td><input type="text" value={dummyRecipe.alcotype}/></td>
			</tr>
            <tr className="alconame_box">
				<th><p>(제품명)</p></th>
				<td><input type="text" value={dummyRecipe.product} /></td>
			</tr>
            <tr className="cockinput_box">
				<th><p>재료</p></th>
				<td><input type="text" value={dummyRecipe.materials}/>
				<button id="inputbtn" type="submit">재료추가+</button></td>
                
                
			</tr>
            <tr className="cockrate_box">
				<th><p>비율</p></th>
				<td><input type="text" value={dummyRecipe.rate} /></td>
			</tr>
            <tr className="cockncontent_box">
				<th><p>설명</p></th>
				<td><input type="text" value={dummyRecipe.content}/></td>
			</tr>
			<tr className="cockimg">
				<th><p>칵테일 사진 업로드 +</p></th>
				<td><input type='file' accept='image/*'/></td>
			</tr>
		</table>

        
        </>
    );
};

export default AddRecipeTemplate;