import { Route, Routes, Link } from 'react-router-dom';
import User from './User';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Dashboard from '../Dashboard';
import App from '../App';

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav-links">
          <li className="home-link">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="user" exact element={<User />} />
        <Route path="about" exact element={<About />} />
        <Route path="contact" exact element={<Contact />} />
        <Route path="login" exact element={<Login />} />
        <Route path="signup" exact element={<Signup />} />
        <Route path="*" element={<p>Route not found</p>} />
      </Routes>
    </>
  );
};

export default Navbar;
