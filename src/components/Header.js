import React from 'react';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/'><p id='HeaderLogo'>Hi Alcohol</p></Link>
        </div>
    );
};

export default Header;