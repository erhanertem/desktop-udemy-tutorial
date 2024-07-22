function anagram(str1, str2) {
	// Remove spaces and convert to lowercase
	const cleanStr1 = str1.trim().toLowerCase();
	const cleanStr2 = str2.trim().toLowerCase();

	// Sort the characters in both strings
	const sortedStr1 = cleanStr1.split('').sort().join('');
	const sortedStr2 = cleanStr2.split('').sort().join('');

	// Compare the sorted strings
	return sortedStr1 === sortedStr2;
}

function anagram2(str1, str2) {
	charMap1 = buildCharMap(str1);
	charMap2 = buildCharMap(str2);

	if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
		return false;
	}
	for (let char in charMap1) {
		if (charMap1[char] !== charMap2[char]) {
			return false;
		}
	}
	return true;
}
function buildCharMap(str) {
	const charMap = {};
	for (let char of str.trim().toLowerCase()) {
		charMap[char] = (charMap[char] || 0) + 1;
	}
	return charMap;
}
module.exports = anagram;
