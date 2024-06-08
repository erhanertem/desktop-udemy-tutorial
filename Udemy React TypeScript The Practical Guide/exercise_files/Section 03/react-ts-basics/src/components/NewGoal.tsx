import { useRef, type FormEvent } from 'react';
interface NewGoalProps {
	onAddGoal: (goal: string, summary: string) => void;
}
function NewGoal({ onAddGoal }: NewGoalProps) {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// Read input field values
		// NOTE: Either use FormData object for collecting inputs or use useRef to get a hand of the HTML element which would provide the value
		const goalInput = goal.current!.value;
		const summaryInput = summary.current!.value;
		// Add these inputs when submittted
		onAddGoal(goalInput, summaryInput);
		// Reset Fields - using HTML form element method
		e.currentTarget.reset();
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your goal</label>
				<input id="goal" type="text" ref={goal}></input>
			</p>
			<p>
				<label htmlFor="summary">Short Summary</label>
				<input id="summary" type="text" ref={summary}></input>
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
}

export default NewGoal;
