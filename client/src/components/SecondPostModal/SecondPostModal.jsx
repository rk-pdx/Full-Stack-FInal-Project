import React, { useEffect, useState } from 'react';
import Reply from '../Reply/Reply.jsx';
import uuid from 'react-uuid';
import '../SecondPostModal/SecondPostModal.css';
import axios from 'axios';

// This is the full expanded form of the post, and contains all of the information about the post.
// It is a modal that opens up after the user clicks on the compacted post's title or "see replies" button.

function SecondPostModal ({showSecondPostModal, toggleModal, postId, postDate, postTitle, postAuthor, userId, postCategory, postBody, repliesArray}) {
    // if the instruction is for the post to not be shown, then just return null
    if (!showSecondPostModal) return null;

    // set local state for the replies array (this will hold all the replies for this specific post)
    const [newRepliesArray, setNewRepliesArray] = useState([]);
    // this state holds the reply that is typed by the user.
    const [currentReply, setCurrentReply] = useState();
    
    // this function will get all replies by title, for a specific post id, and then set the newRepliesArray state
    // as this response.
    const handleSubmit2 = () => {
        console.log("hit")
        axios.get('http://localhost:5001/getAllRepliesByTitle', {params: {pTitle: postId}})
        .then((response) => {
            console.log('-------------------------- RESPONSE ON THE FRONTEND --------------------------')
            console.log(response.data);
            setNewRepliesArray(response.data);
        })
    }

    //This is an async/await function that will make a fetch call to the backend, to store the reply that the user
    //typed in.
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


    // Just a simple function that returns either the plural from or singular form of the word 'comment'
    const returnCommentKeyword = () => {
        if (newRepliesArray.length === 1) return 'COMMENT';
        else return 'COMMENTS';
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
                        <br></br>
                        <hr className='commentsSeparator'></hr>
                        <h2 className='commentsHeader'>{newRepliesArray.length} {returnCommentKeyword()} </h2>
                        {(newRepliesArray.length === 0) ? (
                            <div>
                                {handleSubmit2()}
                                <form>
                                    <label htmlFor='reply'></label>
                                    <br></br>
                                    <br></br>
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
                                    <br></br>
                                    <br></br>
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