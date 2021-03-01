import React from 'react';
import './Header.css';
import image from '../../images/wave.png'

const Header = () => {
    return (
        <div className="header">
            <h1>Bangladesh Team</h1>
            <img src={image} alt="" />
        </div>

    );
};

export default Header;