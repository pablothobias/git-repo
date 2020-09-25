import React from 'react';
import './Header.css';

import logoGithub from '../../../images/logo-github.png';

const Header: React.FC = () => {
    return (
        <header id="header-content">
            <div id="header-logo">
                <img src={logoGithub} alt="logo-github" id="logo-github"/>
                <p id="header-title">Github Repo</p>
            </div>
        </header>
    );
}

export default Header;