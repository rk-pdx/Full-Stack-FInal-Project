import React from 'react';


export default function Comment ( {comment_id, body} ) {

    return (
        <div className={comment_id}>
            {body}
            <div className='commentFooter'> 
                BTN1 BTN2 BTN3
            </div>
        </div>
    )
}