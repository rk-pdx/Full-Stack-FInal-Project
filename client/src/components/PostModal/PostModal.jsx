import React, {useState} from 'react';
import ReplyWindow from '../ReplyWindow/ReplyWindow';
import Comment from '../Comment/Comment';


function PostModal ( { showPostModal, closePostModal, postId, postDate, postTitle, userId, 
                      postCategory, postBody, repliesArray } ) {

    if (!showPostModal) return null;

    const [postReplies, setPostReplies] = useState([]);
    const [showReplyWindow, setShowReplyWindow] = useState(false);
    const GET_REPLY_CONTENT_ENDPOINT = '/getReplyContent';
    
    // TODO: Make a Fetch() API call to the backend, passing in each of the reply_id in repliesArray
    //       to receive the relevant reply content.
    const populatePostReplies = () => {
        setPostReplies(
            [
                {
                    comment_id: 1,
                    parent_id: 0,
                    body: 'This is the first comment.'
                },
                {
                    comment_id: 2,
                    parent_id: 0,
                    body: 'This is the another comment.'
                },
                {
                    comment_id: 3,
                    parent_id: 1,
                    body: 'This is a reply to a comment.'
                },
            ]
        );
    }

    const createReplyBtn_HandleClick = () => {
        setShowReplyWindow(true);
    }

    return (
        <div className='overlay'>
            <div className='modalContainer'>
                <div className='modalRight'>
                    <button className='closeBtn' onClick={closePostModal}> X </button>
                    <div className='content'>
                        <h1>{postTitle}</h1>
                        <p>
                            {postBody}
                        </p>
                        <div className='postStats'>
                            {postDate}
                        </div>
                        <div className='repliesSection'>
                            <button className='createReplyBtn' onClick={createReplyBtn_HandleClick}>Reply</button>
                            <ReplyWindow showReplyWindow={showReplyWindow} closeBtn_HandleClick={() => {setShowReplyWindow(false)}}/>

                            <div className='commentContainer'>
                                {/* for all replies:
                                        create a <Comment /> and append it to the correct div
                                */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostModal;