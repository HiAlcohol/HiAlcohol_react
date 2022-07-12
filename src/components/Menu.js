import React, { useState } from 'react';
import MenuList from './MenuList';
import '../scss/Menu.scss';
// import { Fade as Hamburger } from 'hamburger-react'
import {slide as Slide} from 'react-burger-menu'

// function Menu() {
//     const [isOpen, setMenu] = useState(false);
//     const toggleMenu = () => {
//         setMenu(isOpen => !isOpen);
// 		// $('.menu_bg')
//         console.log(isOpen)
//     }
//     return <div>
//         <div className="menu_btn">
//             <a href="#" onClick={() => toggleMenu()}>
//                 <div className="menu_container">
//                     <div className="bar1"></div>
//                     <div className="bar2"></div>
//                     <div className="bar3"></div>
//                 </div>
//             </a>
//         </div>
//         <div className='menu_bg'></div>
//         {/* <MenuList></MenuList> */}
//     </div>
// }

function Menu(props) {
	return (
		// <div >
		<Slide className='menu_btn'>
			<a className="menu-item" href="/boards">
				꿀조합 게시판
			</a>
			<a className="menu-item" href="/map">
				우리동네 주류매장
			</a>
		</Slide>
		// </div>
	)
}

export default Menu;