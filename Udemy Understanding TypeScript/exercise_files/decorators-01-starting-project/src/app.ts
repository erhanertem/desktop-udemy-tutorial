// //--->DECORATOR FUNCTION @CLASS
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// @Logger //Calling the decorator .... Class doesn't need to be even initialized. Decorators called when the class is declared.
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object....');
//   }
// }
// const pers = new Person();
// console.log(pers);

// //--->DECORATOR FACTORY FUNCTION @CLASS - CUSTOMIZABLE
// function Logger(logString: string) {
//   console.log('LOGGER FACTORY...');
//   return function (constructor: Function) {
//     console.log('LOGGER FACTORY FUNCTION EXECUTING...');
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('WITHTEMPLATE FACTORY...');
//   return function (constructor: any) {
//     console.log('WITHTEMPLATE FACTORY FUNCTION EXECUTING...');
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     // console.log('👛', p);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }
// // function WithTemplate(template: string, hookId: string) {
// //   // return function (constructor: Function) {
// //   return function (_: Function) {
// //     // _ means I dont want to use any parameter for the function
// //     const hookEl = document.getElementById(hookId);
// //     if (hookEl) {
// //       hookEl.innerHTML = template;
// //     }
// //   };
// // }

// // //--->MULTIPLE DECORATOR EXECUTION @CLASS
// @Logger('LOGGING - PERSON') //Executed second
// @WithTemplate('<h1>My Person Object</h1>', 'app') //Executed first
// class Person {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object....');
//   }
// }

// //--->DECORATOR FUNCTION @ PROPERTY
// function Log1(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!');
//   console.log('✨', target, propertyName);
// }

// class Product {
//   @Log1
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error('Invalid should be positive!');
//     }
//   }

//   // constructor(public title: string, private _price: number) {}
//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// //--->DECORATOR FUNCTION @ ACCESSOR
// // function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
// //   console.log('log2 - Accessor decorator!');
// //   console.log('✨', target);
// //   console.log('✨', name);
// //   console.log('✨', descriptor);
// // }
// //-->RETURNING DECORATOR FUNCTION @ ACCESSOR
// // via PropertyDescriptor
// function Log2(
//   target: any,
//   name: string,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   console.log('log2 - Accessor decorator!');
//   console.log('✨', target);
//   console.log('✨', name);
//   console.log('✨', descriptor);
//   return {};
// }
// //--->DECORATOR FUNCTION @ METHOD
// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('log3- Method decorator!');
//   console.log('🎃', target); //class
//   console.log('🎃', name); //class method name
//   console.log('🎃', descriptor); //class method description
// }
// //-->RETURNING DECORATOR FUNCTION @ METHOD
// // via PropertyDescriptor
// function Autobind(
//   _1: any, //class
//   _2: string | Symbol, //class method name
//   descriptor: PropertyDescriptor //class method descp
// ) {
//   const originalMethod = descriptor.value;
//   const adjustedDescriptor: PropertyDescriptor = {
//     get() {
//       const bindFn = originalMethod.bind(this);
//       return bindFn;
//     },
//   };
//   return adjustedDescriptor;
// }

// class Printer {
//   message = 'This works!';

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }
// const p = new Printer();

// const button = document.querySelector('button')!; //! informs TS that button exists and its not null
// // button.addEventListener('click', p.showMessage.bind(p)); //Plain JS style
// button.addEventListener('click', p.showMessage);

// //--->DECORATOR FUNCTION @ METHOD PARAMETER
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log('log4 - Method decorator!');
//   console.log('🎁', target);
//   console.log('🎁', name);
//   console.log('🎁', position);
// }

// //--->RETURNING A CLASS INSIDE A CLASS DECORATOR
// function WithTemplate2(template: string, hookId: string) {
//   console.log('WITHTEMPLATE FACTORY...');
//   return function (originalConstructor: any) {
//     console.log('WITHTEMPLATE FACTORY FUNCTION EXECUTING...');
//     return class extends originalConstructor {
//       constructor() {
//         super();
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }
// function WithTemplate2(template: string, hookId: string) {
//   console.log('WITHTEMPLATE FACTORY...');
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     console.log('WITHTEMPLATE FACTORY FUNCTION EXECUTING...');
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }
// @WithTemplate2('<h1>My Person Object</h1>', 'app') //Executed first
// class Person2 {
//   name = 'Max';
//   constructor() {
//     console.log('Creating person object....');
//   }
// }

//-->VALIDATION DECORATORS
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

//property decorator
function Required(target: any, propName: string) {
  //target: COURSE CLASS, target.constructor.name: COURSE CLASS NAME
  // registeredValidators is required to have index notation here
  // because that is how it was defined in the interface.
  // console.log(target, target.constructor, target.constructor.name);
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // This next line of code adds the new validator.
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

//property decorator
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // This next line of code adds the new validator.
    [propName]: [
      // This next line of code adds all previously registered validators before adding a new one so that there is no loss of validators.
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

//  The input obj is the object that we are validating (IN THIS CASE createdcourse).
function validate(obj: any) {
  // Because of the prototype chain (inheritance from the base class) we can grab the name of the constructor of the object we are validating and use it as a key to collect the validator configuration.
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  // Start by looping through the object (Course) to get all the properties (title and price).
  // prop = title then prop = price.
  for (const prop in objValidatorConfig) {
    // Next we start looping through all the validators.

    for (const validator of objValidatorConfig[prop]) {
      // validator = 'required' then validator = 'positive';
      // Here we ask if the associated validator for this property is a match with what we have hardcoded as a validator name.
      switch (validator) {
        case 'required':
          // !!obj[prop] (this asks if Course[title] is true or false.
          isValid = isValid && !!obj[prop]; // !!obj[prop] is same as return Boolean(obj[prop]);
          //Using the double bang operator will utilize the reversing functionality of the single bang operator twice. Therefore when you use the double bang operator on a value, you are effectively saying “convert this value to a boolean and return the boolean equivalent”.
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }

  console.log(createdCourse);
  console.log('🎞', registeredValidators);
});
