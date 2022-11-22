import React, { useState } from 'react';
import replyIcon from '../../images/reply-icon.png';


function Post({category, date, title, author, numReplies}) {

    return (
        
        <div className="card">
            <div className="card-content">
                <span className='card-category'>{category}</span>
                <span className='card-date'>{date}</span>
                <div className='card-title'>{title}</div>
                <div className='card-stats'>
                   <button className='authorBtn'>{author}</button>
                   <button className='repliesBtn'>{numReplies}</button>
                   <button className='saveBtn'>Save</button>
                </div>
            </div>
        </div>
        
    )
}


{/* <div className='post'>
<div className='postHeader'>
    <span className='postCategory'>{category}</span>
    <span className='postDate'>{date}</span>
</div>

<div className='postBody'>     
    <span className='postTitle'>{title}</span>
    <div className='postStats'>
        <span className='postAuthor'>{author}</span>
        <span className='numReplies'>{numReplies}</span>
    </div>
</div>
</div> */}

export default Post;