const LoginPopup = ({ open, setPopup, name }) => {
  if (!open) {
    return null;
  }

  return (
    <div className='login-pop-up'>
      <div className='login-pop-upText'>
        <span>Please try again</span>
      </div>
      <button
        className='login-button-pop'
        onClick={() => {
          setPopup((current) => !current);
        }}
      >
        x
      </button>
    </div>
  );
};

export default LoginPopup;
