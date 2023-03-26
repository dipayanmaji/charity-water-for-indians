import './Login.css';
import React, { useEffect, useState } from 'react';
import image from '../../images/play-with-water.jpg'
import { Link } from 'react-router-dom';

const Login =()=>{
    const [nonactive, setNonActive] = useState(true);
    useEffect(()=>{
        setNonActive(false);
    },[])

    return(
        <div className='login-container'>
            <div className='login'>
                <form onSubmit={(e)=> e.preventDefault()} className= {nonactive && 'nonactive-form'}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Email' />
                    </div>

                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" placeholder='Password' />
                    <br />
                    <div className='submit-btn'>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
                <Link className={`register ${nonactive && 'nonactive-register'}`} to={'/register'}>Have Not Account? Register</Link>
            </div>
            <img src={image} alt="" style={{width: '100%'}} />
        </div>
    )
}
export default Login;