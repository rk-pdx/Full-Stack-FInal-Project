import React, { useEffect, useState } from 'react';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import Post from '../Post/Post';
import './Dashboard.css';


function Dashboard() {
    
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='dashboardContainer'>
    
            <div className='toolbar'>
                <button className='modalBtn' onClick={() => setOpenModal(true)}>Create Post</button>
                <CreatePostModal open={openModal} onClose={() => setOpenModal(false)}/>    
            </div>

            <div className='postContainer'>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                <Post category='travel' date='today' title='Celebrating the world of digital art and animation at Lightbox Expo 2022.' author='author' numReplies='4'/>
                
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