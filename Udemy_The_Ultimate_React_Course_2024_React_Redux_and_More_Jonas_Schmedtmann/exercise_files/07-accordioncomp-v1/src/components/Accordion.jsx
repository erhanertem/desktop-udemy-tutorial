import AccordionItem from './AccordionItem';

export default function Accordion({ data }) {
	return (
		<div className="accordion">
			{data.map((faq, index) => (
				<AccordionItem
					title={faq.title}
					text={faq.text}
					number={++index}
					key={++index}
				/>
			))}
		</div>
	);
}
