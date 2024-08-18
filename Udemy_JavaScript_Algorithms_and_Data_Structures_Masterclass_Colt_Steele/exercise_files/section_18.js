// LESSON 18 - DATA STRUCTURES
class Student {
	constructor(firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
		this.tardies = 0;
		this.scores = [];
	}
	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}
	markLate() {
		this.tardies += 1;
		if (this.tardies >= 3) {
			return 'YOU ARE EXPELLED.';
		}
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	}
	addScore(score) {
		this.scores.push(score);
		return this.scores;
	}
	calculateAverageScore() {
		let sum = this.scores.reduce((a, b) => a + b);
		return sum / this.scores.length;
	}

	// UTILITY FUNCTION
	static enrollStudents(...students) {
		return 'Enrolling students';
	}
}

let firstStudent = new Student('Colt', 'Steele', 2);
let secondStudent = new Student('Ernie', 'Bernard', 1);
firstStudent.markLate();
console.log('firstStudent.markLate() :', firstStudent.markLate());
firstStudent.addScore(92);
firstStudent.addScore(60);
console.log('firstStudent.calculateAverageScore() :', firstStudent.calculateAverageScore());
console.log('Student.enrollStudents() :', Student.enrollStudents());

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.hypot(dx, dy);
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2);
