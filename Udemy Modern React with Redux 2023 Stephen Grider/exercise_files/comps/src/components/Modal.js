import ReactDOM from 'react-dom';
import { useEffect } from 'react';

/* 
VERY IMPORTANT!!
#1. WE CREATE A SOVEREIGN DIV CONTAINER TO LIBERIZE THE MODAL FROM ANY RELATIVE MARKED PARENT ELEMENT OTHERWISE MODAL WILL BE TRAPPED INSIDE THE PARENT ELEMENT REGION NOT THE HTML BODY
#2. WE CREATE A PORTAL FOR THE MODAL TO TAKE IT OFF FROM THE NORMAL FLOW OF THE JSX HTML AND PUT SPECIFICALLY UNDER THAT SOVEREIGN DIV CONTAINER  
*/

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    // Add clear function
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        // when clicked to the background area, the modal gets closed
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
