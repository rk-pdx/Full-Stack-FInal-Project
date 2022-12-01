import React, { useEffect, useState } from 'react';
import '../PostModal/PostModal.css';
import axios from 'axios';
import uuid from 'react-uuid';
import Replies from '../RepliesCollection/Replies';

/*
This is the full expanded form of the post, and contains all of the information about the post.
It is a modal that opens up after the user clicks on the compacted post's title or "see replies" button.
This is a WIP (scrapped) part of the project. Instead of this, we used SecondPostModal.
*/

function PostModal({
  hide,
  showPostModal,
  closePostModal,
  postId,
  postDate,
  postTitle,
  userId,
  postCategory,
  postBody,
  repliesArray,
}) {
  // state for all replies for the specific post
  const [postReplies, setPostReplies] = useState([]);
  // state for the reply modal to be shown
  const [hideReplyModal, setHideReplyModal] = useState(true);
  const [hidePostModal, setHidePostModal] = useState(hide);
  const [hideReplies, setHideReplies] = useState(true);
  const [newTitle, setTitle] = useState('');
  const [newMessage, setMessage] = useState('');

  const toggleReplies = () => {
    populateReplies();
    setHideReplies(hideReplies === true ? false : true);
    console.log(postReplies);
  }

  const getAllRepliesByTitle = async () => {
    let result = await axios.get('http://localhost:5001/getAllRepliesByTitle', {
        params: { pTitle: postTitle },
      })
      .then((res) => {
        setPostReplies(res.data);
      });
  };

  const populateReplies = async () => {
    await getAllRepliesByTitle();
  }

  // Handles displaying the add reply content
  const addReply = () => {
    // displays the html for adding replys
    // false is setting hidden to false
    setHideReplyModal(false);
  };

  const processReply = async (replyDoc) => {
    await axios
      .post('http://localhost:5001/processReply', replyDoc)
      .then((res) => {});
  };

  // Handles sending the data to the database by collecting the user input
  // db functionality needs to be hooked up
  const submitReply = () => {
    // get individual fields
    //let replyTitle = document.getElementById('replyTitle').value;
    //let replyMessage = document.getElementById('replyBody').value;

    let date = new Date();

    let dateToday = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

    if (postId === undefined) {
      postId = 'NA';
    }

    let replyDoc = {
      id: uuid(),
      author: userId,
      title: newTitle,
      message: newMessage,
      parentID: postId,
      parentTitle: postTitle,
      date: dateToday,
    };

    processReply(replyDoc);

    // for testing
    console.log(replyDoc);

    updatePostReplyCount(postTitle);
    populateReplies();

    clearReplyWindow();
    closeReply();
  };

  const updatePostReplyCount = async (pTitle) => {
    await axios.put('http://localhost:5001/updatePostReplyCount', pTitle);
    //.post('http://localhost:5001/processReply', replyDoc)
    //.then((res) => {});
  }

  // handles clearing the reply field content on a cancel reply.
  // else user input would stay in fields even if they closed it
  const clearReplyWindow = () => {
    setTitle('');
    setMessage('');
  };

  // handles "closing" the reply fields
  const closeReply = () => {
    setHideReplyModal(true);
  };

  // hides the post modal
  const closePostModalHtml = () => {
    document.getElementById('pModal').hidden = true;
    setHideReplyModal(true);
  };

  return (
    <div id='pModal' hidden={hidePostModal}>
      <div className='postModal'>
        <div className='postModalOverlay'>
          <div className='postModalContent'>
            <div>
              <span>{postCategory}</span>
              <span>{postDate}</span>
              <h2>{postTitle}</h2>
            </div>
            <p>{postBody}</p>
            <button className='btn btn-primary' onClick={addReply}>
              Add Reply
            </button>
            <button className='btn btn-primary' onClick={toggleReplies}>Toggle Replies</button>
            <button className='cancel' onClick={closePostModalHtml}>
              Cancel
            </button>
            <div id='formContent' hidden={hideReplyModal}>
              <div>
                <label id='replyTitleLabel' htmlFor='replyTitle'>
                  Title
                </label>{' '}
                <br />
                <input id='replyTitle' type='text' value={newTitle} onChange={(val) => setTitle(val.target.value)}></input> <br />
              </div>
              <div>
                <label id='replyBodyLabel' htmlFor='replyBody'>
                  Reply Message:
                </label>{' '}
                <br />
                <input id='replyBody' type='text' value={newMessage} onChange={(val) => setMessage(val.target.value)}></input>
              </div>
              <button id='submitbtn' type='submit' onClick={submitReply}>
                Submit
              </button>
              <button id='cancelbtn' onClick={closeReply}>
                Close
              </button>
            </div>
            <div id="replies" hidden={hideReplies}>
                {postReplies.map((replyToDisplay, index) => <Replies key ={index} reply={replyToDisplay} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
