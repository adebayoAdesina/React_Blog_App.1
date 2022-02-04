import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" className='registerInput' placeholder='Enter your username...'/>
                <label htmlFor="">Email</label>
                <input type="email" className='registerInput' placeholder='Enter your email...'/>
                <label htmlFor="">Password</label>
                <input type="password" className='registerInput' placeholder='Enter your Password...'/>
                <button className="registerButton">Register</button>
            </form>
            <Link to="/login">
                <button className="registerLoginButton">Login</button>
            </Link>
        </div>
    );
}

export default Register;