const SignupPopup = ({ open, setPopup, name }) => {
  if (!open) {
    return null;
  }

  return (
    <div className='signup-pop-up'>
      <div className='signup-pop-upText'>
        <span>Please try again</span>
      </div>
      <button
        className='signup-button-pop'
        onClick={() => {
          setPopup((current) => !current);
        }}
      >
        x
      </button>
    </div>
  );
};

export default SignupPopup;
