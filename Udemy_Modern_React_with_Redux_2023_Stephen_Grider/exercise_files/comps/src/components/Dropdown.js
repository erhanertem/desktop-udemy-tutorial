import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = event => {
      // console.log(event.target);
      // console.log(divEl.current);
      // Check if divEl reference exists
      if (!divEl.current) {
        return;
      }
      // If divEl reference exists check if user clicked inside the HTML element referenced by divEl. If not set the dropdown to close.
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true); //VERY IMPORTANT!! By designating true, we are initiating addEventListener @ capturing phase prior to handle React component event handler to buy some time to avoid React update time and event bubbling mismatch.

    //Cleanup eventlistener after removal
    // const cleanUp = () => {
    //   document.removeEventListener('click', handler);
    // };
    // return cleanUp;
    return () => {
      document.removeEventListener('click', handler);
      console.log('eventhandler removed');
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen); //regular usecase
    // setIsOpen(currentIsOpen => !currentIsOpen); //functional style hi-speed click error proof
  };

  const handleOptionClick = option => {
    // console.log('I should close');
    //close down the drop down menu
    setIsOpen(false);
    //what option did the user clicked?
    // console.log(option);
    onChange(option);
  };

  const renderedOptions = options.map(option => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // let content;
  // selection ? (content = selection.label) : (content = 'Select...');

  return (
    <div ref={divEl} className="w-48 relative">
      {/* <div onClick={handleClick}>{content}</div> */}
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* if value is null provide select... else
        provide the selection state label property */}
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
