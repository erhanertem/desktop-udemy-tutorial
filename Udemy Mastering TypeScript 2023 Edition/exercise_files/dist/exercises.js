"use strict";
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'colt' }, { num: 9 });
console.log('🚀 | file: exercises.ts:938 | comboObj:', comboObj);
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('erhan');
function makeEmptyArray() {
    return [];
}
const strings = makeEmptyArray();
class VideoPlayList {
    constructor() {
        this.videos = [];
    }
}
class SongPlayList {
    constructor() {
        this.songs = [];
    }
}
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
const videos = new PlayList();
//# sourceMappingURL=exercises.js.map