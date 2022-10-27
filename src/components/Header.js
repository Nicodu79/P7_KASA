import React from "react";
import {NavLink} from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
    return (
        <header>
             {/* Les images importées depuis la balise IMG sont accessibles dans "public*/}
             <img src="../assets/logo/LOGO.png" alt="logo kasa" />
        <nav>  
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Apropos">A propos</NavLink>  
        </nav>
        </header>
    )
};

export default Header;

