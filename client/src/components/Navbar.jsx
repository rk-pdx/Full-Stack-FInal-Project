import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import User from './User';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Account from './Account';
import Dashboard from './Dashboard/Dashboard.jsx';

const handleLogout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn', true);
};

const Navbar = () => {
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    _id: '',
  });
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setLogged(true);
      const newValues = JSON.parse(loggedInUser);
      setUser((values) => ({
        ...values,
        ...newValues,
      }));
    }
  }, []);

  return (
    <>
      <nav className='nav'>
        <ul className='nav-links'>
          <li className='home-link'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            {!logged ? (
              <Link to='/user'>User</Link>
            ) : (
              <>
                <Link to='/account'>{user._id}</Link>
              </>
            )}
          </li>
          {!logged ? (
            <></>
          ) : (
            <button
              onClick={() => {
                if (logged) {
                  setLogged((current) => !current);
                }
                handleLogout();
                navigate('/');
              }}
            >
              Sign out
            </button>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='user' exact element={<User />} />
        <Route path='about' exact element={<About />} />
        <Route path='contact' exact element={<Contact />} />
        <Route path='account' exact element={<Account user={user} />} />
        <Route
          path='login'
          exact
          element={
            <Login setUser={setUser} setLogged={setLogged} logged={logged} />
          }
        />
        <Route path='signup' exact element={<Signup />} />
        <Route path='*' element={<p>Route not found</p>} />
      </Routes>
    </>
  );
};

export default Navbar;
