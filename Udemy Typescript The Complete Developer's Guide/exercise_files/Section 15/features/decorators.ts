class Boat {
	color: string = 'red';

	get formattedColor(): string {
		return `This boasts color is ${this.color}`;
	}

	@LogError
	pilot(): void {
		throw new Error();
		// console.log('swish');
	}
}

function LogError(_target: any, _key: string, desc: PropertyDescriptor): void {
	console.log(desc.value);
	const method = desc.value;

	desc.value = function () {
		try {
			method();
		} catch (e) {
			console.log('Oops, boat was sunk');
		}
	};
}

const boat = new Boat().pilot();
