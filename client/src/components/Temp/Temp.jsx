import React, {useState} from 'react';


function Temp({id, title, threads}) {
    
    const [unpackedThreads, setUnpackedThreads] = useState([]);

    function foo (threads) {
        setUnpackedThreads([1,2,3]);        
    }

    return (
        <div>
            {id}
            <br></br>
            {title}
            <br></br>
            <div>
                {(unpackedThreads.length === 0) ? (
                    <div>
                        Loading comments...
                        {foo(threads)}
                    </div>

                ) : (<div>comments</div>)}

            </div>
        </div>
    );
}


export default Temp;