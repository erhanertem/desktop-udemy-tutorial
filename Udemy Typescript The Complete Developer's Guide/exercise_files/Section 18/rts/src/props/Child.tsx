import React from 'react';

interface ChildProps {
	color: string;
}

// // > Via props arg
// export function Child(props: ChildProps) {
// 	return <div>props.color</div>;
// }
// > Via destructuring on-the-go
export function Child({ color }: ChildProps) {
	return <div>{color}</div>;
}

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
	return <div>{color}</div>;
};
export const ChildAsFC_alt: React.FunctionComponent<ChildProps> = ({
	color,
}) => {
	return <div>{color}</div>;
};
