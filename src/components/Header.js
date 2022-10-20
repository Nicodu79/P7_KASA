import React from "react";
import {NavLink} from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
    return (
        <header>
             {/* Les images importées depuis la balise IMG sont accessibles dans "public*/}
             <img src="./assets/logo/LOGO.png" alt="logo kasa" />
        <nav>  
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Apropos">A propos</NavLink>  
        </nav>
        </header>
    )
};

export default Header;




/*
isActive={(match, location) => {        if (!match) {            return false;        } 


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/Users/Documents/workspace/test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

*/