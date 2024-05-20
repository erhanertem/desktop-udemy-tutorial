// Validation Logic Requirements List
namespace App {
	export interface Validatable {
		value: string | number;
		required?: boolean;
		minLength?: number;
		maxLength?: number;
		min?: number;
		max?: number;
	}
	// Validation Logic
	export function validate(validatableInput: Validatable) {
		let isValid = true;
		if (validatableInput.required) {
			isValid =
				isValid && validatableInput.value.toString().trim().length !== 0;
		}
		if (
			// '!= null' means '!= null and undefined'
			validatableInput.minLength != null &&
			typeof validatableInput.value === 'string'
		) {
			isValid =
				isValid &&
				validatableInput.value.length >= validatableInput.minLength;
		}
		if (
			// '!= null' means '!= null and undefined'
			validatableInput.maxLength != null &&
			typeof validatableInput.value === 'string'
		) {
			isValid =
				isValid &&
				validatableInput.value.length <= validatableInput.maxLength;
		}
		if (
			// '!= null' means '!= null and undefined'
			validatableInput.min != null &&
			typeof validatableInput.value === 'number'
		) {
			isValid = isValid && validatableInput.value >= validatableInput.min;
		}
		if (
			// '!= null' means '!= null and undefined'
			validatableInput.max != null &&
			typeof validatableInput.value === 'number'
		) {
			isValid = isValid && validatableInput.value <= validatableInput.max;
		}
		return isValid;
	}
}
