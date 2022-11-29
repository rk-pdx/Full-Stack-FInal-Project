import { useState } from 'react';
import '../contactAbout.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'This feature is not ready to take messages yet. Thank you for your patience.'
    );
  };
  return (
    <div className='container-wrap'>
      <div className='user-container'>
        <h1>Contact</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Your name:</label>
          <input
            type='text'
            name='name'
            required
            onChange={(e) => setName(e.target.value.replaceAll(' ', ''))}
            className='contact-input'
            placeholder='Your name'
          />
          <label htmlFor='email'>Your email:</label>
          <input
            type='email'
            name='email'
            required
            onChange={(e) => setEmail(e.target.value.replaceAll(' ', ''))}
            className='contact-input'
            placeholder='Your email'
          />
          <>
            <label htmlFor='message'>Your message:</label>
            <textarea
              className='contact-input contact-textarea'
              rows={10}
              placeholder='Your message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </>
          <button type='submit' className='signup-button contact-button'>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
