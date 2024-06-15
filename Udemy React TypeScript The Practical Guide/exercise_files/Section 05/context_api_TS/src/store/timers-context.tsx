import { createContext, useContext, type ReactNode } from 'react';

type Timer = { name: string; duration: number };
type TimersState = { isRunning: boolean; timers: Timer[] };
type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};
// Create a ContextAPI object
const TimersContext = createContext<TimersContextValue | null>(null);
// Create custom hook utilizing timerscontext
export function useTimersContext() {
	const timersCtx = useContext(TimersContext);

	if (timersCtx === null) {
		throw new Error("TimersContext can't be null");
	}
	return timersCtx;
}

type TimersContextProviderProps = {
	children: ReactNode;
};
//Create a ContextAPI Provider/Wrapper
export default function TimersContextProvider({ children }: TimersContextProviderProps) {
	const ctx: TimersContextValue = {
		timers: [],
		isRunning: false,
		addTimer(timerData) {},
		startTimers() {},
		stopTimers() {},
	};
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
