import React from 'react';
import './Sidebar.css';
import SidebarImage from '../../assets/adebayo_adesina.png';
import FacebookLogo from '../../assets/icons8_Facebook_50px.png'
import GithubLogo from '../../assets/icons8_GitHub_50px.png'
import LinkedInLogo from '../../assets/icons8_LinkedIn_52px.png'

const Sidebar = () => {
    //const user = false;
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={SidebarImage} alt="" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum accusamus ab unde quia! Hic rerum, eligendi ex beatae minus possimus! Laudantium inventore asperiores delectus dolore nobis, dicta repudiandae! 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Music</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow</span>
                <div className='inlineIcons'>
                    <img src={FacebookLogo} alt="Facebook Logo" srcset="" className='sidebarIcon'/>
                    <img src={GithubLogo} alt="Github Logo" srcset="" className='sidebarIcon'/>
                    <img src={LinkedInLogo} alt="Linkedin Logo" srcset="" className='sidebarIcon'/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
