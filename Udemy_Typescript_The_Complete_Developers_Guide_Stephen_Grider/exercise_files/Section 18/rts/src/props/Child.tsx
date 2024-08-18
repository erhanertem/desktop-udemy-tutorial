import React, { PropsWithChildren, ReactElement } from 'react';

// interface ChildProps {
// 	color: string;
// 	onClick: () => void;
// 	children?: React.ReactNode; //VERY IMPORTANT! as of React 18, children is removed from React.FC so this needs to be provided within props
// }
interface ChildPropswoutChildren {
	color: string;
	onClick: () => void;
}

// // > Via props arg
// export function Child(props: ChildProps) {
// 	return <div>props.color</div>;
// }
// > Via destructuring on-the-go
export function Child({
	color,
	onClick,
	children,
}: PropsWithChildren<ChildPropswoutChildren>): ReactElement {
	return (
		<div>
			{color}
			<button onClick={onClick}>{children}</button>
		</div>
	);
}
// export function Child({ color, onClick, children }: ChildProps) {
// 	return (
// 		<div>
// 			{color}
// 			<button onClick={onClick}>{children}</button>
// 		</div>
// 	);
// }

// export const ChildAsFC: React.FC<ChildProps> = ({
// 	color,
// 	onClick,
// 	children,
// }) => {
// 	return (
// 		<div>
// 			{color}
// 			<button onClick={onClick}>{children}</button>
// 		</div>
// 	);
// };
// export function Child(props: ChildProps) {
// 	return (
// 		<div>
// 			props.color
// 			<button onClick={props.onClick}>{props.children}</button>
// 		</div>
// 	);
// }
