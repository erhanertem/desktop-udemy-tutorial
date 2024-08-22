import Steps from './components/Steps';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

export default function App() {
	return (
		<div>
			<Steps messages={messages} />
		</div>
	);
}
