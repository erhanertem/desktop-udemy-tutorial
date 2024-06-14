import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form, { type ImperativeHandler } from './components/Form';

function App() {
	const input = useRef(null);
	const customForm = useRef<ImperativeHandler>(null);

	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		console.log(customForm);
		customForm.current?.clear();
	}

	return (
		<main>
			<Form onSave={handleSave} ref={customForm}>
				<Input id="name" label="Name" type="text" />
				<Input id="age" label="Age" type="number" min={0} />
				<p>
					<Button el="button">Save</Button>
				</p>
				<Input id="test" label="Test" type="text" ref={input} />
			</Form>
			<p>
				<Container className="button" as="button">
					Click Me
				</Container>
			</p>
			<p>
				<Button el="button">A Button</Button>
			</p>
			<p>
				<Button el="anchor" href="https://www.google.com" target="_blank">
					A Link
				</Button>
			</p>
		</main>
	);
}

export default App;
