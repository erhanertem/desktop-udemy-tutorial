import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>; // Provides all attribute props related to input tag element

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, id, ...props }: InputProps, ref) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} name={id} {...props} ref={ref} />
			{/* NOTE: FormData @ Form.tsx requires name attribute on input elements to create this FormData object */}
		</p>
	);
});

export default Input;
