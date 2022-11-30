import React, { useEffect, useState } from 'react';
import Reply from '../Reply/Reply.jsx';
import uuid from 'react-uuid';
import '../SecondPostModal/SecondPostModal.css';
import axios from 'axios';


function SecondPostModal ({hide, showPostModal, closePostModal, postId, postDate, postTitle, userId, postCategory, postBody, repliesArray}) {

    const [newRepliesArray, setNewRepliesArray] = useState([]);
    const [currentReply, setCurrentReply] = useState();
    
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        let dataToSend = {
            reply_id: uuid(),
            parent_id: postId,
            body: currentReply
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5001/submitReply',
            data: { dataToSend },
        })
            .then((result) => {
            console.log(result);
            setPostData((current) => [...current, dataToSend]);
            onClose();
            })
            .catch((err) => {
            console.log('Error: ', err);
            onClose();
        });


        await axios.get('http://localhost:5001/getAllRepliesByTitle', {params: {pTitle: postId}})
        .then((response) => {
            alert(response.data);
            console.log(response);
        })


        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:5001/getAllRepliesByTitle',
        //     data: { dataToSend2 },
        // })
        // .then((result) => {
        //     setNewRepliesArray(result);
        //     alert(newRepliesArray);
        //     onClose();
        // })
        // .catch((err) => {
        //     console.log('Error: ', err);
        //     onClose();
        // });
    }


    return (
       <div className='container'>
            {(newRepliesArray.length === 0) ? (
                <form>
                    <label htmlFor='reply'>Reply</label>
                    <input type='text' onChange={(e) => setCurrentReply(e.target.value)} id='reply' required/>
                    <button className='submitBtn' onClick={handleSubmit}>
                        Submit
                    </button>
                    <div className='repliesSection'>
                        {/* {new.map((post, index) => <Reply key={index} {...post} />)} */}

                    </div>
                </form>
            ) : (
                <div>
                    COMMENTS
                    <form>
                        <label htmlFor='reply'>Reply</label>
                        <input type='text' onChange={(e) => setCurrentReply(e.target.value)} id='reply' required/>
                        <button className='submitBtn' onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            )}

       </div>
    )
}

export default SecondPostModal;