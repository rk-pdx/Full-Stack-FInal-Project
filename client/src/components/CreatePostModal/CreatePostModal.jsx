import React, {useState} from 'react'
import './CreatePostModal.css';


function CreatePostModal({open, onClose}) {

    if (!open) return null;

    const [title, setTitle] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    return (
        <div className='overlay'>
            <div className='modalContainer'>
                <div className='modalRight'>
                    <button className='closeBtn' onClick={onClose }> X </button>
                    <div className='content'>
                        <h1>content</h1>

                        <form onSubmit={handleSubmit}>
                            <label>
                                First Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setTitle(e.target.value)}
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


{/* <Background>
<ModalWrapper showModal={props.showModal}>
    <ModalContent>
        <h1> Are you ready?</h1>
        <form>

        </form>
        <button>Join now</button>
    </ModalContent>
    <CloseModalButton aria-label='Close modal' onClick={() => props.setShowModal
    (prev => !prev)} />
</ModalWrapper>
</Background> */}

export default CreatePostModal