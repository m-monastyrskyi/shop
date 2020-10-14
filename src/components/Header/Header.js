import React from 'react';
import "./Header.styles.scss"
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>

            <nav className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
            </nav>
        </header>
    );
};

export default Header;