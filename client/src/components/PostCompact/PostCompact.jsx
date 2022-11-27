import React, { useState, useEffect } from 'react';
import PostModal from '../PostModal/PostModal';
import Popup from '../Popup';
import axios from 'axios';

function PostCompact({
  postId,
  postDate,
  postTitle,
  userId,
  postCategory,
  postBody,
  repliesArray,
}) {
  const [postAuthor, setPostAuthor] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);
  const [author, setAuthor] = useState({
    email: '',
    firstName: '',
    lastName: '',
    _id: '',
  });
  // Sets the popup to show or not.
  const [popup, setPopup] = useState(false);
  // TODO: Make a Fetch() API call to the backend, passing in the userId, to receive the username.
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:5001/login', { params: { name: userId } })
        .then((result) => {
          setAuthor((values) => ({
            ...values,
            ...result.data,
          }));
          setPostAuthor(result.data._id);
        });
    };

    fetchData().catch(console.error());
  }, []);
  //console.log(userId);

  const populatePostAuthor = () => {
    // useEffect(() => {
    //     fetch(`https://localhost:5001/getAuthorNames`).then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setPostAuthor(data)
    //         }
    //     )
    // }, []);
    setPostAuthor('Author');
  };

  const repliesBtn_HandleClick = () => {
    setShowPostModal(true);
  };

  const closePostModal = () => {
    setShowPostModal(false);
  };

  // TODO: finish this function: redirect the user to the appropriate user profile
  const authorBtn_HandleClick = () => {
    // const fetchData = async () => {
    //   await axios
    //     .get('http://localhost:5001/login', { params: { name: userId } })
    //     .then((result) => {
    //       setAuthor((values) => ({
    //         ...values,
    //         ...result.data,
    //       }));
    //     });
    // };

    // fetchData().catch(console.error());

    setPopup((current) => !current);
  };

  return (
    <div>
      {postAuthor === '' ? (
        <div>
          loading post...
          {populatePostAuthor()}
        </div>
      ) : (
        <div className='post'>
          <div className='postContent'>
            <span className='postCategory'>{postCategory}</span>
            <span className='postDate'>{postDate}</span>
            <div className='postTitle'>{postTitle}</div>
            <div className='postBody'>
              <p className='postBodyContent'>{postBody}</p>
            </div>
            <div className='postStats'>
              <div>
                <button className='authorBtn' onClick={authorBtn_HandleClick}>
                  {postAuthor}
                </button>
                <Popup open={popup} author={author} setPopup={setPopup} />
              </div>
              {repliesArray.length !== 0 ? (
                <div>
                  <button
                    className='repliesBtn'
                    onClick={repliesBtn_HandleClick}
                  >
                    {repliesArray.length} replies
                  </button>
                  <PostModal
                    showPostModal={showPostModal}
                    closePostModal={closePostModal}
                    postId={postId}
                    postDate={postDate}
                    postTitle={postTitle}
                    userId={userId}
                    postCategory={postCategory}
                    postBody={postBody}
                    repliesArray={repliesArray}
                  />
                </div>
              ) : (
                0
              )}

              <button className='saveBtn'>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCompact;
