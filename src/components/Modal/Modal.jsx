import './Modal.css';
import React from 'react';
import styled from 'styled-components';

const Modal= ({name, setDisplayPortal, setActivePayAmount})=>{
    const closePortal= ()=>{
        setDisplayPortal(false);
        setActivePayAmount(true);
    }
    return(
        <div onClick={closePortal} className='modal-container'>
            <div onClick={(e)=> e.stopPropagation()} className='modal'>
                <p>Thanks <Wrapper>{name}</Wrapper>, for your help. Your support will put ideal smiles on the faces of all Indians.</p>
                
                <button className='btn btn-success' onClick={closePortal}>You Welcome!</button>
            </div>
        </div>
    )
}
const Wrapper = styled.strong`
    text-transform: uppercase;
`
export default Modal;