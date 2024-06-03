class Boat {
	@TestDecorator
	color: string = 'red';

	get formattedColor(): string {
		return `This boasts color is ${this.color}`;
	}

	@LogError('Oops boat was sunk in ocean')
	pilot(): void {
		throw new Error();
		// console.log('swish');
	}
}

function TestDecorator(target: any, key: string) {
	console.log(target);
	console.log(key);
}

function LogError(errorMessage: string) {
	return function (
		_target: any,
		_key: string,
		desc: PropertyDescriptor,
	): void {
		console.log(desc.value);
		const method = desc.value;

		desc.value = function () {
			try {
				method();
			} catch (e) {
				console.log(errorMessage);
			}
		};
	};
}

// const boat = new Boat().pilot();
