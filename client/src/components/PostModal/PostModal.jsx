import React, {useEffect, useState} from 'react';
import ReplyModal from '../ReplyModal/ReplyModal';
import Comment from '../Comment/Comment';
import '../PostModal/PostModal.css';
import axios from 'axios';
import uuid from 'react-uuid';


function PostModal ( { hide, showPostModal, closePostModal, postId, postDate, postTitle, userId, 
                      postCategory, postBody, repliesArray } ) {

    const [postReplies, setPostReplies] = useState('');
    const [hideReplyModal, setHideReplyModal] = useState(true);
    const [hidePostModal, setHidePostModal] = useState(hide);

    const getAllRepliesByTitle = async () => {
        let result = await axios.get('http://localhost:5001/getAllRepliesByTitle', {params: {pTitle: postTitle}}).then((res) => {
            
            setPostReplies(res.data);
        });
    }

    getAllRepliesByTitle();


    // Handles displaying the add reply content
    const addReply = () => {
        // displays the html for adding replys
        // false is setting hidden to false
        setHideReplyModal(false);
    }

    const processReply = async (replyDoc) => {
        await axios.post('http://localhost:5001/processReply', replyDoc).then((res) => {
        });
    };

    // Handles sending the data to the database by collecting the user input
    // db functionality needs to be hooked up
    const submitReply = () => {
        // get individual fields
        let replyTitle = document.getElementById("replyTitle").value;
        let replyMessage = document.getElementById("replyBody").value;
        let date = new Date();

        let dateToday = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

        if (postId === undefined) {
            postId = 'NA';
        }

        // create a reply object
        let replyDoc = {id: uuid(), title: replyTitle, message: replyMessage, parentID: postId, parentTitle: postTitle, date: dateToday};

        processReply(replyDoc);

        // for testing
        console.log(replyDoc);

        clearReplyWindow();
        closeReply();
        
    }

    // handles clearing the reply field content on a cancel reply.
    // else user input would stay in fields even if they closed it
    const clearReplyWindow = () => {
        document.getElementById("replyTitle").value = '';
        document.getElementById("replyBody").value = '';
    }

    // handles "closing" the reply fields
    const closeReply = () => { 
        setHideReplyModal(true);
    }

    // hides the post modal
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

export default PostModal;