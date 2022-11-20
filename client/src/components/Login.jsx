import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser, setLogged, logged }) => {
  const [userName, setUserName] = useState('s');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:5001/login',
      data: { userName },
    })
      .then((result) => {
        console.log(result.data);
        if (result.data) {
          console.log(`User found. User name: ${result.data.firstName}`);
          setUser({
            ...result.data,
          });
          if (!logged) {
            setLogged((current) => !current);
          }
          localStorage.setItem('user', JSON.stringify(result.data));
          localStorage.setItem('isLoggedIn', true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    navigate('/account');
  };

  return (
    <div className='user-form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className=''>
        <label htmlFor='uname'>User name:</label>
        <input
          type='text'
          name='uname'
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className='submit-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
