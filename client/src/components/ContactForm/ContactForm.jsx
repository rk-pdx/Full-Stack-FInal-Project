import React, {useState} from 'react'
import '../ContactForm/ContactForm.css';
import axios from 'axios';


export default function ContactForm ({openForm}) {

    if (!openForm) return null;


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [displayErrorMsg, setDisplayErrorMsg] = useState(false);


    let errorMsg;

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const dataToSend = {
            firstName,
            lastName,
            email,
            body
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5001/contactAuthors',
            data: { dataToSend },
        })
        .catch((err) => {
            errorMsg = 'Sorry, an error occurred! Your email could not be sent. Please try again.\n\nThe exact error was:\n' + err;
            setDisplayErrorMsg(prev => !prev);
            alert(errorMsg);
        });
    };


    return (
        <div>
            <form className='contactForm'>
                <label for='firstName'>First Name</label>
                <input type='text' onChange={(e) => setFirstName(e.target.value)} id='firstName' required/>

                <br></br>
                <br></br>

                <label for='lastName'>Last Name</label>
                <input type='text' onChange={(e) => setLastName(e.target.value)} id='lastName' required/>

                <br></br>
                <br></br>

                <label for='email'>Email</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)} id='email' required/>

                <br></br>
                <br></br>

                <label for='body'>Body</label>
                <textarea rows='5' cols='80' onChange={(e) => setBody(e.target.value)} id='body' required></textarea>

                <br></br>
                <br></br>

                <button className='submitBtn' onClick={(handleSubmit)}>Submit</button>
            </form>
        </div>
    )
}