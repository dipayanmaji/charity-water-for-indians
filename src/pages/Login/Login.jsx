import './Login.css';
import React, { useContext, useEffect, useState } from 'react';
import image from '../../images/play-with-water.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../components/Context/Context';
import { createPortal } from 'react-dom';
import LoginModal from './Login Modal/LoginModal';
import styled from 'styled-components';

const Login =()=>{
    const myContext = useContext(MyContext);
    const navigate = useNavigate();

    const [nonactive, setNonActive] = useState(true);
    useEffect(()=>{
        if(myContext.login){
            navigate('/');
            return;
        }
        setNonActive(false);
    },[])

    const [newAccount, setNewAccount] = useState(false);
    const [worngPassword, setWorngPassword] = useState(false);
    const [portal, setPortal] = useState(false);

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const inputHandler= (e)=>{
        const key = e.target.id;
        const value = e.target.value;
        setState({
            ...state,
            [key]: value,
        })

        setNewAccount(false);
        setWorngPassword(false);
    }


    const formSubmit= (e)=>{
        e.preventDefault();
        if(myContext.users[state.email.toLocaleLowerCase()] === undefined){
            setNewAccount(true);
            return;
        }
        if(myContext.users[state.email.toLocaleLowerCase()].password !== state.password){
            setWorngPassword(true);
            return;
        }

        myContext.makeLogin(true);
        myContext.addCurrUser(myContext.users[state.email.toLocaleLowerCase()].firstname);
        setPortal(true);
    }

    return(
        <div className='login-container'>
            <div className='login'>
                <h1 className={`heading ${nonactive ? 'nonactive-heading' : ''}`}>Log In</h1>
                <form onSubmit={formSubmit} className= {nonactive ? 'nonactive-form' : ''}>
                    {newAccount && <RedHeading>You are not register yet. <Link to={'/register'}>Register here</Link></RedHeading>}
                    {worngPassword && <RedHeading>Wrong password. Try again.</RedHeading>}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={inputHandler} value={state.email} autoComplete='off' type="email" className="form-control" id="email" placeholder='Email' required />
                    </div>

                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={inputHandler} value={state.password} autoComplete='off' type="password" id="password" className="form-control" placeholder='Password' required />
                    <br />
                    <div className='submit-btn'>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
                <Link className={`register ${nonactive ? 'nonactive-register' : ''}`} to={'/register'}>Have Not Account? Register</Link>
            </div>
            <img src={image} alt="Children Playing" style={{width: '100%'}} />
            {portal && createPortal(<LoginModal setPortal={setPortal} name={myContext.users[state.email.toLocaleLowerCase()].firstname} />, document.getElementById('portal'))}
        </div>
    )
}

const RedHeading = styled.h5`
    color: red;
    text-align: center;
`
export default Login;
