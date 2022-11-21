import React, { useState } from 'react';


function Post({title, author, category, postBody, numReplies}) {

    return (
        <div className='post'>
            <div className='postContent'>

                <div className='postCategory'>
                    <h5>{category}</h5>
                </div>

                <div className='postTitle'>
                    <h1>{title}</h1>
                </div>
                
                <div className='postBody'>
                    <p className='postBody'>{postBody}</p>
                </div>

            </div>
        </div>
    )
}


export default Post;