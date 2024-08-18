// > INTERMEDIATE SORTING ALGORITHMS
// LESSON 16 - QUICK SORT
// PIVOT HELPER UTILITY FUNCTION
function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
	function swap(arr, i, j) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	let pivot = arr[startIndex];
	let swapIndex = startIndex;

	for (let i = startIndex + 1; i <= endIndex; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	// Swap the pivot from the start the swapPoint
	swap(arr, startIndex, swapIndex);
	return swapIndex;
}

// QUICK SORT
function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
	if (startIndex < endIndex) {
		let pivotIndex = pivot(arr, startIndex, endIndex);
		// Sort Left Wing if Pivot
		quickSort(arr, startIndex, pivotIndex - 1);
		// Sort Right Wing of Pivot
		quickSort(arr, pivotIndex + 1, endIndex);
	}
	return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
