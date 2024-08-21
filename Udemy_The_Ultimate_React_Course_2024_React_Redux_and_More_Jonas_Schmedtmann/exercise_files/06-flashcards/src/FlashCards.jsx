import { useState } from 'react';

export default function FlashCards({ questions }) {
	const [selectedId, setSelectedId] = useState(null);

	function handleClick(id) {
		setSelectedId(id !== selectedId ? id : null);
	}

	return (
		<div className="flashcards">
			{questions.map((question) => (
				<div
					key={question.id}
					className={question.id === selectedId ? 'selected' : ''}
					onClick={() => handleClick(question.id)}
				>
					<p>
						{question.id === selectedId
							? question.answer
							: question.question}
					</p>
				</div>
			))}
		</div>
	);
}
