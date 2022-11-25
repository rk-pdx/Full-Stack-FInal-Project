import React, {useState} from 'react';
import PostModal from '../PostModal/PostModal';


function PostCompact ( { postId, postDate, postTitle, userId, postCategory, postBody, repliesArray } ) {
    const [postAuthor, setPostAuthor] = useState('');
    const [showPostModal, setShowPostModal] = useState(false);
    const GET_AUTHOR_NAME_ENDPOINT = '/getAuthorName';
    let postData;

    // TODO: Make a Fetch() API call to the backend, passing in the userId, to receive the username.
    //       ENDPOINT: localhost:5001/GET_AUTHOR_NAME_ENDPOINT
    const populatePostAuthor = () => {
        setPostAuthor('username');
    }

    const repliesBtn_HandleClick = () => {
        setShowPostModal(true);
    }

    const closePostModal = () => {
        setShowPostModal(false);
    }


    return (
        <div>
            {(postAuthor === '') ? (
                <div>
                    loading post...
                    {populatePostAuthor()}
                </div>
            ) : (
                <div className="post">
                    <div className="postContent">
                        <span className='postCategory'>{postCategory}</span>
                        <span className='postDate'>{postDate}</span>
                        <div className='postTitle'>{postTitle}</div>
                        <div className='postBody'>
                            <p className='postBodyContent'>{postBody}</p>
                        </div>
                        <div className='postStats'>
                            <button className='authorBtn'>{postAuthor}</button>

                            {(repliesArray.length !== 0) ? (
                                <div>
                                    <button className='repliesBtn' onClick={repliesBtn_HandleClick}>
                                        {repliesArray.length} replies
                                    </button>
                                    <PostModal 
                                        showPostModal={showPostModal}
                                        closePostModal={closePostModal}
                                        postId={postId}
                                        postDate={postDate}
                                        postTitle={postTitle}
                                        userId={userId}
                                        postCategory={postCategory}
                                        postBody={postBody}
                                        repliesArray={repliesArray}
                                    />
                                </div>
                             ) : (0)}
                           
                            <button className='saveBtn'>Save</button>
                        </div>
                    </div>
                 </div>
            )}
        </div>
    );
}

// function Post({category, date, title, author, numReplies, body}) {
//     return (
//         <div className="post">
//             <div className="postContent">
//                 <span className='postCategory'>{category}</span>
//                 <span className='postDate'>{date}</span>
//                 <div className='postTitle'>{title}</div>
//                 <div className='postBody'>
//                     <p className='postBodyContent'>{body}</p>
//                 </div>
//                 <div className='postStats'>
//                    <button className='authorBtn'>{author}</button>
//                    <button className='repliesBtn'>{numReplies}</button>
//                    <button className='saveBtn'>Save</button>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default PostCompact;