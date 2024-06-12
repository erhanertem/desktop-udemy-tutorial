import { ComponentPropsWithRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithRef<'input'>; // Provides all attribute props related to input tag element

function Input({ label, id, ...props }: InputProps) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
		</p>
	);
}

export default Input;
