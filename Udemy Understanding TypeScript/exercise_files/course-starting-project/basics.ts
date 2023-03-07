function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }

  if (showResult) {
    console.log(resultPhrase, n1 + n2);
  } else {
    return n1 + n2;
  }
}

let number3: number;
number3 = 5;
// const number1 = '5';
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
