class Person {
	constructor(firstName, lastName) {
		this._firstName = firstName; // _ signifies private property
		this._lastName = lastName;
	}

	get firstName() {
		return this.capitalizeFirst(this._firstName);
	}

	set firstName(value) {
		//SETTERS ALWAYS TAKES IN A PARAMETER
		this._firstName = this.capitalizeFirst(value);
	}

	get lastName() {
		return this.capitalizeFirst(this._lastName);
	}

	set lastName(value) {
		//SETTERS ALWAYS TAKES IN A PARAMETER
		this._lastName = this.capitalizeFirst(value);
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	capitalizeFirst(value) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName); //Trigger getter
console.log(person1.lastName); //Trigger getter

person1.firstName = 'joe'; //Trigger setter
person1.lastName = 'smith'; //Trigger setter
console.log(person1.fullName);
console.log(person1);
