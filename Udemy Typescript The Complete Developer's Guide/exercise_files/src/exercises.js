"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//LESSON 1 - GETTING STARTED WITH TYPESCRIPT
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    console.log(res.data);
});
console.log('I AM NEW!!');
