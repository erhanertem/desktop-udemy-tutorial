import { ReactElement, useRef, useState, useEffect } from 'react';

const users = [
	{ name: 'Sarah', age: 20 },
	{ name: 'Alex', age: 23 },
	{ name: '1234', age: 13 },
];

export function UserSearch(): ReactElement {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [name, setName] = useState('');
	const [user, setUser] = useState<
		{ name: string; age: number } | undefined
	>();

	useEffect(() => {
		if (!inputRef.current) {
			return;
		}
		inputRef.current.focus();
	}, []);

	const onClick = () => {
		const foundUser = users.find((user) => user.name === name);
		console.log(foundUser);
		setUser(foundUser);
		setName('');
	};
	return (
		<div>
			<h3>User Search w/Ref</h3>
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onClick}>Find User</button>
			<div>
				{user && (
					<>
						<br />
						<strong>Name: </strong>
						{user?.name}&nbsp; <strong>Age: </strong> {user?.age}
					</>
				)}
			</div>
		</div>
	);
}
