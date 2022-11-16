import { Route, Routes, Link } from 'react-router-dom';
import User from './User';
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
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
      {/* <Routes>
        <Route path="user" element={<User />} />
        <Route path="*" element={<p>Route not found</p>} />
      </Routes> */}
    </>
  );
};

export default Navbar;
