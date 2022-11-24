import React, {useState} from 'react';


function PostFull ( { postId, postTitle, userId, postCategory, postBody, repliesArray } ) {
    const [postReplies, setPostReplies] = useState([]);
    const GET_REPLY_CONTENT_ENDPOINT = '/getReplyContent';
    
    // TODO: Make a Fetch() API call to the backend, passing in each of the reply_id in repliesArray
    //       to receive the relevant reply content.
    const populatePostReplies = () => {
        setPostReplies([1,2,3]);
    }

    return (
        <div>
            
        </div>
    )
}


export default PostFull;