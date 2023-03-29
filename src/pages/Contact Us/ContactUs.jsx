import './ContactUs.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {GiRotaryPhone} from 'react-icons/gi';
import {MdOutgoingMail} from 'react-icons/md';
import {BsFillBuildingFill} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {FaSnapchatGhost} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';

const ContactUs= ()=>{
    const [active, setActive] = useState(false);
    useEffect(()=>{
        setActive(true);
    },[])

    return(
        <div>
            <div className='contact-us-top-gap'></div>
            <div className='contact-us-container'>
                <h1 className={`heading ${active ? '' : 'nonactive-heading'}`}>Contact Us</h1>
                <div className='contact-us'>
                    <div style={{opacity: `${active? 1 : 0}`, transform: `translate(${active? 0 : -15}rem) scale(${active? 1 : 0.5})`}}>
                        <GiRotaryPhone style={{fontSize: '6rem'}} />
                        <StyleSpan>001 2356 012</StyleSpan>
                        <StyleSpan>+91 98765 43210</StyleSpan>
                    </div>
                    <div style={{opacity: `${active? 1 : 0}`, transform: `rotateY(${active? 0 : -90}deg) scale(${active? 1 : 0.5})`}}>
                        <BsFillBuildingFill style={{fontSize: '5rem'}} />
                        <StyleSpan>DADA GHOSH BHAWAN</StyleSpan>
                        <StyleSpan>CENTRAL DELHI</StyleSpan>
                        <StyleSpan>110008</StyleSpan>
                    </div>
                    <div style={{opacity: `${active? 1 : 0}`, transform: `translate(${active? 0 : 15}rem) scale(${active? 1 : 0.5})`}}>
                        <MdOutgoingMail style={{fontSize: '6rem'}} />
                        <StyleSpan>support@cwfi.info</StyleSpan>
                        <StyleSpan>cwfindian@outlook.com</StyleSpan>
                    </div>
                </div>
                <section className='social-media'>
                    <FaFacebookF />
                    <FaTwitter />
                    <AiFillInstagram />
                    <FaSnapchatGhost />
                    <FaYoutube />
                    <BsLinkedin />
                </section>
            </div>
        </div>
    )
}
const StyleSpan = styled.span`
    font-size: 18px;
`
export default ContactUs;