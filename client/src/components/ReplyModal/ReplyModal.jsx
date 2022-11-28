import React from 'react';
import { useState } from 'react';
import '../ReplyModal/ReplyModal.css';


function ReplyModal({hide}) {

    console.log("Here======");
    console.log(hide);

    
    // Id values must be inique or modals do not work properly
    // temporary fix
    const replyID = "ReplyBody" + Math.random().toString();
    

    // Method closes the reply modal
    const closeModal = () => {

        // get individual elements
        let replyTitle = document.getElementById("replyTitle").value = '';
        let replyMessage = document.getElementById("replyBody").value = '';

        // set hidden field
        document.getElementById(replyID).hidden = true;
    }

    // method submits the element content
    const submitReply = () => {
        // get individual fields
        let replyTitle = document.getElementById("replyTitle").value;
        let replyMessage = document.getElementById("replyBody").value;

        // create a reply object
        let replyDoc = {title: {replyTitle}, message: {replyMessage}}

        // for testing
        console.log(replyDoc);

        closeModal();
        
    }

    return <div id={replyID} hidden={hide} className="Test">
        <div className='postModal'>
            <div className='postModalOverlay' >
                <div  className='postModalContent'>
                    <div id="formContent">
                        <div>
                        <label id="replyTitleLabel" for="replyTitle">Title</label> <br/>
                        <input id="replyTitle" type="text"></input> <br/>
                        </div>
                        <div>
                            <label id="replyBodyLabel" for="replyBody">Reply Message:</label> <br/>
                            <input id="replyBody" type="text"></input>
                        </div>

                        <button id="submitbtn" type="submit" onClick={submitReply}>Submit</button>
                        <button id="cancelbtn" onClick={closeModal}>Cancel</button>
                    </div>                    
                </div>
            </div>
        </div>
        </div>
}

export default ReplyModal;