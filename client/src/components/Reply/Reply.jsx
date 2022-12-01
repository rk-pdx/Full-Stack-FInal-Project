import React, { useEffect, useState } from 'react';


export default function Reply ({body, author}) {
    
    return (
        <div className='reply'>
            <div className='authorName'>
                <hr></hr>
                    Comment by {author}
            </div>
            <p>{body}</p>
            <hr></hr>
        </div>
    )
}