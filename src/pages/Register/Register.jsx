import './Register.css';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/boy-drink-water.jpg';
import { validity } from './validity';
import styled from 'styled-components';
import { MyContext } from '../../components/Context/Context';

const Register =()=>{
    const [nonactive, setNonActive] = useState(true);
    useEffect(()=>{
        setNonActive(false);
    },[])

    const myContext = useContext(MyContext);
    const [oldUser, setOldUser] = useState(false);
    const [success, setSuccess] = useState(false);

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState(null);

    const inputHandler=(e)=>{
        const key = e.target.id;
        const value = e.target.value;
        setState({
            ...state,
            [key]: value,
        })
        setErrors(null);
        setOldUser(false);
        setSuccess(false);
    }


    const formSubmit=(e)=>{
        e.preventDefault();
        const error = validity(state);
        if(error !== null){
            setErrors(error);
            setSuccess(false);
            return;
        }
        
        if(myContext.users[state.email.toLocaleLowerCase()] !== undefined){
            setOldUser(true);
            return;
        }

        const userDetails= {
            firstname: state.firstname.toLocaleUpperCase(),
            lastname: state.lastname.toLocaleUpperCase(),
            email: state.email.toLocaleLowerCase(),
            password: state.password,
        }
        myContext.addUser(userDetails);

        setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        })
        setSuccess(true);
        console.log('register succesful');
    }

    return(
        <div className='register-container'>
            <div className='register'>
                <h1 className={`heading ${nonactive ? 'nonactive-heading' : ''}`}>Welcome To Our Family</h1>
                <form onSubmit={formSubmit} className= {nonactive ? 'nonactive-form' : ''}>
                    {oldUser && <div style={{textAlign: 'center', color: 'red'}}>An account has already exists, associated with thid email id</div>}
                    {success && <h5 style={{textAlign: 'center', color: 'green'}}>You are successfully registered. <Link to={'/login'}>sign in</Link></h5>}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <div className='name-input'>
                            <div>
                                <input onChange={inputHandler} value={state.firstname} autoComplete='off' type="text" className="form-control" id="firstname" placeholder='First Name' />
                                {errors && errors.firstname && <RedSpan>*Enter a valid first name</RedSpan>}
                            </div>
                            <div>
                                <input onChange={inputHandler} value={state.lastname} autoComplete='off' type="text" className="form-control" id="lastname" placeholder='Last Name' />
                                {errors && errors.lastname && <RedSpan>*Enter a valid last name</RedSpan>}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={inputHandler} value={state.email} autoComplete='off' type="text" className="form-control" id="email" placeholder='Email' />
                        {errors && errors.email && <RedSpan>*Enter a valid email</RedSpan>}
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={inputHandler} value={state.password} autoComplete='off' type="password" id="password" className="form-control" placeholder='Password' />
                    <div id="passwordHelpBlock" className="form-text" style={{color: `${(errors && errors.password) ? 'red' : ''}`}}>
                        Your password must be 8-20 letter, contain at least a symbol, upper and lower case letters and a number.
                    </div>
                    <br />
                    <div className='submit-btn'>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <Link className={`login ${nonactive ? 'nonactive-login' : ''}`} to={'/login'}>Already Account? Sign In</Link>
            </div>
            <img src={image} alt="" style={{width: '100%'}} />
        </div>
    )
}

const RedSpan = styled.span`
    color: red;
`
export default Register;