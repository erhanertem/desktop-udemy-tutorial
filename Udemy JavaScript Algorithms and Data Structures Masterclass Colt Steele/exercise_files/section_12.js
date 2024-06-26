// LESSON 12 - SELECTION SORT
// > SORTING ALGORITHMS
function selectionSort(arr) {
	for (i = 0; i < arr.length; i++) {
		let lowest = i; //Dwindling array @ each pass
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) {
				lowest = j;
			}
		}

		// SWAP ONLY IF CURRENTLY LOWEST IS STILL NOT THE LOWEST
		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return console.log(arr);
}
selectionSort([8, 1, 2, 3, 4, 5, 5, 6, 7]);
