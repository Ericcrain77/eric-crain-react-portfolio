import React from 'react';
import './style.css';
import Navigation from '../Navigation';
import logo192 from '../../assets/images/logo192.png';

function Header() {

    return (
        <header>
            <div className='header-container'>
                <h1>
                    Eric Crain
                </h1>
                <img src={logo192} alt='EC-Logo-Header' />
            </div>
            <Navigation />
        </header>
    )
}

export default Header;