import React from 'react';
import '../RepliesCollection/Replies.css';

function Replies ({reply}) {
    console.log(reply);
    console.log(reply.author)

 return (
    <div id="replies">
    <hr/>
    <h3 className="metadata">{reply.author}  -  {reply.date}</h3>
    <h2>{reply.title}</h2>
    <p className="replyMessage">{reply.message}</p>
    <hr/>
    </div>
    );
}

export default Replies;