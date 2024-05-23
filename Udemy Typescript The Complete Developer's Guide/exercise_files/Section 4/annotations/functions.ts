// Type annotations around arrow functions
const add = (a: number, b: number): number => {
	return a + b;
};

// const subtract = (a: number, b: number): number => {
// 	a - b;
// };

// Type annotations around function declarations
function divide(a: number, b: number): number {
	return a / b;
}
// Type annotations around expression functions
const multiply = function (a: number, b: number): number {
	return a * b;
};

// void return type @ functions
const logger = (message: string): void => {
	console.log(message);
};

// never return type @ functions
const throwError = (message: string): never => {
	throw new Error(message);
};

// Destructuring with annotations
const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};
const logWe = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date);
	console.log(weather);
};
logWeather(todaysWeather);

// Interface annotations around functions
interface functionAdd {
	(a: number, b: number): number;
}
const add_: functionAdd = (a, b) => {
	return a + b;
};
