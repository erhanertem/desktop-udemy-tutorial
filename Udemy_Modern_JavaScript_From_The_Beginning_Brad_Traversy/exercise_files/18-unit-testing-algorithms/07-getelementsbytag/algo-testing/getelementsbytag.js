function getElementsByTag(root, tagName) {
	let result = [];
	// GUARD CLAUSES
	if (!root) {
		return result;
	}
	if (!tagName) {
		result.push(root);
		return result;
	}

	// If root tagname is a tag we are looking for
	if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
		result.push(root);
	}

	// IF ROOT HAS CHILDREN
	// if (root.hasChildNodes()) {
	if (root.children.length > 0) {
		for (const child of root.children) {
			result.push(...getElementsByTag(child, tagName));
		}
	}

	return result;
}

module.exports = getElementsByTag;
