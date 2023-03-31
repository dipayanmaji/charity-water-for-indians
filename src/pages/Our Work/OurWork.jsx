import './OurWork.css';
import React from 'react';
import Hero from "../../components/Hero/Hero";
import AboutImg from "../../images/hands.jpg";

const OurWork = () => {
    return (
        <>
            <Hero
                cName="hero"
                HeroImg={AboutImg}
                title="OUR MISSION"
                text="Drop by Drop: Working Towards a World Where Fresh Water is a Right, Not a Privilege."
                btnText="Join Us"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default OurWork;