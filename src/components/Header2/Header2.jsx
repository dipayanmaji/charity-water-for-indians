import './Header2.css';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import {IoWaterSharp} from 'react-icons/io5';

const Header2 =()=>{
    const myContext = useContext(MyContext);
    const [hidden, setHidden] = useState(true);
    const [displayLogOut, setDisplayLogOut] = useState(false);

    window.addEventListener('scroll', ()=>{
        setDisplayLogOut(false);

        if(window.pageYOffset>80){
            setHidden(false);
        }else{
            setHidden(true);
        }
    })

    const userClicked= ()=>{
        setDisplayLogOut(!displayLogOut);
    }
    const logOutClicked= ()=>{
        setDisplayLogOut(false);
        myContext.addCurrUser('');
        myContext.makeLogin(false);
    }

    return(
        <div className={`header2-container ${hidden && 'hidden-header2'}`}>
            <div className='header2'>
                <div>
                    <NavLink className={'logo2'} to={'/'}>
                        <IoWaterSharp className='water-drop' />
                        <span className='short-title'>CWFI</span>
                        <span className='long-title'>CHARITY WATER FOR INDIAN</span>
                    </NavLink>
                </div>
                <div><NavLink to={'/why-water'}>Why Water?</NavLink></div>
                <div><NavLink to={'/our-work'}>Our Work</NavLink></div>
                <div><NavLink to={'/events'}>Events</NavLink></div>
                <div><NavLink to={'/about-us'}>About Us</NavLink></div>
                <div><NavLink to={'/contact-us'}>Contact Us</NavLink></div>
                <div><NavLink to={'/donate'}>Donate</NavLink></div>
                <div>
                    {
                        !myContext.login ? <NavLink to={'/login'}>Sign In</NavLink> :
                        <div className='user-profile2'>
                            <div onClick={userClicked} className='btn btn-success'> <span className='user-name2'>{myContext.currUser}</span> <span className={`arrow2 ${displayLogOut && 'rotate2'}`}>{'>'}</span></div>
                            {displayLogOut && <button onClick={logOutClicked} className='btn btn-danger log-out-btn2'>Sign Out</button>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header2;