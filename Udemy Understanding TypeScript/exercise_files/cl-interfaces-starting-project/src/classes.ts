// Code goes here!
abstract class Department {
  // private name: string;
  // private id: string;
  // private employees: string[] = [];
  protected employees: string[] = [];
  static fiscalYear = 2020;
  // abstract graduateYear: number; //We can have abstract parameters as well as abtract functions

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // describe() {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }
  abstract describe(this: Department): void; // NOTE: In order to create abstract functions in a class , class needs to be marked abstract as well.

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee('Max');
console.log('🎈', employee1, Department.fiscalYear);

class ITDepartment extends Department {
  // graduateYear!: number;
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    // this.admins = admins;
  }

  describe() {
    console.log('🎉 IT Department - ID: ' + this.id);
  }
} //it automatically inherits from the parent class
const it = new ITDepartment('d1', ['Max']);
// const accounting = new Department('d1', 'Accounting');
it.addEmployee('Max');
it.addEmployee('Manu');
// // it.employees[2] = 'Anna'; //NOTE: We dont want to allow entries get registered like this..so we turn employees private in the object.
it.describe();

// class AccountingDepartment extends Department {
//   // graduateYear!: number;
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No report found.');
//   }
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please specify a valid value');
//     }
//     this.addReport(value);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     this.lastReport = reports[0]; //initialize the last report as 1st element value of the array.
//   }

//   describe() {
//     console.log('Accounting Department - ID: ' + this.id);
//   }

//   addEmployee(name: string) {
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//     console.log('Last Report : ', this.lastReport);
//   }
//   printEmployeeInformation() {
//     console.log('I am overwwritten version: ', this.employees.length);
//     console.log('I am overwwritten version: ', this.employees);
//   } //overrites department inherited version
// }

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; //We store the class instance inside our static property

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please specify a valid value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0]; //initialize the last report as 1st element value of the array.
  }

  static getInstance() {
    // if (this.instance) {} or we can use class name
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
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
  printReports() {
    console.log(this.reports);
    console.log('Last Report : ', this.lastReport);
  }
  printEmployeeInformation() {
    console.log('I am overwwritten version: ', this.employees.length);
    console.log('I am overwwritten version: ', this.employees);
  } //overrites department inherited version
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
// const accounting = new AccountingDepartment('d2', []);
// accounting.addReport('Something went really wrong!!');
// accounting.addReport('My report is the best!!');
// // accounting.reports = 'Oh, really?'
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();
// accounting.describe();
// accounting.mostRecentReport;
// accounting.mostRecentReport = '';
// class PersonCl {
//   constructor(public firstName: string, public birthYear: number) {}
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   static hey(firstName: string) {
//     console.log(`Hey I am Static🤟 ${firstName}`);
//   }
// }
// class StudentCl extends PersonCl {
//   constructor(firstName: string, birthYear: number, private course: string) {
//     super(firstName, birthYear);
//   }
//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log('I am a genious!!'); //overrides the same parent class function up in the prototype chain
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();
// // martha.greet();
// // martha.hey();
