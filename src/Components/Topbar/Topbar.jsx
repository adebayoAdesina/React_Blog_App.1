import React from 'react';
import './Topbar.css'

import TopbarImage from '../../assets/adebayo_adesina.png';
import FacebookLogo from '../../assets/icons8_Facebook_50px.png'
import GithubLogo from '../../assets/icons8_GitHub_50px.png'
import LinkedInLogo from '../../assets/icons8_LinkedIn_52px.png'
import { Link } from 'react-router-dom';

const Topbar = () => {
    const user = false;
    return (
        <div className='topbar'>
            <div className='topLeft'>
                <img src={FacebookLogo} alt="Facebook Logo" srcset="" className='topIcon'/>
                <img src={GithubLogo} alt="Github Logo" srcset="" className='topIcon'/>
                <img src={LinkedInLogo} alt="Linkedin Logo" srcset="" className='topIcon'/>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="" style={{color: 'inherit', textDecoration: 'none'}}>ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="" style={{color: 'inherit', textDecoration: 'none'}}>CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/write" style={{color: 'inherit', textDecoration: 'none'}}>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="" style={{color: 'inherit', textDecoration: 'none'}}>
                            {
                                user ? 'LOGOUT': ''
                            }
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                { user ?
                    <img src={TopbarImage} alt="Topbar" srcset="" className='topImage'/> : (
                        <ul className='topList'>
                            <li className="topListItem">
                                <Link style={{color: 'inherit', textDecoration: 'none'}} to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link style={{color: 'inherit', textDecoration: 'none'}} to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                } 
            </div>
        </div>
    );
}

export default Topbar;