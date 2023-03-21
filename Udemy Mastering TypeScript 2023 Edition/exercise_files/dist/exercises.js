"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => {
    console.log('WOO!!!');
    console.log(res.data);
    printUser(res.data);
})
    .catch(e => console.log('ERROR!!', e));
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
    console.log('WOO!!!');
    console.log(res.data);
    res.data.forEach(printUser);
})
    .catch(e => console.log('ERROR!!', e));
function printUser(user) {
    console.log('................');
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
