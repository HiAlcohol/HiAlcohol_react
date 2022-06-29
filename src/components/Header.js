import React from 'react';
import { Link } from 'react-router-dom';
import writeBtn from '../img/writeButton.png';
import '../scss/Header.scss';
import Menu from "./Menu"

const Header = (props) => {
    return (
        <div className="header">
            <Menu></Menu>
            <div className='Header'>
                <Link to='/' className='logo'>Hi Alcohol</Link>
            </div>
            <div className="writeBtn">
                <Link to="/board/write"><img className="writeBtn" src={writeBtn}/></Link>
            </div>
        </div>
    );
};

export default Header;