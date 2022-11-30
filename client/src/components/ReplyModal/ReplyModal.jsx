import React, { useEffect, useState } from 'react';
import '../ReplyModal/ReplyModal.css';
import uuid from 'react-uuid';
import axios from 'axios';

function ReplyModal({
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
  // Id values must be inique or modals do not work properly
  // temporary fix
  const replyID = 'ReplyBody' + Math.random().toString();

  const [newTitle, setTitle] = useState('');
  const [newMessage, setMessage] = useState('');
  const [hideModal, setHideModal] = useState(false);

  // Method closes the reply modal
  const closeModal = () => {
    // get individual elements
    setTitle('');
    setMessage('');

    // set hidden field
    document.getElementById(replyID).hidden = true;
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
    let date = new Date();

    console.log(document.getElementById('replyTitle'));

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

    clearReplyWindow();
    closeModal();
  };

  // handles clearing the reply field content on a cancel reply.
  // else user input would stay in fields even if they closed it
  const clearReplyWindow = () => {
    document.getElementById('replyTitle').value = '';
    document.getElementById('replyBody').value = '';
  };


  // method submits the element content
  //const submitReply = () => {
  //  // get individual fields
  //  let replyTitle = document.getElementById('replyTitle').value;
  //  let replyMessage = document.getElementById('replyBody').value;
//
  //  // create a reply object
  //  let replyDoc = { title: { replyTitle }, message: { replyMessage } };
//
  //  // for testing
  //  console.log(replyDoc);
//
  //  closeModal();
  //};

  return (
    <div id={replyID} hidden={hide} className='Test'>
      <div className='postModal'>
        <div className='postModalOverlay'>
          <div className='postModalContent'>
            <div id='formContent'>
              <div>
                <label id='replyTitleLabel' htmlFor='replyTitle'>
                  Title
                </label>{' '}
                <br />
                <input id='replyTitle' type='text' required value={newTitle} onChange={(val) => setTitle(val.target.value)}></input> <br />
              </div>
              <div>
                <label id='replyBodyLabel' htmlFor='replyBody'>
                  Reply Message:
                </label>{' '}
                <br />
                <input id='replyBody' type='text' required value={newMessage} onChange={(val) => setMessage(val.target.value)}></input>
              </div>
              <button id='submitbtn' type='submit' onClick={submitReply}>
                Submit
              </button>
              <button id='cancelbtn' onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyModal;
