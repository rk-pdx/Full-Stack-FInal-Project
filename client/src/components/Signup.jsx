import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Author = { firstName, lastName, _id: userName, email };

    axios({
      method: 'post',
      url: 'http://localhost:5001/signup',
      data: { Author },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate('/login');
  };

  return (
    <div className='user-form'>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} className=''>
        <label htmlFor='fname'>First name:</label>
        <input
          type='text'
          name='fname'
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor='Lname'>Last name:</label>
        <input
          type='text'
          name='lname'
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor='uname'>User name:</label>
        <input
          type='text'
          name='uname'
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='submit-button'>Login</button>
      </form>
    </div>
  );
};

export default Signup;
