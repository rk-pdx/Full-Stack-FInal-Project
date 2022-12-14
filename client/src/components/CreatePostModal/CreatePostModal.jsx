import React, { useState } from 'react';
import axios from 'axios';
import './CreatePostModal.css';

function CreatePostModal({ open, onClose, user, setPostData }) {
  // if open is false, then this modal should return nothing
  if (!open) return null;

  // state for title, category and body
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postBody, setPostBody] = useState('');

  // function to generate random id (source in journal)
  const generatePostId = () => {
    return Math.random().toString().slice(2, 11);
  };


  // handles submission of form. Generates random date. Source in journal.
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const postId = generatePostId();

    let postDate = new Date();
    const dd = String(postDate.getDate()).padStart(2, '0');
    const mm = String(postDate.getMonth() + 1).padStart(2, '0');
    const yyyy = postDate.getFullYear();

    postDate = mm + '/' + dd + '/' + yyyy;

    const userId = user._id;
    const repliesArray = [];
    const dataToSend = {
      postId,
      postDate,
      postTitle,
      userId,
      postCategory,
      postBody,
      repliesArray,
    };

    axios({
      method: 'POST',
      url: 'http://localhost:5001/createPost',
      data: { dataToSend },
    })
      .then((result) => {
        console.log(result);
        setPostData((current) => [...current, dataToSend]);
        onClose();
      })
      .catch((err) => {
        console.log('Error: ', err);
        onClose();
      });
  };

  return (
    <div className='createPostModal'>
      <div className='createPostModalOverlay'>
        <div className='createPostModalContent'>
          <form className='createPostModalForm' onSubmit={handleSubmit}>
            <h1 className='mt-2 mb-4'>Post Submission</h1>

            <label htmlFor='title'>Title</label>
            <input
              type='text'
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              id='title'
              required
            />

            <br></br>
            <br></br>

            <label htmlFor='category'>Category</label>
            <input
              type='text'
              value={postCategory}
              onChange={(e) => setPostCategory(e.target.value)}
              id='category'
              required
            />

            <br></br>
            <br></br>

            <label htmlFor='body'>Body</label>
            <textarea
              rows='5'
              cols='80'
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              id='body'
              required
            ></textarea>

            <br></br>
            <br></br>

            <input className='btn btn-primary' type='submit' value='Submit' />
            <button className='closeBtn' onClick={onClose}>
              {' '}
              Cancel{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;
