import React, {useState} from 'react';
import ReplyModal from '../ReplyModal/ReplyModal';
import Comment from '../Comment/Comment';
import '../PostModal/PostModal.css';


function PostModal ( { hide, showPostModal, closePostModal, postId, postDate, postTitle, userId, 
                      postCategory, postBody, repliesArray } ) {

    //if (!showPostModal) return null;

    console.log("postID:"+postId);
    const [postReplies, setPostReplies] = useState([]);
    const [showReplyWindow, setShowReplyWindow] = useState(false);

    const [hideReplyModal, setHideReplyModal] = useState(true);
    const [hidePostModal, setHidePostModal] = useState(hide);
    
    
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


    //const createReplyBtn_HandleClick = () => {
    //    setShowReplyWindow(true);
    //}

    const addReply = () => {
        setHideReplyModal(false);
    //    // add below71
    //    //<ReplyModal hide={hideReplyModal}/>
    }
    const submitReply = () => {
        // get individual fields
        let replyTitle = document.getElementById("replyTitle").value;
        let replyMessage = document.getElementById("replyBody").value;

        // create a reply object
        let replyDoc = {title: {replyTitle}, message: {replyMessage}}

        // for testing
        console.log(replyDoc);

        clearReplyWindow();
        closeReply();
        
    }

    const clearReplyWindow = () => {
        document.getElementById("replyTitle").value = '';
        document.getElementById("replyBody").value = '';
    }



    const closeReply = () => { 
        setHideReplyModal(true);
    }

    const closePostModalHtml = () => {
        document.getElementById("pModal").hidden = true;
        setHideReplyModal(true);
    }


    return (
        <div id="pModal" hidden={hidePostModal}>
        <div className='postModal'>
            <div className='postModalOverlay'>
                <div className='postModalContent'>
                    <div>
                        <span>{postCategory}</span>
                        <span>{postDate}</span>
                        <h2>{postTitle}</h2>
                    </div>
                    <p>{postBody}</p>
                    <button className="btn btn-primary" onClick={addReply} >Add Reply</button>
                    <button className="cancel" onClick={closePostModalHtml}>Cancel</button>
                    
        
                    <div id="formContent" hidden={hideReplyModal}>
                        <div>
                        <label id="replyTitleLabel" for="replyTitle">Title</label> <br/>
                        <input id="replyTitle" type="text"></input> <br/>
                        </div>
                        <div>
                            <label id="replyBodyLabel" for="replyBody">Reply Message:</label> <br/>
                            <input id="replyBody" type="text"></input>
                        </div>

                        <button id="submitbtn" type="submit" onClick={submitReply}>Submit</button>
                        <button id="cancelbtn" onClick={closeReply}>Close</button>
                    </div>                    
                </div>
            </div>
        </div>
        </div>
          
    )
}


{/* <div className='modalRight'>

<button className='closeBtn' onClick={closePostModal}> X </button>

<div className='content'>
    <div className='postHeader'>
        <div className='postStats'>
            <span>{postCategory}</span>
            <span>{postDate}</span>
        </div>
        <h1>{postTitle}</h1>
    </div>
    
    <p>
        {postBody}
    </p>
 
    <div className='repliesSection'>
        <button className='createReplyBtn' onClick={createReplyBtn_HandleClick}>Reply</button>
        <ReplyWindow showReplyWindow={showReplyWindow} closeBtn_HandleClick={() => {setShowReplyWindow(false)}}/>

     

    </div>
</div>
</div> */}


export default PostModal;