import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/'>Hi Alcohol</Link>
        </div>
    );
};

export default Header;