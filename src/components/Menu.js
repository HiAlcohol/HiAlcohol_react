import React, { useState } from 'react';
import MenuList from './MenuList';
import '../scss/Menu.scss';

function Menu() {
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
        console.log(isOpen)
    }
    return <div>
        <div className="menu_btn">
            <a href="#" onClick={() => toggleMenu()}>
                <div className="menu_container">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </a>
        </div>
        {/* <div className='menu_bg'></div> */}
        {/* <MenuList></MenuList> */}
    </div>
}

export default Menu;