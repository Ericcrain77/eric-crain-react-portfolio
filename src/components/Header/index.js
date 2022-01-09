import React from 'react';
import './style.css';
import logo192 from '../../assets/images/logo192.png';

function Header(props) {
    return (
        <header>
            <div className='header-container'>
                <h1>
                    Eric Crain
                </h1>
                <img src={logo192} alt='EC-Logo-Header' />
            </div>
            <nav>
                <ul>
                    <li>
                    <a href="#about" onClick={() => props.setCurrentPage("About")}>About</a>
                    </li>
                    <li>
                    <a href='#skills' onClick={() => props.setCurrentPage("Resume")}>Developer Skills</a>
                    </li>
                    <li>
                    <a href="#portfolio" onClick={() => props.setCurrentPage("Portfolio")}>Portfolio</a>
                    </li>
                    <li>
                    <a href="#contact" onClick={() => props.setCurrentPage("ContactForm")}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;