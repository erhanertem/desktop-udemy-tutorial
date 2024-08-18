import { useState } from 'react';
import './styles.css';

const faqs = [
	{
		title: 'Where are these chairs assembled?',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
	},
	{
		title: 'How long do I have to return my chair?',
		text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
	},
	{
		title: 'Do you ship to countries outside the EU?',
		text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
	},
];

export default function App() {
	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}

function Accordion({ data }) {
	// ONLY ONE ITEM IS OPEN @ A TIME - SHARED STATE . INIITAL STATE - NONE IS OPEN === NULL
	const [curOpen, setCurOpen] = useState(null);

	return (
		<div className="accordion">
			{data.map((el, i) => (
				<AccordionItem
					curOpen={curOpen}
					onOpen={setCurOpen}
					num={i + 1}
					title={el.title}
					key={i + 1}
				>
					{el.text}
				</AccordionItem>
			))}
			<AccordionItem
				curOpen={curOpen}
				onOpen={setCurOpen}
				num={data.length + 1}
				title="TEST 1"
				key={data.length + 1}
			>
				<p>Allows React developers to:</p>
				<ul>
					<li>Break up UI into components</li>
					<li>Make components reusable</li>
					<li>Place state efficiently</li>
				</ul>
			</AccordionItem>
		</div>
	);
}

function AccordionItem({ curOpen, onOpen, num, title, children }) {
	const isOpen = num === curOpen;

	function handleToggle() {
		onOpen(isOpen ? null : num);
	}

	return (
		<div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
			<p className="number">{num < 9 ? `0${num}` : num}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? '-' : '+'}</p>
			{isOpen && <div className="content-box">{children}</div>}
		</div>
	);
}
