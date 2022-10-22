import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerApropos from "../assets/images/bannerApropos.png"

const Apropos = () => {
    return (
        <div>
            <Header />
            <Banner image={BannerApropos} />
            <Footer />
        </div>
    )
};

export default Apropos;