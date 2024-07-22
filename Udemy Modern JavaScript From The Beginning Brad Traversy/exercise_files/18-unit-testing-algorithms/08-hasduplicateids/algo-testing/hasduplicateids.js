function hasDuplicateIds(root, idSet = new Set()) {
	if (!root) {
		return false;
	}
	if (root.id && idSet.has(root.id)) {
		return true;
	}

	if (root.id) {
		idSet.add(root.id);
	}

	// RECURSIVE FOR INNER DEPTHS ID CHECK
	for (let child of root.children) {
		if (hasDuplicateIds(child, idSet)) {
			return true;
		}
	}

	return false;
}

module.exports = hasDuplicateIds;
