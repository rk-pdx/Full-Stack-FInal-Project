import React from 'react';


export default function ReplyWindow ({showReplyWindow, closeBtn_HandleClick}) {
    if (!showReplyWindow) return null;


    return (
        <div>
            <button onClick={closeBtn_HandleClick}>X</button>
            <input></input>
            
        </div>
    )
}