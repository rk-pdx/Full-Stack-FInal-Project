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
                    <button onClick={toggleModal}>Close Post</button>
                    <h1>{postTitle}</h1>
                    <h5>Author: {postAuthor}</h5>
                    <p>{postBody}</p>

                    <div className='replies'>
                        <hr className='commentsSeparator'></hr>
                        <h2>COMMENTS</h2>
                        {(newRepliesArray.length === 0) ? (
                            <div>
                                {handleSubmit2()}
                                <form>
                                    <label htmlFor='reply'></label>
                                    <input type='text' onChange={(e) => setCurrentReply(e.target.value)} id='reply' required/>
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
                                    <input type='text' onChange={(e) => setCurrentReply(e.target.value)} id='reply' required/>
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