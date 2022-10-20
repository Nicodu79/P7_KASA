import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BannerHome from "../assets/images/bannerHome.png";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Banner image={BannerHome} texte="Chez vous, partout et ailleurs"/>
            <h1>Hello depuis Home</h1>
            <Footer />
        </div>
    )
};
