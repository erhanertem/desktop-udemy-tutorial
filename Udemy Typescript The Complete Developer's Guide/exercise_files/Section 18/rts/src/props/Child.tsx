import React from 'react';

interface ChildProps {
	color: string;
	onClick: () => void;
}

// // > Via props arg
// export function Child(props: ChildProps) {
// 	return <div>props.color</div>;
// }
// > Via destructuring on-the-go
export function Child({ color, onClick }: ChildProps) {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click me</button>
		</div>
	);
};
// export const ChildAsFC_alt: React.FunctionComponent<ChildProps> = ({
// 	color,
// }) => {
// 	return <div>{color}</div>;
// };
