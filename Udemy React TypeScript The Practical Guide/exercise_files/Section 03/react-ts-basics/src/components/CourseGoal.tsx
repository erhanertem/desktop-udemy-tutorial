// > Option #1 for passing children prop
// import { type ReactNode } from 'react';
// interface CourseGoalProps {
// 	title: string;
// 	children?: ReactNode;
// }

// > Option #2 for passing children prop
import { type PropsWithChildren } from 'react';
type CourseGoalProps = PropsWithChildren<{
	title: string;
}>;

// > Option #1 React Component via Function Declaration
function CourseGoal({ title, children }: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button>Delete</button>
		</article>
	);
}
// > Option #2 React Component via Function Expression
// import { type FC, type PropsWithChildren } from 'react';
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// };

export default CourseGoal;
