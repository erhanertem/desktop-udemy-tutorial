//Lesson 41 The Problem with Callbacks: Callback Hell

const fs = require('fs'); //Import node local file system module
const superagent = require('superagent'); //Import npm package that handles http requests

// //CALLBACK HELL EXAMPLE
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`) //This http link template is from dog.ceo/dog-api which provides random images of the questioned dog breed
//     .end((err, res) => {
//       // console.log(res.body.message); //get a hold of the http link for the image

//       //->Guard clause for err
//       if (err) return console.log(err.message);

//       //->Process/write image link into a txt file
//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         //->Guard clause for err
//         if (err) return console.log(err.message);

//         console.log('Random dog image saved to file.');
//       });
//     });
// });

//Lesson 42 From Callback Hell to Promises

// //REWRITING WITH CONSUMING PROMISES
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`) //This http link template is from dog.ceo/dog-api which provides random images of the questioned dog breed
//     //get returns a promise by default per the npm package - so we need only consume that response from the get method
//     .then(res => {
//       //NOTE: APPROVED PROMISE IS HANDLED HERE
//       // console.log(res.body.message); //get a hold of the http link for the image

//       //->Process/write image link into a txt file
//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         //->Guard clause for err
//         if (err) return console.log(err.message);

//         console.log('Random dog image saved to file.');
//       });
//     })
//     .catch(err => {
//       console.log(err.message);
//     }); //NOTE: REJECTED GET PROMISE IS HANDLED HERE!!!!
// });

//Lesson 43 Builging Promises

// //EVEN MORE REWRITING WITH CREATING+CONSUMING/RETURNING PROMISES IN A CHAIN
// //Promisify readFile function
// const readFilePromise = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);
//     });
//   });
// };
// //Promisify writeFile function
// const writeFilePromise = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('Could not write file 😢');
//       resolve('success');
//     });
//   });
// };

// readFilePromise(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(result => {
//     console.log(result.body.message); //get a hold of the http link for the image
//     return writeFilePromise('dog-img.txt', result.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to file.');
//   })
//   .catch(err => {
//     console.log(err);
//   }); //NOTE: REJECTED GET PROMISE IS HANDLED HERE!!!!

//Lesson 44 Consuming Promises with Async/Await

//Promisify readFile function
const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😢');
      resolve(data);
    });
  });
};
//Promisify writeFile function
const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file 😢');
      resolve('success');
    });
  });
};

// const getDogPic = async () => {
//   try {
//     const data = await readFilePromise(`${__dirname}/dog.txt`); //READ TXT FILE
//     console.log(`Breed: ${data}`); //PRINT WHAT IS INSIDE FILE
//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ); //GET PIC LINK FROM DOG API
//     console.log(res.body.message);
//     await writeFilePromise('dog-img.txt', res.body.message); //AWAIT WRITING FILE
//     console.log('Random dog image saved to file.');
//   } catch (err) {
//     //for err handling try {} catch{} blocks required - not relevant to async/await
//     console.log(err);
//   }
// };
// getDogPic();

//Lesson 45 Consuming Promises with Async/Await

// console.log('1: Will get dog pics!');
// const x = getDogPic();
// console.log(x);
// console.log('2: Done getting dog pics!');

// const getDogPic = async () => {
//   try {
//     const data = await readFilePromise(`${__dirname}/dog.txt`); //READ TXT FILE
//     console.log(`Breed: ${data}`); //PRINT WHAT IS INSIDE FILE
//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ); //GET PIC LINK FROM DOG API
//     console.log(res.body.message);
//     await writeFilePromise('dog-img.txt', res.body.message); //AWAIT WRITING FILE
//     console.log('Random dog image saved to file.');
//   } catch (err) {
//     //for err handling try {} catch{} blocks required - not relevant to async/await
//     console.log(err);
//     throw err;
//   }
//   return '2: READY 🤡';
// };

// //-> #1
// console.log('1: Will get dog pics!');
// getDogPic()
//   .then(x => {
//     console.log(x);
//     console.log('2: Done getting dog pics!');
//   })
//   .catch(err => {
//     console.log('ERROR 💥'); //since we add this line, whether promise is an error or not its a returned promise so we need to handle error handling here as well.
//   });

// //-> #2 IEFF way
// (async () => {
//   try {
//     console.log('1: Will get dog pics!');
//     const x = await getDogPic();
//     console.log(x);
//     console.log('2: Done getting dog pics!');
//   } catch (err) {
//     console.log('ERROR 💥');
//   }
// })();

//Lesson 46 Waiting for Multiple Promises Simultaneously

const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`); //READ TXT FILE
    console.log(`Breed: ${data}`); //PRINT WHAT IS INSIDE FILE

    //Multi promises
    const res1Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    ); //GET PIC LINK FROM DOG API
    const res2Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    ); //GET PIC LINK FROM DOG API
    const res3Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    ); //GET PIC LINK FROM DOG API

    const all = await Promise.all([res1Promise, res2Promise, res3Promise]);
    const imgs = all.map(el => el.body.message); //from those promise info we would need item.body.message --> hyperlink for img files
    console.log(imgs);

    await writeFilePromise('dog-img.txt', imgs.join('\n')); //AWAIT WRITING FILE
    console.log('Random dog image saved to file.');
  } catch (err) {
    //for err handling try {} catch{} blocks required - not relevant to async/await
    console.log(err);
  }
  return '2: READY 🤡';
};

getDogPic();
