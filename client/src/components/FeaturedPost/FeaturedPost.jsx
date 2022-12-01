import React, { useState } from 'react';
import replyIcon from '../../images/reply-icon.png';

// This was a WIP feature that we were planning on implementing, but ran out of time.
// This would have been one of two components that would have been rendered in the Featured section.

function FeaturedPost({category, date, title, author, numReplies, body}) {

    const [openPostModal, setOpenPostModal] = useState(false);

    const togglePostModal = () => {
        setOpenPostModal(prev => !prev);
    }

    return (
        
        <div className="card">
            <div className="card-content">
                <span className='card-category'>{category}</span>
                <span className='card-date'>{date}</span>
                <div className='card-title'>{title}</div>
                <div className='card-stats'>
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