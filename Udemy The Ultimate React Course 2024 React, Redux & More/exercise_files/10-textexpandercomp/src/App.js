import { useState } from 'react';
import './styles.css';

export default function App() {
	return (
		<div>
			<TextExpander>
				Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new
				worlds. It's the stuff of dreams and science fiction, but believe it or not, space travel is
				a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its
				secrets and push the boundaries of what's possible.
			</TextExpander>

			<TextExpander
				collapsedNumWords={10}
				expandButtonText="Show text"
				collapseButtonText="Collapse text"
				buttonColor="#ff6622"
			>
				Space travel requires some seriously amazing technology and collaboration between countries,
				private companies, and international space organizations. And while it's not always easy (or
				cheap), the results are out of this world. Think about the first time humans stepped foot on
				the moon or when rovers were sent to roam around on Mars.
			</TextExpander>

			<TextExpander expanded={true} className="box">
				Space missions have given us incredible insights into our universe and have inspired future
				generations to keep reaching for the stars. Space travel is a pretty cool thing to think
				about. Who knows what we'll discover next!
			</TextExpander>
		</div>
	);
}

function TextExpander({
	children,
	expanded = false,
	className = '',
	collapsedNumWords = 10,
	buttonColor = 'blue',
	collapseMeButtonText = 'Show more',
	expandMeButtonText = 'Show less',
}) {
	const [isExpanded, setIsExpanded] = useState(expanded);
	console.log(Boolean(expanded));
	const handleClick = function () {
		setIsExpanded(!isExpanded);
	};
	const cropppedText = children.split(' ').slice(0, collapsedNumWords).join(' ').concat('...');

	return (
		<div className={className}>
			<p>{isExpanded ? children : cropppedText}</p>
			<span style={{ color: buttonColor }} onClick={handleClick}>
				{isExpanded ? expandMeButtonText : collapseMeButtonText}
			</span>
		</div>
	);
}