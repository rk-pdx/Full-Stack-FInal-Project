import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email };

    axios({
      method: 'post',
      url: 'http://localhost:5001/submit',
      data: { user },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate('/');
  };

  return (
    <div className="user-form">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          name="fname"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="Lname">Last name:</label>
        <input
          type="text"
          name="lname"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Signup;
