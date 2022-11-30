import React, { useState } from 'react';
import axios from 'axios';
import './CreatePostModal.css';

function CreatePostModal({ open, onClose, user, setPostData }) {
  if (!open) return null;

  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postBody, setPostBody] = useState('');

  const generatePostId = () => {
    return Math.random().toString().slice(2, 11);
  };

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

    // fetch('http://localhost:5001/createPost', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(dataToSend),
    // }).then(() => {
    //   console.log('Post data submitted to the backend:\n');
    //   console.log(dataToSend);
    // });
    //console.log('createpost: ', dataToSend);
    axios({
      method: 'POST',
      url: 'http://localhost:5001/createPost',
      data: { dataToSend },
    })
      .then((result) => {
        console.log(result);
        //navigate('/login');
        setPostData((current) => [...current, dataToSend]);
      })
      .catch((err) => {
        console.log('Error: ', err);
        //setPopup((current) => !current);
      });
  };


  return (
    <div className='createPostModal'>
      <div className='createPostModalOverlay'>
        <div className='createPostModalContent'>
 
          <form className='createPostModalForm'
                onSubmit={handleSubmit}>
              <h1 className="mt-2 mb-4">Post Submission</h1>
              
              <label className='createPostLabel' for='title'>Title</label>
              <input type='text' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} id='title' required/>

              <br></br>
              <br></br>

              <label for='category'>Category</label>
              <input type='text' value={postCategory} onChange={(e) => setPostCategory(e.target.value)} id='category' required/>

              <br></br>
              <br></br>

              <label for='body'>Body</label>
              <textarea rows='5' cols='80' value={postBody} onChange={(e) => setPostBody(e.target.value)} id='body' required></textarea>

              <br></br>
              <br></br>

              <input className="btn btn-primary" type='submit' value='Submit' />
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