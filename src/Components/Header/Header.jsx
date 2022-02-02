import React from 'react';
import './Header.css'
import HeaderImage from '../../assets/bg.jpg';

const Header = () => {
    return (
        <header className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img src={HeaderImage} alt="" className='headerImage'/>
        </header>
    );
}

export default Header;