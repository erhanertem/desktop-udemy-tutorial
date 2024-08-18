// // >  Sync Version Write to a file
// const fs = require('fs');
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File 3 created');

// >  Async Version Write to a file
// // -> Async write w/ Callback version
// const fs = require('fs');
// fs.writeFile('file1.txt', 'Hello World 1', (err) => {
// 	// Check for error
// 	if (err) {
// 		throw err;
// 	}
// 	// Do for no error condition
// 	console.log('File 1 created');
// });
// // -> ASync write w/ Promise version
// const fs = require('fs/promises');
// // const fs = require('fs').promises;
// fs.writeFile('file2.txt', 'Hello World 2')
// 	.then(() => console.log('File 2 created'))
// 	.catch((err) => console.log(err));

// > Async/Await Version
const fs = require('fs/promises');
// -> Write file
async function createFile(filename, content) {
	try {
		await fs.writeFile(filename, content);
		console.log('File created');
	} catch (err) {
		console.log(err);
	}
}
// createFile('file4.txt', 'Hello World 4');

// -> Read file
async function readFile(filename) {
	try {
		const data = await fs.readFile(filename, 'utf8');
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');
// readFile('file4.txt');

// -> Delete file
async function deleteFile(filename) {
	try {
		await fs.unlink(filename);
		console.log(`File ${filename} deleted`);
	} catch (err) {
		console.log(err);
	}
}
// deleteFile('file4.txt');

// -> Rename a file
async function renameFile(oldName, newName) {
	try {
		await fs.rename(oldName, newName);
		console.log(`File named as ${oldName} has been renamed to ${newName}`);
	} catch (err) {
		console.log(err);
	}
}
// renameFile('file3.txt', 'file5.txt');

// -> Create a folder
// // This version creates an error if the folder already exists
// async function createFolder(folderName) {
// 	try {
// 		await fs.mkdir(folderName);
// 		console.log(`A folder named ${folderName} created`);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// Check if folder exists then create the folder
// const path = require('path');
async function createFolder(folderName) {
	try {
		// Check if the folder already exists
		await fs.access(folderName);
		console.log(`Folder named ${folderName} already exists`);
	} catch (error) {
		// If the folder does not exist, create it
		if (err.code === 'ENOENT') {
			await fs.mkdir(folderName);
			console.log(`A folder named ${folderName} created`);
		} else {
			console.log(err);
		}
	}
}
createFolder('Test_Folder');
