// > CLASSES , PROPERTIES, INHERITANCE
// > GETTERS , SETTERS

abstract class Department {
	static fiscalYear = 2020;
	// private id: string;
	// private name: string;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.name = n;
	}

	static createEmployee(name: string) {
		return { name: name };
	}

	abstract describe(this: Department): void;
	// {
	// console.log(`Department (${this.id}): ${this.name}`);
	// }

	addEmployee(employee: string) {
		// this.id = 'd2';
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	// admins: string[];
	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
		// this.admins = admins;
	}

	describe() {
		console.log('Accounting Department - ID: ' + this.id);
	}
}

const it = new ITDepartment('d2', ['Ernesto']);
// it.addEmployee('ErnestoX');
// it.addEmployee('ClintX');
// it.addEmployee('ClintY');
it.describe();
// // it.name = 'NEW NAME';
// // it.id = 'Dinero';
// it.printEmployeeInformation();

class AccountingDepartment extends Department {
	private lastReport: string = '';

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('⛔ No report found');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value');
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		// this.lastReport = reports[0];
	}

	describe() {
		console.log('Accounting Department - ID: ' + this.id);
	}

	addEmployee(name: string) {
		if (name === 'Max') {
			return;
		}
		this.employees.push(name);
	}
	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}
	getReports() {
		console.log(this.reports);
	}
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
// const accounting = new Department('d1', 'Accounting');
// const accounting = new AccountingDepartment('d2', []);
// console.log(accounting);
// console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = 'Eliah did a good job';
// accounting.addReport('✅ I did some excel sheet work');
// accounting.addEmployee('Ernesto');
// accounting.addEmployee('Clint');
// console.log(accounting.mostRecentReport);
// accounting.getReports();
// accounting.describe();
// accounting.employees[2] = 'Annabukowski';
// accounting.describe();
// accounting.printEmployeeInformation();
// const accountingCopy = { name: 'Copy', describe: accounting.describe };
// accountingCopy.describe();

const profile = {
	name_: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15,
	},
	setAge(age: number): void {
		this.age = age;
	},
};
const { age, name_ }: { age: number; name_: string } = profile;
console.log('✅', age);
const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log('✅', lat, lng);
