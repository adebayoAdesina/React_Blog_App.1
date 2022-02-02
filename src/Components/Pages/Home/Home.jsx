import React from 'react';
import Header from '../../Header/Header';
import Post from '../../Posts/Posts';
import Sidebar from '../../Sidebar/Sidebar';
import './Home.css'
const Home = () => {
    return (
        <>
            <Header/>
            <div className='home'>
                <Post/>
                <Sidebar/>
            </div>
        </>
    );
}

export default Home;