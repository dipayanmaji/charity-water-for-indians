import './Register.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/boy-drink-water.jpg';

const Register =()=>{
    const [nonactive, setNonActive] = useState(true);
    useEffect(()=>{
        setNonActive(false);
    },[])

    return(
        <div className='register-container'>
            <div className='register'>
                <form onSubmit={(e)=> e.preventDefault()} className= {nonactive ? 'nonactive-form' : ''}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <div className='name-input'>
                            <input autoComplete='off' type="text" className="form-control" id="firstname" placeholder='First Name' required />
                            <input autoComplete='off' type="text" className="form-control" id="lastname" placeholder='Last Name' required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input autoComplete='off' type="email" className="form-control" id="email" placeholder='Email' required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <label htmlFor="password" className="form-label">Password</label>
                    <input autoComplete='off' type="password" id="password" className="form-control" placeholder='Password' minLength={3} maxLength={20} required />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and special characters.
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
export default Register;