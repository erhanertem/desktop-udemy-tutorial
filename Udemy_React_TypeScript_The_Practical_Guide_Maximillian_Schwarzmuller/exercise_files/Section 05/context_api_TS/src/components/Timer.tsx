import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
	// const interval = useRef<number | null>(null);
	const [remainingTime, setRemainingTime] = useState(duration * 1000);
	const { isRunning } = useTimersContext();

	// if (remainingTime <= 0 && interval.current) {
	// 	clearInterval(interval.current);
	// }

	useEffect(() => {
		let timer: number;
		if (isRunning) {
			// Assigned to the ref as a variable so that we can call clearInterval on that outside the useEffect.
			// NOTE: We can't create interval variable outside the component as it will be shared by all instances of Timer component.
			timer = setInterval(function () {
				setRemainingTime((prevTime) => {
					// GUARD CLAUSE - for once that got finished but keeps on -50 subtraction each time timer on/off
					if (prevTime <= 0) {
						return prevTime;
					}

					return prevTime - 50;
				});
			}, 50);
			// interval.current = timer;
		} else if (!isRunning) {
			clearInterval(timer!);
		}

		//CLEANUP FUNCTION
		return () => clearInterval(timer);
	}, [isRunning]);

	const convertedRemainingTime = (remainingTime / 1000).toFixed(2);

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>
				<progress max={duration * 1000} value={remainingTime} />
			</p>
			<p>{convertedRemainingTime}</p>
		</Container>
	);
}
