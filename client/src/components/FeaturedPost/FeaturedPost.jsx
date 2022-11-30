import React, { useState } from 'react';
import '../FeaturedPost/FeaturedPost.css';


function FeaturedPost({category, date, title, author, numReplies, body}) {

    const [openPostModal, setOpenPostModal] = useState(false);

    const togglePostModal = () => {
        setOpenPostModal(prev => !prev);
    }

    return (
        
        <div className="featuredPost">
            <div className="featuredPostContent">
                <span className='featuredPostCategory'>{category}</span>
                <span className='featuredPostDate'>{date}</span>
                <div className='featuredPostTitle'>{title}</div>
                <div className='featuredPostStats'>
                   <button className='authorBtn'>{author}</button>
                   <button className='repliesBtn' onClick={togglePostModal}>{numReplies}</button>
                   <DisplayPostModal openPostModal={openPostModal} toggle={togglePostModal}/>
                   <button className='saveBtn'>Save</button>
                </div>
            </div>
        </div>
        
    )
}


export default FeaturedPost;