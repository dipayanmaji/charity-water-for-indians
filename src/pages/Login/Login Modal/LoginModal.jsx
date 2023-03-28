import './LoginModal.css';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const LoginModal= ({setPortal, name})=>{
    const navigate= useNavigate();

    const closePortal= ()=>{
        setPortal(false);
        navigate('/events');
    }
    return(
        <div onClick={()=> navigate('/')} className='login-modal-container'>
            <div onClick={(e)=> e.stopPropagation()} className='login-modal'>
                <p>Welcome <Wrapper>{name}</Wrapper>, nice to see you again. Check our latest events.</p>
                
                <button className='btn btn-success' onClick={closePortal}>Our Events</button>
            </div>
        </div>
    )
}

const Wrapper = styled.strong`
    text-transform: uppercase;
`

export default LoginModal;