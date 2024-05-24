class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

// console.log(Vehicle.honk());

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log('wroommmm');
	}

	public startDriving(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(4, 'red');
// car.drive();
car.startDriving();
// car.honk();
