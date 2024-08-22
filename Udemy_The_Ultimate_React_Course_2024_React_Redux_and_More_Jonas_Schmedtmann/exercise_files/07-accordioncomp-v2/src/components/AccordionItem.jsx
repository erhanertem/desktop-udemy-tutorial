export default function AccordionItem({
	title,
	text,
	number,
	curOpen,
	setCurOpen,
}) {
	const isOpen = number === curOpen;
	function handleToggle() {
		!isOpen ? setCurOpen(number) : setCurOpen(null);
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
