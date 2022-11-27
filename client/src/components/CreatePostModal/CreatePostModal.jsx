import React, {useState} from 'react'
import './CreatePostModal.css';


function CreatePostModal({open, onClose, user}) {

    if (!open) return null;

    const [postTitle, setPostTitle] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const [postBody, setPostBody] = useState('');
  
    const generatePostId = () => {
        return Math.random().toString().slice(2,11);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const postId = generatePostId();

        let postDate = new Date();
        const dd = String(postDate.getDate()).padStart(2, '0');
        const mm = String(postDate.getMonth() + 1).padStart(2, '0');
        const yyyy = postDate.getFullYear();

        postDate = mm + '/' + dd + '/' + yyyy;
        
        const userId = user._id;
        const repliesArray = [];
        const dataToSend = { postId, postDate, postTitle, userId, postCategory, postBody, repliesArray };

        fetch('http://localhost:5001/createPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        }).then(() => {
            console.log('Post data submitted to the backend:\n');
            console.log(dataToSend);
        })
    }

    return (
        <div className='overlay'>
            <div className='modalContainer'>
                <div className='modalRight'>
                    <button className='closeBtn' onClick={onClose}> X </button>
                    <div className='content'>
                        <h1>content</h1>

                        <form onSubmit={handleSubmit}>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    value={postTitle}
                                    onChange={e => setPostTitle(e.target.value)}
                                />
                            </label>

                            <label>
                                Category (optional):
                                <input
                                    type="text"
                                    value={postCategory}
                                    onChange={e => setPostCategory(e.target.value)}
                                />
                            </label>

                            <label>
                                Body:
                                <input
                                    type="text"
                                    value={postBody}
                                    onChange={e => setPostBody(e.target.value)}
                                />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreatePostModal