import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import "../../scss/admin/AddRecipe.scss"

function AddRecipeTemplate() {

    return (

        <>
        <Header right='common' />
        <p className="add_title">레시피 수정</p>

        <table className="input_box">
			<tr className="cockname_box">
				<th><p>칵테일 이름</p></th>
				<td><input type="text" /></td>
			</tr>
            <tr className="alcotype_box">
				<th><p>술종류</p></th>
				<td><input type="text" /></td>
			</tr>
            <tr className="alconame_box">
				<th><p>(제품명)</p></th>
				<td><input type="text" /></td>
			</tr>
            <tr className="cockinput_box">
				<th><p>재료</p></th>
				<td><input type="text" /><button id="inputbtn" type="submit">재료추가+</button></td>
                
                
			</tr>
            <tr className="cockrate_box">
				<th><p>비율</p></th>
				<td><input type="text" /></td>
			</tr>
            <tr className="cockncontent_box">
				<th><p>설명</p></th>
				<td><input type="text" /></td>
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