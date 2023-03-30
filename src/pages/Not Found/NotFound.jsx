import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {GiWaterDrop} from 'react-icons/gi';
import {GiGlassShot} from 'react-icons/gi';
import {TbError404} from 'react-icons/tb';

const NotFound= ()=>{
    return(
        <div className='not-found-container'>
            <div className='not-found'>
                <section className='top-section'>
                    <div className='div-1'>
                        <span className='drop'><GiWaterDrop /></span>
                        <span className='glass'><GiGlassShot /></span>
                    </div>

                    <div className='div-2'><TbError404 /></div>
                </section>
                <section className='bottom-section'>
                    <h1>UH OH. WE CAN'T FIND THE PAGE YOU'RE LOOKING FOR.</h1>
                    <p>Please double check the spelling of your URL, and if you're still having problems, please visit our <Link to={'/donate'}>help center</Link>.</p>
                    <p>To learn more about charity water for indians and the water crisis, visit our <Link to={'/why-water'}>Why Water</Link> page.</p>
                </section>
            </div>
        </div>
    )
}
export default NotFound;