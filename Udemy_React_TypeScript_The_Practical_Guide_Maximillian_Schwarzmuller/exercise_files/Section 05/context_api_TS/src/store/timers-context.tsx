import { createContext, useContext, useReducer, type ReactNode } from 'react';

// ContextAPI Types
export type Timer = { name: string; duration: number };
type TimersState = { isRunning: boolean; timers: Timer[] };
type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

// Declare useReducer Initialstate object
const initialState: TimersState = {
	isRunning: true,
	timers: [],
};
// Declare timersReducer - receives intial sgtate with an action and yields a new state
// timersReducer w/Discriminated Union
// type Action = {
// 	type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
// 	payload?: Timer;
// };
type StartTimersAction = {
	type: 'START_TIMERS';
};
type StopTimersAction = {
	type: 'STOP_TIMERS';
};
type AddTimerAction = {
	type: 'ADD_TIMER';
	payload: Timer;
};
type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
	if (action.type === 'START_TIMERS') {
		return { ...state, isRunning: true };
	}
	if (action.type === 'STOP_TIMERS') {
		return { ...state, isRunning: false };
	}
	if (action.type === 'ADD_TIMER') {
		return {
			...state,
			timers: [
				...state.timers,
				{
					name: action.payload.name,
					duration: action.payload.duration,
				},
			],
		};
	}
	return state;
}

// Create a ContextAPI object
const TimersContext = createContext<TimersContextValue | null>(null);
// Create custom hook utilizing timerscontext
export function useTimersContext() {
	const timersCtx = useContext(TimersContext);
	// console.log(timersCtx);
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
	const [timersState, dispatch] = useReducer(timersReducer, initialState);

	const ctx: TimersContextValue = {
		timers: timersState.timers,
		isRunning: timersState.isRunning,
		addTimer(timerData) {
			dispatch({ type: 'ADD_TIMER', payload: timerData });
		},
		startTimers() {
			dispatch({ type: 'START_TIMERS' });
		},
		stopTimers() {
			dispatch({ type: 'STOP_TIMERS' });
		},
	};
	return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
