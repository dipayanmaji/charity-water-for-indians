import Hero1 from "../../components/Hero1/Hero1";
import React from "react";
import "./WhyWater.css";
import AboutImg from "../../images/water-drop.webp";

const WhyWater = () => {
    return (
        <>
            <Hero1
                cName="hero1"
                Hero1Img={AboutImg}
                btnText="Join Us"
                url="/"
                btnClass="show"
            />
        </>
    )
}


export default WhyWater;