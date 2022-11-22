import React, { useState } from 'react';


function Post({category, date, title, author, numReplies}) {

    return (
        <div className='post'>
            <div className='postHeader'>
                <span className='postCategory'>{category}</span>
                <span className='postDate'>{date}</span>
            </div>

            <div className='postBody'>     
                <span className='postTitle'>{title}</span>
            </div>
        </div>
    )
}


export default Post;