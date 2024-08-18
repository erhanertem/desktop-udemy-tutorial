@ClassDecorator
class Boat {
	// @TestDecorator
	color: string = 'red';

	// @TestAccessor
	get formattedColor(): string {
		return `This boasts color is ${this.color}`;
	}

	@LogError('Oops boat was sunk in ocean')
	pilot(
		@ParameterDecorator
		speed: string,
		@ParameterDecorator
		generateWake: boolean,
	): void {
		if (speed === 'fast') {
			console.log('swish');
		} else console.log('nothing');
		// throw new Error();
	}
}

function ClassDecorator(constructor: typeof Boat) {
	console.log(constructor);
}

function TestAccessor(target: Boat, key: string) {
	console.log('👉', target, key);
}

function ParameterDecorator(target: any, key: string, index: number) {
	console.log('👉👉', key, index);
}

// function TestDecorator(target: any, key: string) {
// 	console.log(target);
// 	console.log(key);
// }

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
