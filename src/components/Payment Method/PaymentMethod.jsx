import './PaymentMethod.css';
import React, { useEffect, useState } from 'react';
import { getDate } from './getDate';

const numbers = [0,1,2,3,4,5,6,7,8,9];
let validNameChar = /^[a-zA-Z ]$/;

const PaymentMethod=()=>{
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
        if(value == ''){
            if(key == 'firstname') setFirstname(value);
            else setLastname(value);
            return;
        }
        const lastValue = value.charAt(value.length-1);
        if(!validNameChar.test(lastValue)) return;
        if(key == 'firstname') setFirstname(value);
        else setLastname(value);
    }

    const numInputHandler=(e)=>{
        const key = e.target.name;
        let value = e.target.value;
        if(value == ''){
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
    }

    return(
        <form onSubmit={formSubmit} className={`payment-method ${nonactive && 'payment-nonactive'}`}>
            <div>
                <label htmlFor='name'>Name*</label>
                <div className='name-div'>
                    <input id='firstname' type="text" onChange={nameHandler} value={firstname} placeholder='First Name' required />
                    <input id='lastname' type="text" onChange={nameHandler} value={lastname} placeholder='Last Name' required />
                </div>
            </div>
            <div>
                <label htmlFor='card-number'>Card Number*</label> <br />
                <input id='card-number' name='cardNumber' onChange={numInputHandler} value={state.cardNumber} type="text" minLength={16} maxLength={16} placeholder='Card Number' required />                            
            </div>
            <div>
                <label htmlFor='expiry-date'>Expiry Date*</label> <br />
                <input id='expiry-date' type="month" min={`${date.yyyy}-${date.mm}`} placeholder='Expiry Date' required />
            </div>
            <div>
                <label htmlFor='cvv'>CVV*</label> <br />
                <input id='cvv' name='cvv' onChange={numInputHandler} value={state.cvv} type="text" minLength={3} maxLength={3} placeholder='CVV' required />
            </div>
            <div className='btn-div'>
                <button id='pay'>Pay</button>
            </div>
        </form>
    )
}
export default PaymentMethod;