import { useState } from 'react';

export default function AccordionItem({ title, text, number }) {
	const [isOpen, setIsOpen] = useState(false);
	function handleToggle() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<div
			className={`item ${isOpen ? 'open' : ''}`}
			onClick={handleToggle}
		>
			<p className="number">{number < 9 ? `0${number}` : number}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? '-' : '+'}</p>
			{isOpen && <div className="content-box">{text}</div>}
		</div>
	);
}
