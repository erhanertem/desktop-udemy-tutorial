// LESSON 8 - RECURSION PROBLEM SET
// > EXERCISE #10
function power(i, j) {
	// BASE CASE - ESCAPE HATCH
	if (j === 0) {
		return 1;
	}
	// INLINE RECURSIVE CALL
	return i * power(i, j - 1);
}

// console.log('power(2, 0) :', power(2, 0));
// console.log('power(2, 2) :', power(2, 2));
// console.log('power(2, 4) :', power(2, 4));

// > EXERCISE #11
function factorial(i) {
	let result = 1;

	function helper(i) {
		if (i === 0) {
			return 1;
		}
		return i * factorial(--i);
	}
	result = helper(i);

	return result;
}

function factorial_(i) {
	if (i < 0) {
		return 0;
	}
	if (i <= 1) {
		return 1;
	}
	return i * factorial(i - 1);
}

console.log('factorial(1) :', factorial(1));
console.log('factorial(2) :', factorial(2));
console.log('factorial(4) :', factorial(4));
console.log('factorial(7) :', factorial(7));

// > EXERCISE #12

function sumOfArray(arr) {
	let total = 0;
	const length = arr.length;

	function helper(i) {
		if (i === length) {
			return;
		}
		total += arr[i];
		i++;
		return helper(i);
	}

	helper(0);

	return total;
}
function productOfArray(arr) {
	let product = 1;
	const length = arr.length;

	function helper(i) {
		if (i === length) {
			return 1;
		}
		product *= arr[i];
		i++;
		return helper(i);
	}

	helper(0);

	return product;
}

function productOfArray_(arr) {
	// BASE CASE
	if (arr.length === 0) {
		return 1;
	}
	// RECURSIVE LOGIC
	return arr[0] * productOfArray_(arr.slice(1));
}

// console.log('productOfArray([1, 2, 3]) :', productOfArray([1, 2, 3])); //6
// console.log('productOfArray([1, 2, 3, 10]) :', productOfArray([1, 2, 3, 10])); //60

// > EXERCISE #13

function recursiveRange(num) {
	// BASE CASE
	if (num === 0) {
		return 0;
	}
	// RECURSIVE LOGIC
	return num + recursiveRange(num - 1);
}

// console.log('recursiveRange(6) :', recursiveRange(6)); //21
// console.log('recursiveRange(10) :', recursiveRange(10)); //55

// > EXERCISE #14

function fib(nth) {
	// BASE CASE
	if (nth <= 2) return 1;
	// RECURSIVE LOGIC
	return fib(nth - 1) + fib(nth - 2);
}

// fib(1); // 1
// console.log('fib(1) :', fib(1));
// fib(2); // 1
// console.log('fib(2) :', fib(2));
// fib(4); // 3
// console.log('fib(4) :', fib(4));
// fib(10) // 55
// console.log('fib(10) :', fib(10));
// fib(28) // 317811
// fib(35) // 9227465

function fib_with_memoization(num, memo = {}) {
	if (num in memo) return memo[num];

	if (num <= 2) return 1;

	memo[num] = fib(num - 1, memo) + fib(num - 2, memo);

	return memo[num];
}
// console.log(fib_with_memoization(1476));
/*
Fabiola Irene's solution looks good and it showcases an important concept in computer science called memoization.

Memoization is a technique where we store the results of expensive function calls and return the cached result when the same inputs occur again. This is particularly useful in recursive functions like calculating Fibonacci numbers, where the same values are often recalculated multiple times.

The solution that Fabiola Irene shared implements memoization by passing a memo object as a parameter in the fib function. This object stores previously calculated Fibonacci numbers. Here is how this solution works:

- If the Fibonacci number for the given num is already calculated and stored in memo, it immediately returns this value. This step significantly reduces the number of calculations, especially for larger numbers.

- For num less than or equal to 2, the function returns 1, as these are the first two numbers in the Fibonacci sequence.

- If the value is not in the memo, the function calculates it by recursively calling itself for num-1 and num-2, and stores the result in memo.

- The calculated Fibonacci number is returned.

This can be a powerful tool in optimizing recursive functions, and it can make things more efficient. This can be particularly critical when dealing with large inputs. And, the solution that Fabiola Irene shared is an excellent example of how memoization can be used effectively in recursive functions.

If there are any questions, let me know.
*/
