import React, { useEffect, useState } from 'react';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import Post from '../Post/Post'
import './Dashboard.css';


function Dashboard() {
    
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='dashboardContainer'>

            <div className='toolbar'>
                <button className='modalBtn' onClick={() => setOpenModal(true)}>Create Post</button>
                <CreatePostModal open={openModal} onClose={() => setOpenModal(false)}/>    
            </div>

            <div className='featuredPosts'>
                <div className='feature'>
                <FeaturedPost category='travel' date='November 22, 2022' title='Portland, Oregon is the most beautiful city in the world.' author='Author_name' numReplies='4' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
'/>
                </div>
                <div className='feature'>
                    <FeaturedPost category='travel' date='November 22, 2022' title='Portland, Oregon is the most beautiful city in the world.' author='Author_name' numReplies='4' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
'/>
                </div>
            </div>

            <div className='postContainer'>
                <Post category='travel' date='November 22, 2022' title='Portland, Oregon is the most beautiful city in the world.' author='Author_name' numReplies='4' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
            </div>
            
        </div>
    );
}


export default Dashboard;

    //const [backendData, setBackendData] = useState([{}]);
    // <div>
    //     {(typeof backendData.posts === 'undefined') ? (
    //         <p>Loading...</p>
    //     ) : (
    //         backendData.posts.map((post, i) => (
    //             <p key={i}>{post}</p>
    //         ))
    //     )}
    // </div>





    // const [backendData, setBackendData] = useState([{}]);
    // const [showModal, setShowModal] = useState(false);

    // const openModal = () => {
    //     setShowModal(prev => !prev);
    // }

    // useEffect(() => {
    //     fetch("http://localhost:5001/api").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     )
    // }, []);
    
    // return (
    //     <div>
    //         <Container>
    //             <Button onClick={openModal}>I'm a modal</Button>
    //             <CreatePostModal showModal={showModal} setShowModal={setShowModal} />
    //         </Container>
    //     </div>
    // )