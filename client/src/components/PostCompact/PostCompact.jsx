import React, { useState, useEffect } from 'react';
import PostModal from '../PostModal/PostModal';
import Popup from '../popups/Popup';
import axios from 'axios';
import ReplyModal from '../ReplyModal/ReplyModal';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import '../PostCompact/PostCompact.css';
import SecondPostModal from '../SecondPostModal/SecondPostModal.jsx';


function PostCompact({postId, postDate, postTitle, userId, postCategory, postBody, repliesArray,}) {

  const [postAuthor, setPostAuthor] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);
  const [author, setAuthor] = useState({
    email: '',
    firstName: '',
    lastName: '',
    _id: '',
  });
  const [hideReplyModal, setReplyModal] = useState(true);
  // Sets the popup to show or not.
  const [popup, setPopup] = useState(false);
  

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

    fetchData().catch((err) => console.log('Error: ', err));
  }, []);


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


  const [hidePostModal, setHidePostModal] = useState(true);


  const repliesBtn_HandleClick = () => {
    setShowPostModal(true);
    setHidePostModal(false);
    document.getElementById("pModal").hidden = false;
  };


  const closePostModal = () => {
    setShowPostModal(false);
  };


  const toggleShowReply = () => {
    setReplyModal(hideReplyModal === true ? false : true)
  }


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
      <SecondPostModal
              hide = {hidePostModal}
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
  );
}


export default PostCompact;



