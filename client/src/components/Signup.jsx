import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupPopup from './popups/SignupPopup';
import axios from 'axios';

// The signup function will render the signup page.
// It also handles posting a new user to the express server
// and handling any errors that occur.
const Signup = () => {
  // States
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  // Unused function at this time.
  // const HandleClick_Popup = () => {
  //   setPopup((current) => !current);
  // };

  // Hanndles posting an author/user to the express server.
  const handleSubmit = (e) => {
    e.preventDefault();

    const Author = { firstName, lastName, _id: userName, email };

    axios({
      method: 'post',
      url: 'http://localhost:5001/signup',
      data: { Author },
    })
      .then((result) => {
        navigate('/login');
      })
      .catch((err) => {
        console.log('Error: ', err);
        setPopup((current) => !current);
      });
  };

  return (
    <div className='container-wrap'>
      <div className='user-container'>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor='fname'>First name:</label>
          <input
            type='text'
            name='fname'
            required
            onChange={(e) => setFirstName(e.target.value.replaceAll(' ', ''))}
            className='signup-input'
            placeholder='First name'
          />
          <label htmlFor='Lname'>Last name:</label>
          <input
            type='text'
            name='lname'
            required
            onChange={(e) => setLastName(e.target.value.replaceAll(' ', ''))}
            className='signup-input'
            placeholder='Last name'
          />
          <label htmlFor='uname'>User name:</label>
          <input
            type='text'
            name='uname'
            required
            onChange={(e) => setUserName(e.target.value.replaceAll(' ', ''))}
            className='signup-input'
            placeholder='User name'
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            required
            onChange={(e) => setEmail(e.target.value.replaceAll(' ', ''))}
            className='signup-input'
            placeholder='Email'
          />
          <button type='submit' className='signup-button'>
            Login
          </button>
          <SignupPopup open={popup} setPopup={setPopup} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
