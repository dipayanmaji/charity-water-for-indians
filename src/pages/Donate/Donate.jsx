import './Donate.css';
import React, { useState } from 'react';
import PaymentMethod from '../../components/Payment Method/PaymentMethod';
import PayAmount from '../../components/Pay Amount/PayAmount';

const Donate= ()=>{
    const [activePayAmount, setActivePayAmount] = useState(true);
    const [amount, setAmount] = useState();

    return(
        <div className='donate-container'>
            <div className='donate'>
                {
                    activePayAmount ? <PayAmount setActivePayAmount={setActivePayAmount} setAmount={setAmount} /> :
                    <PaymentMethod setActivePayAmount={setActivePayAmount} amount={amount} />
                }
                <p className='note'>Note: All funds raised by CHARITY WATER FOR INDIANS may be pooled together and allocated towards clean water, decent toilets and good hygiene initiatives across India, wherever the need is the greatest. Kindly note that the above examples are for descriptive purposes only. They indicate the impact that your donation can bring about in the lives of entire families, including women and children.</p>
            </div>
        </div>
    )
}
export default Donate;