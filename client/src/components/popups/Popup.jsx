const Popup = ({ open, setPopup, author }) => {
  if (!open) {
    return null;
  }

  return (
    <div className='pop-up'>
      <div className='pop-upText'>
        <span>Username: {author._id}</span>
        <span>
          Name: {author.firstName} {author.lastName}
        </span>
        <span>Email: {author.email}</span>
      </div>
      <button
        className='button-pop'
        onClick={() => {
          setPopup((current) => !current);
        }}
      >
        x
      </button>
    </div>
  );
};

export default Popup;
