import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  // const [expandedIndex, setExpandedIndex] = useState(0); //1st item on the list is open by default
  const [expandedIndex, setExpandedIndex] = useState(-1); //All items on the list is closed by default

  // //#1. This does not close collpase the item clicked twice
  // const handleClick = nextIndex => {
  //   setExpandedIndex(nextIndex);
  // }; //VERY IMPORTANT! In order to have access to index inside the map function and at the same time take handleClick out of the map function so that we do not declare many handleclicks per index, we call handle click inside the JSX with reference to index thru which we bring about here as a reference.
  // //#2. This collapses the item if clicked the second time
  // const handleClick = nextIndex => {
  //   expandedIndex === nextIndex
  //     ? setExpandedIndex(-1)
  //     : setExpandedIndex(nextIndex);
  // }; //VERY IMPORTANT! In order to have access to index inside the map function and at the same time take handleClick out of the map function so that we do not declare many handleclicks per index, we call handle click inside the JSX with reference to index thru which we bring about here as a reference.
  //#3. Not necessary, but for instance where the user hypotatically presses the clicks at light speed, useState() fails to update that fast as there is a little delay associated with stateUpdate mechanism in React. For that we implement a functinalized version of the setter function with check dependecy on the older state value
  const handleClick = nextIndex => {
    setExpandedIndex(currentExpandedIndex => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    //  if (index === expandedIndex) {
    //    console.log('expanded');
    //  } else {
    //    console.log('collapsed');
    //  }
    //CONDITIONALIZE EXPANDED CONTENT
    const isExpanded = index === expandedIndex;
    // const expandedContent = isExpanded && <div>{item.content}</div>;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* <div onClick={() => setExpandedIndex(index)}>{item.label}</div> */}
        {/* {expandedContent} */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
