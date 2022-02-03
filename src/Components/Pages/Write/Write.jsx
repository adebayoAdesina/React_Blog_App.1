import React from 'react';
import AddIcon from '../../../assets/icons8_Add.png'
import './Write.css'
import UploadedImage from '../../../assets/adebayo_adesina.png';

const Write = () => {
    return (
        <div className='write'>
            <img src={UploadedImage} alt="" className="writeImg" />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <img src={AddIcon} alt="" className='addImg'/>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}}/>
                    <input type="text" id='postTitle' className='writeInput' placeholder='Title' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="30" placeholder='Tell your story...' rows="10" className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
}

export default Write;