import React from 'react';
import './Topbar.css'

import TopbarImage from '../../assets/adebayo_adesina.png';
import FacebookLogo from '../../assets/icons8_Facebook_50px.png'
import GithubLogo from '../../assets/icons8_GitHub_50px.png'
import LinkedInLogo from '../../assets/icons8_LinkedIn_52px.png'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topLeft'>
                <img src={FacebookLogo} alt="Facebook Logo" srcset="" className='topIcon'/>
                <img src={GithubLogo} alt="Github Logo" srcset="" className='topIcon'/>
                <img src={LinkedInLogo} alt="Linkedin Logo" srcset="" className='topIcon'/>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img src={TopbarImage} alt="Topbar" srcset="" className='topImage'/>
                
            </div>
        </div>
    );
}

export default Topbar;