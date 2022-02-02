import React from 'react';
import './Post.css';
import PostImg from '../../assets/images (35).jpg'

const Post = () => {
    return (
        <div className='post'>
            <img src={PostImg} alt="" className='postImage'/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor
                </span>
                <hr/>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus, debitis ad, possimus delectus, beatae quia accusamus minima distinctio totam nostrum pariatur ipsa earum corporis. Molestiae maiores dolor assumenda! Ipsam?
            </p>
        </div>
    );
}

export default Post;