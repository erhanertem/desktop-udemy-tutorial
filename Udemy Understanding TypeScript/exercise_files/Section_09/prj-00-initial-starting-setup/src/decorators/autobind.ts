// autobind Decorator

export function Autobind(
	_target: any,
	_fnName: string,
	descriptor: PropertyDescriptor,
) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjDescriptor;
}
