import React from 'react';
import '../DisplayPostModal/DisplayPostModal.css'


function DisplayPostModal({openPostModal, toggle}) {

    if (!openPostModal) return null;

    return (
        <>
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <button className='closeBtn' onClick={toggle}>X</button>
                    <h1>POST TITLE</h1>
                </div>

                <div className='modalBody'>
                    <div className='replies'>
                        reply1
                        <br></br>
                        reply2
                    </div>
                </div>
                    
            </div>
        </>
    );
}


export default DisplayPostModal;