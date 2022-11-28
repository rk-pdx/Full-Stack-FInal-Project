import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginPopup from './popups/LoginPopup';

const Login = ({ setUser, setLogged, logged }) => {
  const [userName, setUserName] = useState('');
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const HandleClick_Popup = () => {
    setPopup((current) => !current);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get('http://localhost:5001/login', { params: { name: userName } })
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
          navigate('/');
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
        console.log(`username: ${userName} not found`);
        setPopup((current) => !current);
      });
  };

  return (
    <div className='user-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor='uname'>User name:</label>
        <input
          type='text'
          name='uname'
          required
          onChange={(e) => setUserName(e.target.value)}
          className='login-input'
          placeholder='User name'
        />
        <button className='login-button'>Login</button>
        <LoginPopup open={popup} setPopup={setPopup} />
      </form>
    </div>
  );
};

export default Login;
