import React, { useEffect, useState } from 'react';
import '../Reply/Reply.css';


export default function Reply ({body, author}) {
    
    return (
        <div className='reply'>
            <div className='authorName'>
                <hr></hr>
                    Comment by <span>{author}</span>
            </div>
            <p>{body}</p>
            
        </div>
    )
}