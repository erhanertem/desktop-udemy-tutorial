"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const arrString = Array.from(this.data);
        [arrString[leftIndex], arrString[rightIndex]] = [
            arrString[rightIndex],
            arrString[leftIndex],
        ];
        this.data = arrString.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
