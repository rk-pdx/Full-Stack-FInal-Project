import React, { useEffect, useState } from 'react';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import PostCompact from '../PostCompact/PostCompact'
import './Dashboard.css';
import e from 'cors';


function Dashboard({user}) {
        const [postData, setPostData] = useState('');
        const [openModal, setOpenModal] = useState(false);

        const ModalBtn_HandleClick = () => {
            // if (user.id === undefined) {
            //     console.log("HIT");
            //     console.log('Redirect to login page');
            // }
            // else {
            //     setOpenModal(true);
            // }

            setOpenModal(true);
        }

        const populatePostData = () => {
            // TODO: fetch from the backend here

            const postData = [
                    {
                        postId: '182844099',
                        postDate: '11/24/2022',
                        postTitle: 'This is a sample post.',
                        userId: 'rk24',
                        postCategory: 'travel',
                        postBody: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                        repliesArray: [1]
                    }
            ];

            setPostData(postData);
        }


       return ( 
            <div className='dashboardContainer'>
                
                <div className='toolbar'>
                    <button className='modalBtn' onClick={ModalBtn_HandleClick}>Create Post</button>
                    <CreatePostModal open={openModal} onClose={() => setOpenModal(false)} user={user}/>    
                </div>


                <div className='postContainer'>
                    
                    {(postData === '') ? (
                        <div>
                            <p>Loading posts...</p>
                            {populatePostData()}
                        </div>
                    ) : (
                        <PostCompact {...postData[0]}/>
                    )}

                    
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




//         const [openModal, setOpenModal] = useState(false);
//         <div className='dashboardContainer'>

//             <div className='toolbar'>
//                 <button className='modalBtn' onClick={() => setOpenModal(true)}>Create Post</button>
//                 <CreatePostModal open={openModal} onClose={() => setOpenModal(false)}/>    
//             </div>

//             <div className='featuredPosts'>
//                 <div className='feature'>
//                 <FeaturedPost category='travel' date='November 22, 2022' title='Portland, Oregon is the most beautiful city in the world.' author='Author_name' numReplies='4' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// '/>
//                 </div>
//                 <div className='feature'>
//                     <FeaturedPost category='travel' date='November 22, 2022' title='Portland, Oregon is the most beautiful city in the world.' author='Author_name' numReplies='4' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// '/>
//                 </div>
//             </div>

//             <div className='postContainer'>
//                 <Post category='travel' date='November 22, 2022' title='Portland, Oregon is the most beautiful city in the world.' author='Author_name' numReplies='4' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
//             </div>
            
//         </div>




// const [data, setData] = useState([]);

// const obj = {
//     id: 1,
//     title: 'Post Title',
//     threads: [
//                 ['A', ['B', ['A']], ['C']], ['D']
//              ]
// };

// return (
//     <div>
//         <Temp {...obj}/>
//     </div>
// )