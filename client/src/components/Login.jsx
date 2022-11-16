import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email };
    fetch('http://localhost:5001/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json ;charset=UTF-8',
        Authorization: 'this-can-be-anything',
      },
      body: JSON.stringify(user),
    }).then((data) => {
      console.log(data);
    });
    navigate('/');
  };

  return (
    <div className='user-form'>
      <h1>Login</h1>
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
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
