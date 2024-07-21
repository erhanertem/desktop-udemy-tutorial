const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// -> basename() Get only the filename (w/ or w/out ext)
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');
console.log(base1);
console.log(base2);

// -> extname() Get the extension part of the pathfile
const ext = path.extname(myFilePath);
console.log(ext);

// -> dirname() Get the folder paths portion
const dir = path.dirname(myFilePath);
console.log(dir);

// -> join() For creating file paths - RECOMMENDED WAY OF CREATING RELATIVE PATHS
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(myPath);

// -> resolve() CREATES ABSOLUTE PATHS
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath2);

// -> __dirname - GLOBAL ENV VARIABLE onyl dir
console.log(__dirname);

// -> __filename - GLOBAL ENV VARIABLE includes dir+file
console.log(__filename);
