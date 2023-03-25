import './Login.css';
import React from 'react';
import image from '../../images/play-with-water.jpg'

const Login =()=>{
    return(
        <div className='login-container'>
            <div className='login'>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>

                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" placeholder='Password' />
                    {/* <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and special characters.
                    </div> */}
                    <br />
                    <div className='submit-btn'>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
            </div>
            <img src={image} alt="" style={{width: '100%'}} />
        </div>
    )
}
export default Login;