import React, { useState } from 'react';
import '../scss/Menu.scss';
import {slide as Slide} from 'react-burger-menu'
// import styled from 'styled-components';

function Menu(props) {
	let menu_list = ''
	console.log(props.role)
	const logout = () => {
		localStorage.removeItem('token')
		window.location.href = "/"
	}
	if (props.role === 'user') {
		menu_list = <>
			<a className="bm-item menu-item" href="/myboard">
				내가 쓴 꿀조합
			</a>
			<a className="bm-item menu-item" href="/likes">
				좋아요 리스트
			</a>
			<a href='#'>
				<div className="bm-item menu-item" onClick={logout}>
					로그아웃
				</div>
			</a>
		</>
	} else if (props.role === 'admin') {
		menu_list = <>
			<a className="bm-item menu-item" href="/myboard">
				내가 쓴 꿀조합
			</a>
			<a className="bm-item menu-item" href="/likes">
				좋아요 리스트
			</a>
			<a className="bm-item menu-item" href="/admin/reports/board">
				신고 관리 페이지
			</a>
			<a className="bm-item menu-item" href="/admin/cocktail">
				레시피 관리 페이지
			</a>
			<a href='#'>
				<div className="bm-item menu-item" onClick={logout}>
					로그아웃
				</div>
			</a>
		</>
	}
	return (
		<Slide className='menu_btn'>
			<a className="menu-item" href="/boards">
				꿀조합 게시판
			</a>
			<a className="menu-item" href="/map">
				우리동네 주류매장
			</a>
			{menu_list}
		</Slide>
	)
}

export default Menu;