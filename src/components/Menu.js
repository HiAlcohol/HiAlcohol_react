import React, { useState } from 'react';
import '../scss/Menu.scss';
import {slide as Slide} from 'react-burger-menu'

function Menu(props) {
	return (
		<Slide className='menu_btn'>
			<a className="menu-item" href="/boards">
				꿀조합 게시판
			</a>
			<a className="menu-item" href="/map">
				우리동네 주류매장
			</a>
		</Slide>
	)
}

export default Menu;