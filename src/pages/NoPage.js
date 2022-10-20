import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NoPage = () => {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="redirect">Retourner sur la page d'accueil</NavLink>
            <Footer />

        </div>
    )
};

export default NoPage;