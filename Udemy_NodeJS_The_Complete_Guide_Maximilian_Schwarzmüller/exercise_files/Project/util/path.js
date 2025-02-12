const path = require('path');

// Get the directory name of the main module
const __root = path.dirname(require.main.filename);

module.exports = __root;
