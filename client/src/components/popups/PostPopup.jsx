const PostPopup = ({ open, setPopup }) => {
  if (!open) {
    return null;
  }

  return (
    <div className='post-pop-up'>
      <div className='post-pop-upText'>
        <span>Please log in to post</span>
      </div>
      <button
        className='post-button-pop'
        onClick={() => {
          setPopup((current) => !current);
        }}
      >
        x
      </button>
    </div>
  );
};

export default PostPopup;
