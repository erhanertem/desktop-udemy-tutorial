import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({ data }) {
	const [curOpen, setCurOpen] = useState(null);

	return (
		<div className="accordion">
			{data.map((faq, index) => (
				<AccordionItem
					curOpen={curOpen}
					setCurOpen={setCurOpen}
					title={faq.title}
					text={faq.text}
					number={++index}
					key={++index}
				/>
			))}
		</div>
	);
}
