import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import SinglePage from '../../SinglePage/SinglePage';
import './SinglePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <SinglePage/>
            <Sidebar/>
        </div>
    );
}

export default SinglePost ;