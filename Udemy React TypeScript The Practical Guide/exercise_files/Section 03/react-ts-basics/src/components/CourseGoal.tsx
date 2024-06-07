interface CourseGoalProps {
	title: string;
	description: string;
}

function CourseGoal({ title, description }: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<button>Delete</button>
		</article>
	);
}

export default CourseGoal;
