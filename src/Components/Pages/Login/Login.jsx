import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="email" className='loginInput' placeholder='Enter your email...'/>
                <label htmlFor="">Password</label>
                <input type="password" className='loginInput' placeholder='Enter your Password...'/>
                <button className="loginButton">Login</button>
            </form>
            <Link to="/register">
                <button className="loginRegisterButton">Register</button>
            </Link>
        </div>
    );
}

export default Login;