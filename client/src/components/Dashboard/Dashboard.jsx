import React, { useEffect, useState } from 'react';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import './Dashboard.css';


function Dashboard() {

    const [backendData, setBackendData] = useState([{}]);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button className='modalBtn' onClick={() => setOpenModal(true)}>Modal</button>
            <CreatePostModal open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
    );
}


export default Dashboard;



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