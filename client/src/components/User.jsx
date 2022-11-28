import { Link } from 'react-router-dom';
import '../user.css';

const User = () => {
  return (
    <div className='container-wrap'>
      <div className='user'>
        <Link to='/login' className='user-link ex2'>
          Login
        </Link>
        <Link to='/signup' className='user-link ex2'>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default User;
