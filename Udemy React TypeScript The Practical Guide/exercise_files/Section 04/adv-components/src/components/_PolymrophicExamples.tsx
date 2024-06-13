// import { ReactNode } from 'react';

// type CardProps = {
// 	title: string;
// 	children: ReactNode;
// 	// "actions" is like an extra "slot" of this component
// 	// It's the same type as the children prop, since we expect JSX code as a prop value
// 	actions: ReactNode;
// };

// export function Card({ title, children, actions }: CardProps) {
// 	return (
// 		<section>
// 			<h2>{title}</h2>
// 			{children}
// 			{actions}
// 		</section>
// 	);
// }

// // Example Usage:
// export function Demo() {
// 	return (
// 		<Card title="My Card" actions={<button onClick={() => console.log('Button clicked!')}>Click Me!</button>}>
// 			<p>Some content</p>
// 		</Card>
// 	);
// }

// // **************************************

// import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// type IconButtonProps = {
// 	icon: ElementType;
// 	onClick: () => void;
// 	children: ReactNode;
// } & ComponentPropsWithoutRef<'button'>;

// export function IconButton({
// 	// icon is aliased to Icon because it should be used like a custom component name
// 	icon: Icon,
// 	children,
// 	...otherProps
// }: IconButtonProps) {
// 	return (
// 		<button {...otherProps}>
// 			<span>
// 				<Icon />
// 			</span>
// 			<span>{children}</span>
// 		</button>
// 	);
// }

// // Example Usage:

// function HeartIcon() {
// 	return <span>❤️</span>;
// }

// export function Demo() {
// 	return (
// 		<IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
// 			Like
// 		</IconButton>
// 	);
// }

// // **************************************
// Example: A Generic List Component
// This reusable component can be used to render a list of items of any type. The type of the items is passed via a generic type parameter.

import { type ReactNode } from 'react';

type ListProps<T> = {
	items: T[];
	renderItem: (item: T) => ReactNode;
};

export function List<T>({ items, renderItem }: ListProps<T>) {
	return <ul>{items.map(renderItem)}</ul>;
}

// Example Usage:

export function Demo() {
	const users = [
		{ id: 'u1', name: 'Max' },
		{ id: 'u2', name: 'Manuel' },
	];

	const hobbies = ['Sports', 'Reading', 'Cooking'];

	return (
		<main>
			<section>
				<h2>Users</h2>
				<List items={users} renderItem={(user) => <li key={user.id}>{user.name}</li>} />
			</section>
			<section>
				<h2>Hobbies</h2>
				<List items={hobbies} renderItem={(hobby) => <li key={hobby}>{hobby}</li>} />
			</section>
		</main>
	);
}
