"use strict";
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return 'Meoww';
    }
    return '';
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case 'pig':
            return 'Oink!';
        case 'cow':
            return 'Mooo!!!';
        case 'rooster':
            return 'CoocckoaaDooledoo!';
        case 'sheep':
            return 'Baaa!!';
        default:
            const _exhaustivecheck = animal;
            return _exhaustivecheck;
    }
}
const stevie = {
    kind: 'rooster',
    name: 'Steve Chicks',
    weight: 2,
    age: 2,
};
console.log(getFarmAnimalSound(stevie));
//# sourceMappingURL=exercises.js.map