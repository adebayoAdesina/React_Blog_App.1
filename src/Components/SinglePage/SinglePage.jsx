import React from 'react';
import './SinglePage.css';
import PostImg from '../../assets/images (35).jpg'
import EditIcon from '../../assets/icons8_Edit_Property_50px.png'
import DeleteIcon from '../../assets/icons8_Trash_48px.png'

function SinglePage() {
    return (
        <div className='singlePage'>
            <div className="singlePostWrapper">
                <img src={PostImg} alt="" className='singlePostImg'/>
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor
                    <div className="singlePostEdit">
                        <img src={EditIcon} alt="" className="singlePostIcon" />
                        <img src={DeleteIcon} alt="" className="singlePostIcon" />
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Adebayo Adesina</span>
                    <span className="singlePostAuthor">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.
                </p>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam perspiciatis sed, nesciunt iste non magnam cupiditate corrupti. Saepe eius numquam deleniti? Maxime, hic doloribus. Cumque, deserunt? Labore, itaque ipsa.
                </p>
            </div>
        </div>
    );
}

export default SinglePage;