import { useState } from 'react';
// > #2.CREATE A HOC COMPONENT
// ITS A CONVENTION TO START WITH with**** FOR HOCs
export default function withToggles(WrappedComponent) {
  // RETURNS IMMEDIATELY A HIGHER ORDER FUNCTIONALITY THATS BUIULT ON TOP OF THE <WRAPPEDCOMPONENT/>
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;

    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div className='list-container'>
        <div className='heading'>
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>
        {isOpen && (
          // THE WRAPPED COMPONENT PROPS IF THERE ARE ANY ARE TAKEN VIA {...props}
          <WrappedComponent {...props} />
        )}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {isCollapsed ? `Show all ${props.items.length}` : 'Show less'}
        </button>
      </div>
    );
  };
}
