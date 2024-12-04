const path = require('path');

// Get the directory name of the main module
module.exports = path.dirname(require.main.filename);
