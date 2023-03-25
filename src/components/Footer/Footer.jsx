import './Footer.css';
import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

const Footer =()=>{
    return(
        <div className='footer-container'>
            <div className="footer">
                <section className="left-section">
                    <div className='akash'>
                        <span>Akash</span>
                        <a target={'_blank'} href="https://www.linkedin.com/in/akash-nath-164085170/"><AiFillLinkedin /></a>
                    </div>
                    <div className='archana'>
                        <span>Archana</span>
                        <a target={'_blank'} href="https://www.linkedin.com/in/archana-gajul-9405801aa/"><AiFillLinkedin /></a>
                    </div>
                    <div className='dipayan'>
                        <span>Dipayan</span>
                        <a target={'_blank'} href="https://www.linkedin.com/in/dipayanmaji/"><AiFillLinkedin /></a>
                    </div>
                    <div className='rishaw'>
                        <span>Rishaw</span>
                        <a target={'_blank'} href="https://www.linkedin.com/in/rishaw-raj-64797b1a3/"><AiFillLinkedin /></a>
                    </div>
                </section>
                <section className='middle-section'>
                    <Link to={'/'}><img style={{width: '9rem'}} src={logo} alt="logo" /></Link>
                </section>
                <section className="right-section">
                    <strong>©2023 <Link to={'/'}>CHARITY WATER FOR INDIA</Link></strong>
                    by Akash, Archana, Dipayan, Rishaw
                    <span>Country <strong>India</strong></span>
                </section>
            </div>
        </div>
    )
}
export default Footer;