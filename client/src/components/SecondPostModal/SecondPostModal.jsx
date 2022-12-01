import React, { useEffect, useState } from 'react';
import Reply from '../Reply/Reply.jsx';
import uuid from 'react-uuid';
import '../SecondPostModal/SecondPostModal.css';
import axios from 'axios';


function SecondPostModal ({showSecondPostModal, toggleModal, postId, postDate, postTitle, postAuthor, userId, postCategory, postBody, repliesArray}) {

    if (!showSecondPostModal) return null;

    const [newRepliesArray, setNewRepliesArray] = useState([]);
    const [currentReply, setCurrentReply] = useState();
    

    const handleSubmit2 = () => {
        console.log("hit")
        axios.get('http://localhost:5001/getAllRepliesByTitle', {params: {pTitle: postId}})
        .then((response) => {
            console.log('-------------------------- RESPONSE ON THE FRONTEND --------------------------')
            console.log(response.data);
            setNewRepliesArray(response.data);
        })
    }
    
    const handleSubmit = async (evt) => {
        if (currentReply === undefined) {
            alert('Please enter a comment.');
            return;
        }

        evt.preventDefault();

        let dataToSend = {
            reply_id: uuid(),
            parent_id: postId,
            body: currentReply
        }

        await axios({
            method: 'POST',
            url: 'http://localhost:5001/submitReply',
            data: { dataToSend },
        })
        .then(
            handleSubmit2()
        )
        .catch((err) => {
            console.log('Error: ', err);
            onClose();
        });
    }


    return (
        <div className='secondPostModal'>
            <div className='secondPostModalOverlay'>
                <div className='secondPostModalContent'>
                    <button onClick={toggleModal}>Close</button>
                    <h3>{postDate}</h3>
                    <h1>{postTitle}</h1>
                    <h3>Published in <span>{postCategory}</span></h3>
                    <h3>Author: <span>{postAuthor}</span></h3>
                    <p>{postBody}</p>

                    <div className='replies'>
                        <hr className='commentsSeparator'></hr>
                        <h2 className='commentsHeader'>{newRepliesArray.length} COMMENTS </h2>
                        {(newRepliesArray.length === 0) ? (
                            <div>
                                {handleSubmit2()}
                                <form>
                                    <label htmlFor='reply'></label>
                                    {/* <input type='text' onChange={(e) => setCurrentReply(e.target.value)} id='reply' required/> */}
                                    <textarea
                                        rows='5'
                                        cols='80'
                                        onChange={(e) => setCurrentReply(e.target.value)}
                                        id='reply'
                                        placeholder='enter comment here...'
                                        required></textarea>
                                    <br></br>
                                    <button className='submitBtn' onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                <div className='repliesSection'>
                                    {newRepliesArray.map((reply, index) => <Reply key={index} body={reply['dataToSend']['body']} author={postAuthor}/>)}
                                </div>
                                <form>
                                    <label htmlFor='reply'></label>
                                    {/* <input type='text' onChange={(e) => setCurrentReply(e.target.value)} id='reply' required/> */}
                                    <hr></hr>
                                    <h3 className='commentInstructionHeader'>Enter your comment here (logged in as <span className='boldedAuthor'>{postAuthor}</span>):</h3>
                                    <textarea
                                        rows='5'
                                        cols='80'
                                        onChange={(e) => setCurrentReply(e.target.value)}
                                        id='reply'
                                        placeholder='enter comment here...'
                                        required></textarea>
                                    <br></br>
                                    <button className='submitBtn' onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    
                </div>
            </div>
        </div>
    )
}


export default SecondPostModal;