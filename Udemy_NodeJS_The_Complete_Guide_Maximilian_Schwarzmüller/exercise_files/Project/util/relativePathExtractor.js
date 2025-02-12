const path = require('path');

const extractRelativePath = function (fullPath) {
	// Find the "images" folder dynamically and extract the relative path
	const match = fullPath.match(/images\\.+/);
	const relativePath = match ? match[0] : null; // Output: images\2025-02-12T10-39-02.335Z-2.jpeg
	const updatedPath = path.sep + relativePath; // Output: \images\2025-02-12T10-39-02.335Z-2.jpeg
	const finalUrlPath = path.normalize(updatedPath).replace(/\\/g, '/'); // OS indeoendent URL path with unified unix syntax
	return finalUrlPath;
};

module.exports = extractRelativePath;
