import React, { useEffect, useState } from 'react';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import PostCompact from '../PostCompact/PostCompact';
import axios from 'axios';
import './Dashboard.css';
import PostPopup from '../popups/PostPopup';

function Dashboard({ user, logged }) {
  const [postData, setPostData] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [logIn, setLogIn] = useState(logged);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setLogIn(logged);
  }, [logged]);

  // We will fetch all the Posts with this get call to the server.
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:5001/getPosts').then((result) => {
        setPostData(result.data);
      });
    };

    fetchData().catch((err) => console.log('Error: ', err));
  }, []);

  const ModalBtn_HandleClick = () => {
    if (logIn) {
      setOpenModal(true);
    } else {
      alert('Please log in to post');
    }
  };

  const HandleClick_Popup = () => {
    if (logIn) {
      setOpenModal(true);
    } else {
      setPopup((current) => !current);
    }
  };


  const populatePostData = () => {

    const postData = [
      {
        postId: '182844099',
        postDate: '11/24/2022',
        postTitle: 'This is a sample post.',
        userId: 'rk24',
        postCategory: 'travel',
        postBody:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        repliesArray: [1],
      },
      {
        postId: '182231321',
        postDate: '11/24/2022',
        postTitle: 'Another post title.',
        userId: 'rk24',
        postCategory: 'Programming',
        postBody:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        repliesArray: [1],
      },
      {
        postId: '182231321',
        postDate: '11/24/2022',
        postTitle: 'Another post title.',
        userId: 'rk24',
        postCategory: 'Programming',
        postBody:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        repliesArray: [1],
      },
    ];

    setPostData(postData);
  };

  return (
    <div className='dashboardContainer'>
      <div className='toolbar'>
        <button className='modalBtn' onClick={HandleClick_Popup}>
          Create Post
        </button>
        <PostPopup open={popup} setPopup={setPopup} />
        <CreatePostModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          user={user}
          setPostData={setPostData}
        />
      </div>

      <div className='postContainer'>
        {postData === '' ? (
          <div>
            {/* <p>Loading posts...</p>
            {populatePostData()} */}
          </div>
        ) : (
          <div>
            
            {postData.map((post, index) => <PostCompact key={index} {...post} />)}
          </div>
        )}
      </div>
    </div>
  );
}


export default Dashboard;