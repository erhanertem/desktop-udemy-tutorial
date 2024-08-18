// > INTERMEDIATE SORTING ALGORITHMS
// LESSON 15 - MERGE SORT

// MERGE UTILITY FUNCTION
function merge(arr1, arr2) {
	let merged = []; //Merged array Initialization
	let i = 0; //Start index @ arr1
	let j = 0; //Start index @ arr2
	let mergedLength = arr1.length + arr2.length;

	while (merged.length < mergedLength) {
		if (arr1[i] === undefined || arr2[j] < arr1[i]) {
			merged.push(arr2[j]); //Push the smallest of the compared
			j++; //Increment the index @ array of smaller element
		} else {
			merged.push(arr1[i]); //Push the smallest of the compared
			i++; //Increment the index @ array of smaller element
		}
	}
	// RETURN THE MERGED ARRAY
	return merged;
}

// MERGESORT SNIPPET
function mergeSort(arr) {
	// GUARD CLAUSE - Return the halfed array when it hits 1 or less
	if (arr.length <= 1) return arr;
	//  HALF THE ARRAY
	let mid = Math.floor(arr.length / 2);
	let leftPiece = mergeSort(arr.slice(0, mid));
	let rightPiece = mergeSort(arr.slice(mid));
	//MERGE HALFED ARRAYS TO WHOLE
	return merge(leftPiece, rightPiece);
}
mergeSort([10, 24, 76, 73]);
