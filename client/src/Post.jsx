import React, { useState } from 'react';


function Post(props) {
    const [title, setTitle] = useState(props.title);
    const [author, setauthor] = useState(props.author);
    const [postBody, setpostBody] = useState(props.postBody);
    const [numReplies, setNumReplies] = useState(props.numReplies);

    return (
        <div className='container'>
            <div className='header'>
                {title}
                <br></br>
                {author}
            </div>
            <div className='content'>
                {postBody}
                <br></br>
                <button> {numReplies} </button>
            </div>

        </div>
    )
}


export default Post;