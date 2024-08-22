import { useState } from 'react';
import Button from './Button';
import StepMessage from './StepMessage';

export default function Steps({ messages }) {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) {
			setStep((step) => (step % 3) - 1);
		}
	}
	function handleNext() {
		setStep((step) => (step % 3) + 1);
	}

	return (
		<>
			<button
				className="close"
				onClick={() => setIsOpen(!isOpen)}
			>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? 'active' : ''}>1</div>
						<div className={step >= 2 ? 'active' : ''}>2</div>
						<div className={step >= 3 ? 'active' : ''}>3</div>
					</div>

					<StepMessage step={step}>{messages[step - 1]}</StepMessage>

					<div className="buttons">
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							btnHandler={handlePrevious}
						>
							👈 Previous
						</Button>
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							btnHandler={handleNext}
						>
							Next 👉
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
