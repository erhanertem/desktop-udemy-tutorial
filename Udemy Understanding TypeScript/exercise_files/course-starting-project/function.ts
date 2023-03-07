function add_1(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}
function add(n1: number, n2: number): number {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log('Result: ' + num);
} //void means you return nothing from a function
printResult(add(5, 12));
// let combineValues: Function; //No control over the function variables
let combineValues: (a: number, b: number) => number; //Control over function variable types and the expected output type
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(10, 20, result => {
  console.log(result);
  return true;
});
