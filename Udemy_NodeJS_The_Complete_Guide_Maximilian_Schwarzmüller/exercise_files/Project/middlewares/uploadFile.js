const path = require('path');
const multer = require('multer'); // text/binary data parser for mixed type data forms
const __root = require('../util/path');

// #2. Mixed type multipart form submission parser
/**
 * Creates a dynamic upload middleware for file handling.
 * @param {Object} options - Upload options.
 * @param {string[]} options.allowedMimeTypes - Array of allowed MIME types.
 * @param {'single' | 'array'} options.uploadType - Upload type ('single' or 'array').
 * @param {string} options.fieldName - The field name for the file input.
 * @param {number} [options.maxFiles=5] - Max number of files (for multiple uploads).
 * @param {number} [options.maxSize=2] - Max file size in MB.
 */
const upload = ({ allowedMimeTypes, uploadType, fieldName, maxFiles = 1, maxSize = 2 }) => {
	// Configure storage for uploaded files
	const fileStorage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.join(__root, '/images')); // Save files to 'images' directory
		},
		filename: (req, file, cb) => {
			const uniqueFileName = new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname;
			cb(null, uniqueFileName); // Generate unique filename with current timestamp
		},
	});
	const fileFilter = (req, file, cb) => {
		// Filter out only image files
		if (allowedMimeTypes.includes(file.mimetype)) {
			cb(null, true); // Accept that file
		} else {
			cb(null, false); // Reject file without throwing an error
		}
	};

	const uploadMulter = multer({
		storage: fileStorage,
		fileFilter,
		limits: { fileSize: maxSize * 1024 * 1024 }, // Convert MB to bytes
	});

	// Choose upload method dynamically
	if (uploadType === 'single') {
		return uploadMulter.single(fieldName);
	} else if (uploadType === 'multiple') {
		return uploadMulter.array(fieldName, maxFiles);
	} else {
		throw new Error("Invalid upload type. Use 'single' or 'multiple'.");
	}
};

module.exports = { upload };
