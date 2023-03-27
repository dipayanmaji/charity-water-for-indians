import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header =()=>{
    return(
        <div className='header-container'>
            <div className='header'>
                <div><NavLink to={'/'}><img className='logo' src={logo} alt='Charity Water For Indians' /></NavLink></div>
                <div><NavLink to={'/why-water'}>Why Water?</NavLink></div>
                <div><NavLink to={'/our-work'}>Our Work</NavLink></div>
                <div><NavLink to={'/events'}>Events</NavLink></div>
                <div><NavLink to={'/about-us'}>About Us</NavLink></div>
                <div><NavLink to={'/contact-us'}>Contact Us</NavLink></div>
                <div><NavLink to={'/donate'}>Donate</NavLink></div>
                <div><NavLink to={'/login'}>Sign In</NavLink></div>
            </div>
        </div>
    )
}

export default Header;