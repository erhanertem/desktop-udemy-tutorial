import { ChangeEvent, DragEvent, ReactElement } from 'react';

function EventComponent(): ReactElement {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => console.log(e);
	const onDragStart = (e: DragEvent<HTMLDivElement>) => {
		console.log('I am being dragged');
		console.log(e);
	};

	return (
		<div>
			<h3>Event Component</h3>
			<h4>Use External Event Handler</h4>
			<input onChange={onChange} />
			<h4>Use Inline Event Handler</h4>
			<input onChange={(e) => console.log(e)} />
			<h4>Drag Event Handler</h4>
			<div draggable onDragStart={onDragStart}>
				Drag Me!
			</div>
		</div>
	);
}

export default EventComponent;
