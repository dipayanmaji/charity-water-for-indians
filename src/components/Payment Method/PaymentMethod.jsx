import './PaymentMethod.css';
import React, { useEffect, useState } from 'react';
import { getDate } from './getDate';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

const numbers = [0,1,2,3,4,5,6,7,8,9];
let validNameChar = /^[a-zA-Z ]$/;

const PaymentMethod=({setActivePayAmount, amount})=>{
    const[displayPortal, setDisplayPortal] = useState(false);
    const [nonactive, setNonactive] = useState(true);
    useEffect(()=>{
        setNonactive(false);
    },[])

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [state, setState] = useState({
        cardNumber: '',
        cvv: '',
    })

    const nameHandler= (e)=>{
        const key = e.target.id;
        const value = e.target.value;
        if(value === ''){
            if(key === 'firstname') setFirstname(value);
            else setLastname(value);
            return;
        }
        const lastValue = value.charAt(value.length-1);
        if(!validNameChar.test(lastValue)) return;
        if(key === 'firstname') setFirstname(value);
        else setLastname(value);
    }

    const numInputHandler=(e)=>{
        const key = e.target.name;
        let value = e.target.value;
        if(value === ''){
            setState({
                ...state,
               [key]: value,
            })
        }
        const lastValue = (value.charAt(value.length-1));
        if(numbers.includes(parseInt(lastValue)) === false) return;
        setState({
            ...state,
           [key]: value,
        })
    }

    const date = getDate(new Date());

    const formSubmit= (e)=>{
        e.preventDefault();
        setDisplayPortal(true);
    }

    return(
        <form onSubmit={formSubmit} className={`payment-method ${nonactive ? 'payment-nonactive' : ''}`}>
            <span className='back-btn' onClick={()=> setActivePayAmount(true)}>Change Amount</span>
            <div>
                <label htmlFor='name'>Name*</label>
                <div className='name-div'>
                    <input autoComplete='off' id='firstname' type="text" onChange={nameHandler} value={firstname} placeholder='First Name' required />
                    <input autoComplete='off' id='lastname' type="text" onChange={nameHandler} value={lastname} placeholder='Last Name' required />
                </div>
            </div>
            <div>
                <label htmlFor='card-number'>Card Number*</label> <br />
                <input autoComplete='off' id='card-number' name='cardNumber' onChange={numInputHandler} value={state.cardNumber} type="text" minLength={16} maxLength={16} placeholder='Card Number' required />                            
            </div>
            <div>
                <label htmlFor='expiry-date'>Expiry Date*</label> <br />
                <input autoComplete='off' id='expiry-date' type="month" min={`${date.yyyy}-${date.mm}`} placeholder='Expiry Date' required />
            </div>
            <div>
                <label htmlFor='cvv'>CVV*</label> <br />
                <input autoComplete='off' id='cvv' name='cvv' onChange={numInputHandler} value={state.cvv} type="password" minLength={3} maxLength={3} placeholder='CVV' required />
            </div>
            <div className='pay-btn-div'>
                <button type='submit' id='pay'><strong>Pay {amount}</strong></button>
            </div>
            {displayPortal && createPortal(<Modal name={firstname} setDisplayPortal={setDisplayPortal} setActivePayAmount={setActivePayAmount} />, document.getElementById('portal'))}
        </form>
    )
}
export default PaymentMethod;