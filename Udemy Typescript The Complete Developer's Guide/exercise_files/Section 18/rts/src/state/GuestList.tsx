import { ReactElement, useState } from 'react';

function GuestList(): ReactElement {
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);
	// Similarly:
	// const [guests, setGuests] = useState([] as string[]);

	function onClick() {
		setName('');
		setGuests([...guests, name]);
	}

	return (
		<div>
			<h3>Guest List</h3>
			<ul>
				{guests.map((guest, index) => (
					<li key={index}>Guest: {guest}</li>
				))}
			</ul>
			<input
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button onClick={onClick}>Add Guest</button>
		</div>
	);
}

export default GuestList;
