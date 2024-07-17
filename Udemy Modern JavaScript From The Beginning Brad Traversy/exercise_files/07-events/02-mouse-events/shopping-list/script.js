const logo = document.querySelector('img');

const onClick = () => {
	console.log('click event');
};
const onDblClick = () => {
	if (document.body.style.backgroundColor !== 'purple') {
		document.body.style.backgroundColor = 'purple';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
};
const onRightClick = () => console.log('Right Click event');
const onMouseDown = () => console.log('Mouse down event');
const onMouseUp = () => console.log('Mouse up event');
const onMouseWheel = () => console.log('Mouse wheel event');
const onMouseOver = () => console.log('Mouse over event');
const onMouseOut = () => console.log('Mouse out event');
const onDragStart = () => console.log('Drag start event');
const onDragEnd = () => console.log('Drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDblClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragend', onDragEnd);
