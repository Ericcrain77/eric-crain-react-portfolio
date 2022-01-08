import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './style.css';

function Footer() {

    return (
        <footer>
            <div>
                <i><a href="https://github.com/Ericcrain77" target="_blank" rel="noopener noreferrer"><FaGithub /></a></i>
                <i><a href="https://www.linkedin.com/in/eric-crain-899a53218/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></i>
            </div>
        </footer>
    )
}

export default Footer;