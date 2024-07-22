function chunk(arr, chunkSize) {
	const chunked = [];

	for (let el of arr) {
		// GRAP THE LAST CHUNK ARR IN THE ARR
		const last = chunked[chunked.length - 1];
		// IF THERE IS NO CHUNK ARR OR THE LAST CHUNK IN THE ARRAY MEETS THE CHUNKSIZE
		if (!last || last.length === chunkSize) {
			// CREATE A NEW CHUNK AND REGISTER THE ELEMENT
			chunked.push([el]);
		} else {
			// ELSE INSERT INTO THE LAST CHUNK IN THE ARRAY
			last.push(el);
		}
	}
	// RETURN THE CHUNKED ARR
	return chunked;
}

module.exports = chunk;
