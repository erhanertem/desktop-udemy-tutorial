import Timer from './Timer';
import { useTimersContext } from '../store/timers-context';

export default function Timers() {
	const { timers } = useTimersContext();
	return (
		<ul>
			{timers.map((timer) => (
				<li key={timer.name}>
					<Timer {...timer} />
				</li>
			))}
		</ul>
	);
}
