// Code goes here!
//--->GENERIC TYPES
//-->BUILTIN GENERICS
//->ARRAY
// const names = ['Max', 'Manuel'];
const names1: any[] = [];
const names2: Array<any> = [];
const names3: Array<string> = [];
const names4: string[] = [];
//->PROMISE
const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});
promise.then(data => {
  data.split(' ');
});
//-->GENERIC FUNCTIONS
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Max' }, { age: 30 }));
// const mergedObj = merge({ name: 'Max' }, { age: 30 });
// mergedObj.name; //PROBLEM!!! TS cant infer
// function merge<T extends object | string, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// console.log(mergedObj.name);
// console.log(mergedObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Cooking', 'Trashing']));
// console.log(countAndDescribe(10));

//->TYPEOF CONSTRAINT
function extractAndConvert<T extends object, K extends keyof T>(
  obj: T,
  key: K
) {
  return `Value: ${obj[key]}`;
}
extractAndConvert({ name: 'Max' }, 'name');
// extractAndConvert({ name: 'Max' }, 'surname');

//->GENERIC CLASSES
class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');
console.log(textStorage);
const numStorage = new DataStorage<number>();
numStorage.addItem(1);
numStorage.addItem(2);
numStorage.removeItem(1);
console.log(numStorage);
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'Max' });
// console.log(objStorage);

//-->GENERIC UTILITY TYPES
//->PARTIAL UTILITY TYPE
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //partial temporarily allows creating a blank object by easing on key/value pair requirements
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//->READONLY UTILITY TYPE
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
