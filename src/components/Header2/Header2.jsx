import './Header2.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../../images/logo2.png'

const Header2 =()=>{
    const [hidden, setHidden] = useState(true);
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset>80){
            setHidden(false);
        }else{
            setHidden(true);
        }
    })

    return(
        <div className={`header2-container ${hidden && 'hidden-header2'}`}>
            <div className='header2'>
                <NavLink to={'/'}><img className='logo2' src={logo2} alt='Charity Water For Indians' /></NavLink>
                <NavLink to={'/why-water'}>Why Water?</NavLink>
                <NavLink to={'/our-work'}>Our Work</NavLink>
                <NavLink to={'/about-us'}>About Us</NavLink>
                <NavLink to={'/contact-us'}>Contact Us</NavLink>
                <NavLink to={'/donate'}>Donate</NavLink>
                <NavLink to={'/login'}>Sign In</NavLink>
            </div>
        </div>
    )
}

export default Header2;