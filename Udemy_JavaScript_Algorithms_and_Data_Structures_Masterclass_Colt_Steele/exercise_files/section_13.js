// LESSON 13 - INSERTION SORT
// > SORTING ALGORITHMS
function insertionSort(arr) {
	// RESERVE FIRST ARRAY ELEMENT TO START FOR SORTING - THE SECOND ELEMENT ONWARDS IS ACQUIRED FOR INSERT SORTING
	for (let i = 1; i < arr.length; i++) {
		// INSERT SORTING TO LEFT WING ARRAY
		for (let j = i; j >= 0; j--) {
			// CHECK IF THE PRECEDING ELEMENT IS BIGGER - IF SO SWATCH ELSE BREAK SORTING
			if (arr[j - 1] > arr[j]) {
				// SWATCH ELEMENTS LOGIC
				[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
			} else {
				break;
			}
		}
	}
	return console.log(arr);
}
insertionSort([2, 2, 1, 9, 76, 4]);
