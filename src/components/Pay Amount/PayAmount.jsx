import './PayAmount.css';
import React, { useEffect, useReducer, useState } from 'react';
import { reducerFun } from './reducerFun';

const PayAmount = ({setActivePayAmount, setAmount})=>{

    const [nonactive, setNonactive] = useState(true);
    useEffect(()=>{
        setNonactive(false);
    },[])

    const initialState = {
        2500 : true,
        5000 : false,
        15000 : false,
        25000 : false,
        50000 : false,
        other : false,
    }

    const[state, dispatch] = useReducer(reducerFun, initialState);

    const[displayBar, setDisplayBar] = useState(false);
    const [donateAmount, setDonateAmount] = useState(2500);
    const [userAmount, setUserAmount] = useState('');
    const [displayErr, setDisplayErr] = useState(false);

    const inputClicked= (e)=>{
        const key = e.target.name;
        dispatch(key);
        if(key === 'other'){
            setDisplayBar(true);
            setDonateAmount(0);
            setDisplayErr(false);
        }
        else{
            setDisplayBar(false);
            setDonateAmount(Number(key));
        }
    }

    const amountEntering= (e)=>{
        const value = e.target.value;
        setUserAmount(value)
        setDisplayErr(false);
        setDonateAmount(Number(value));
    }

    const formSubmit= (e)=>{
        e.preventDefault();
        if(donateAmount >= 100){
            setAmount(donateAmount);
            setActivePayAmount(false);
            return;
        }
        setDisplayErr(true);
    }

    return(
        <form onSubmit={formSubmit} className={`pay-amount ${nonactive && 'pay-amount-nonactive'}`}>
            <h2>Help Towards Indians' Health, Hygiene & Sanitation</h2>
            <h5><strong>Choose a Donation Amount</strong></h5>
            <div className='choosable-amount'>
                <input onClick={inputClicked} className={state[2500] ? 'focus' : ''} name='2500' value={'₹2,500'} readOnly />
                <input onClick={inputClicked} className={state[5000] ? 'focus' : ''} name='5000' value={'₹5,000'} readOnly />
                <input onClick={inputClicked} className={state[15000] ? 'focus' : ''} name='15000' value={'₹15,000'} readOnly />
                <input onClick={inputClicked} className={state[25000] ? 'focus' : ''} name='25000' value={'₹25,000'} readOnly />
                <input onClick={inputClicked} className={state[50000] ? 'focus' : ''} name='50000' value={'₹50,000'} readOnly />
                <input onClick={inputClicked} className={state['other'] ? 'focus' : ''} name='other' value={'Other'} readOnly />
            </div>

            {displayBar && <div className='enter-amount'>
                <label htmlFor='amount'><strong>Amount</strong></label> <br />
                <input onChange={amountEntering} value={userAmount} id='amount' name='amount' type={'number'} autoFocus autoComplete='off' />
                {displayErr && <p style={{color:'red'}}>*Minimum donation amount is ₹100</p>}
            </div>}

            <div className='donate-btn-div'>
                <button id='donate'>Donate</button>
            </div>
        </form>
    )
}
export default PayAmount;