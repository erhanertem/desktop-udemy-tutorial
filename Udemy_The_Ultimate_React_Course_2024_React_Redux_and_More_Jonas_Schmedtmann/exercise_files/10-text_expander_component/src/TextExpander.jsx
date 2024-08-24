import { useState } from 'react';

export default function TextExpander({
  expanded = false,
  children,
  className,
  expandButtonText = ' Show more',
  collapseButtonText = ' Show less',
  buttonColor = 'blue',
  collapsedNumWords = 10,
  onClick,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function onClickHandler() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  const croppedText = children
    .trim()
    .split(' ')
    .slice(0, collapsedNumWords)
    .join(' ')
    .concat('... ');

  return (
    <div className={className}>
      {isExpanded ? children : croppedText}
      <button
        style={{
          color: buttonColor,
          border: 'none',
          font: 'inherit',
          background: 'none',
          cursor: 'pointer',
          marginLeft: '6px',
        }}
        onClick={onClickHandler}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
