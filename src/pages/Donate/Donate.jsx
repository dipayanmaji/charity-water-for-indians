import './Donate.css';
import React from 'react';
import PaymentMethod from '../../components/Payment Method/PaymentMethod';

const Donate= ()=>{
    return(
        <div>
            <div className='donate-top-gap'></div>
            <div className='donate-container'>
                <div className='donate'>
                    <PaymentMethod />
                </div>
            </div>
        </div>
    )
}
export default Donate;