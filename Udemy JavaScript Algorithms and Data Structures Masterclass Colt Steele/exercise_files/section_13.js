// LESSON 13 - INSERTION SORT
// > SORTING ALGORITHMS
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j >= 0; j--) {
			if (arr[j - 1] > arr[j]) {
				[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
			} else {
				break;
			}
		}
	}
	return console.log(arr);
}
insertionSort([2, 2, 1, 9, 76, 4]);
