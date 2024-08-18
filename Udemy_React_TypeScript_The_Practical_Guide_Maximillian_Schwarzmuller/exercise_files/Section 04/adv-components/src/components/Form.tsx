import { type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from 'react';

export type ImperativeHandler = { clear: () => void };

type FormProps = {
	onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

const Form = forwardRef<ImperativeHandler, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {
	const form = useRef<HTMLFormElement>(null);

	useImperativeHandle(ref, () => {
		return {
			clear() {
				console.log('CLEARING');
				form.current?.reset();
			},
		};
	}); //Requires forwardRef

	// Event Handler Logic
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		// NOTE: FormData requires name attribute on input elements
		const data = Object.fromEntries(formData);
		onSave(data);

		// Use this to clear the input lines. Via useImperativeHandle React hook along with forwardRef, one can import functionality outside this Component and use it elsewhere.
		// form.current?.reset();
	}

	return (
		<form onSubmit={handleSubmit} {...otherProps} ref={form}>
			{children}
		</form>
	);
});

export default Form;
