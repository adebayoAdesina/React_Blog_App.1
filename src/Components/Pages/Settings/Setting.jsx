import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Setting.css'
import ProfileIcon from '../../../assets/icons8_Add.png'

const Setting = () => {
    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="Profile Picture"></label>
                    <div className="settingsPP">
                        <img src={ProfileIcon} alt="" />
                        <label htmlFor="fileInput">
                            <img src={ProfileIcon} alt="" className="settingsPPIcon" />
                        </label>
                        <input type="file" id='fileInput' style={{display: 'none'}}/>
                    </div>
                    <label htmlFor=""> Username</label>
                    <input type="text" placeholder='beloved'/>
                    <label htmlFor=""> email</label>
                    <input type="gmail" placeholder='beloved@gmail.com'/>
                    <label htmlFor=""> Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Setting;