class Chicken {
  constructor(id, name, age, breed) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

class ChickenRegistry {
  #chickens = new Map();

  addChicken(chicken) {
    if (!chicken.id) {
      throw new Error('Chicken must have an id');
    }
    if (this.#chickens.has(chicken.id)) {
      throw new Error('Chicken ID is already in use!');
    }
    this.#chickens.set(chicken.id, chicken);
  }

  getChicken(id) {
    return this.#chickens.get(id);
  }

  removeChicken(id) {
    this.#chickens.delete(id);
  }

  getAllChickens() {
    return [...this.#chickens.values()];
  }
}

const chicken1 = new Chicken(1, 'Henrietta', 3, 'Silkie');
const chicken2 = new Chicken(2, 'Banjo', 3, 'Leghorn');
const chicken3 = new Chicken(2, 'Zanjo', 3, 'Zeghorn');

const farm = new ChickenRegistry();
farm.addChicken(chicken1);
farm.addChicken(chicken2);
farm.addChicken(chicken3);
console.log(farm.getAllChickens());
