// > INTERMEDIATE SORTING ALGORITHMS
// LESSON 17 - RADIX SORT
// GETDIGIT UTILITY FUNCTION
function getDigit(num, i) {
	return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
//DIGITCOUNT UTILITY FUNCTION
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//MOSTDIGIT UTILITY FUNCTION
function mostDigits(numbersArr) {
	let maxDigits = 0;
	for (let i = 0; i < numbersArr.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(numbersArr[i]));
	}
	return maxDigits;
}

// RADIX SORT
function radixSort(numbersArr) {
	// NUMBER OF MAX DIGIT INTEGER DEFINES THE NUMBER OF PASSES FOR SORTING
	let maxDigitCount = mostDigits(numbersArr);
	// MAKE PASSES @ EACH DIGIT
	for (let k = 0; k < maxDigitCount; k++) {
		// CREATE DIGIT BUCKETS FOR EACH PASS FOR SORTING
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < numbersArr.length; i++) {
			let digitValue = getDigit(numbersArr[i], k);
			digitBuckets[digitValue].push(numbersArr[i]);
		}
		numbersArr = [].concat(...digitBuckets);
	}
	return numbersArr;
}

radixSort([23, 345, 1121, 12, 1, 0]);
