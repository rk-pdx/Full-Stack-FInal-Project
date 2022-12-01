import React, { useEffect, useState } from 'react';
import '../Reply/Reply.css';


export default function Reply ({body, author}) {

    const [showComment, setShowComment] = useState(true);


    const collapseBtn_HandleClick = () => {
        setShowComment(prev => !prev);
    }


    const returnCollapseKeyword = () => {
        if (showComment) return 'hide comment';
        else return 'show comment';
    }

    
    return (
        <div className='reply'>
            <div className='authorName'>
                <hr></hr>
                    
                    Comment by <span>{author} &ensp;</span>
                    <button className='collapseBtn' onClick={collapseBtn_HandleClick}>
                        {returnCollapseKeyword()}
                    </button>
                    
            </div>
            {(showComment === true ? (
                <p> &nbsp; {body}</p>
            ) : (
                null
            ))}
            
            
        </div>
    )
}