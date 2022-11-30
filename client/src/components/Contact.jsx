import React, {useState} from 'react';
import '../contact.css';
import ContactForm from '../components/ContactForm/ContactForm';


const lorem_ipsem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


export default function Contact () {

  const [openForm, setOpenForm] = useState(false);


  const formBtnContent = () => {
    if (openForm) return 'Close Form';
    else return 'Open Form';
  }
  
  
  const toggleOpenForm = () => {
    setOpenForm(prev => !prev);
  }


  return (
    <div className='container-contact'>
      <div className='contact-title'>
        <h1>Contact Information</h1>
      </div>

      <div className='contact-body'>
          <div className='contact-information'>
            {lorem_ipsem}
          </div>

          <hr className='page-break'></hr>
          <button 
              className='openFormBtn' 
              onClick={toggleOpenForm}>
                {formBtnContent()}
          </button>

          <ContactForm openForm={openForm}></ContactForm>
      </div>
    </div>
  );
}


// const Contact = () => {
//   return (
//     <div className='container-contact'>
//       <p>Contact</p>
//     </div>
//   );
// };