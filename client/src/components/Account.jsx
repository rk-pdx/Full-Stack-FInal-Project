import './account.css';

const Account = ({ user }) => {
  return (
    <div className='account-style'>
      <ul>
        <li>
          User: {user.firstName} {user.lastName}
        </li>
        <li>ID: {user._id}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
};

export default Account;
