import React from 'react';


function Post({category, date, title, author, numReplies, body}) {
    return (
        <div className="post">
            <div className="postContent">
                <span className='postCategory'>{category}</span>
                <span className='postDate'>{date}</span>
                <div className='postTitle'>{title}</div>
                <div className='postBody'>
                    <p className='postBodyContent'>{body}</p>
                </div>
                <div className='postStats'>
                   <button className='authorBtn'>{author}</button>
                   <button className='repliesBtn'>{numReplies}</button>
                   <button className='saveBtn'>Save</button>
                </div>
            </div>
        </div>
    )
}


export default Post;