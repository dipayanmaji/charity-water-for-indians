import './Header.css';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import { MyContext } from '../Context/Context';

const Header =()=>{

    const myContext = useContext(MyContext);
    const [displayLogOut, setDisplayLogOut] = useState(false);

    window.addEventListener('scroll', ()=>{
        setDisplayLogOut(false);
    });

    const userClicked= ()=>{
        setDisplayLogOut(!displayLogOut);
    }
    const logOutClicked= ()=>{
        setDisplayLogOut(false);
        myContext.addCurrUser('');
        myContext.makeLogin(false);
    }

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
                <div>
                    {
                        !myContext.login ? <NavLink to={'/login'}>Sign In</NavLink> :
                        <div className='user-profile'>
                            <div onClick={userClicked} className='btn btn-success'> <span className='user-name'>{myContext.currUser}</span> <span className={`arrow ${displayLogOut && 'rotate'}`}>{'>'}</span></div>
                            {displayLogOut && <button onClick={logOutClicked} className='btn btn-danger log-out-btn'>Sign Out</button>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;