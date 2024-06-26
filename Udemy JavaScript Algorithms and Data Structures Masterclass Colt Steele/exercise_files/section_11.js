// LESSON 11 - BUBBLE SORT
// > SORTING ALGORITHMS
// -> JS BUILT-IN SORT
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(); //asc order alphabetically
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort((a, b) => a.length - b.length); //arc order in length
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
[(6, 4, 15, 10)].sort((a, b) => a - b); //asc order
[6, 4, 15, 10].sort((a, b) => b - a); //desc order
// -> BUBBLE SORT
// ES5
function swap(arr, i1, i2) {
	let temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}
//ES2015
function swap_(arr, i1, i2) {
	[arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

// O(N) TC W/NOSWAPS OPTIMIZATION
function bubbleSort(arr) {
	let noSwaps;
	for (let i = 0; i < arr.length; i++) {
		noSwaps = true;
		for (let j = 0; j < arr.length - i - 1; j++) {
			console.log(noSwaps, arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return console.log(arr);
}
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
