console.log('I am a temp file');
// const x = 'Erhan';
// console.log(x);

export function add(x: number, y: number) {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export const pi = 3.14;
