const Popup = ({ open, setPopup }) => {
  if (!open) {
    return null;
  }
  return (
    <div className='pop-up'>
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
