// Code reusable with Interfaces
const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary() {
		return `I am a summary for ${this.name}`;
	},
};

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary() {
		return `My drink has ${this.sugar} grams of sugar.`;
	},
};

// const printVehicle = (vehicle: {
// 	name: string;
// 	year: number;
// 	broken: boolean;
// }): void => {
// 	console.log(
// 		`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`,
// 	);
// };
interface Reportable {
	summary(): string;
}
const printSummary = (report: Reportable): void => {
	console.log(report.summary());
};
printSummary(oldCivic);
printSummary(drink);
