import { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [formType, setFormType] = useState(true);

  return (
    <div className='user'>
      <button>
        <Link to='/login' className='user-link'>
          Login
        </Link>
      </button>
      <button>
        <Link to='/signup' className='user-link'>
          Sign up
        </Link>
      </button>
    </div>
  );
};

export default User;
