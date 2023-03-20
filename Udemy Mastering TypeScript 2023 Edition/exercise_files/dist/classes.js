class Player {
  static description = 'Player In Our Game'; //Reserved for the original class not the instances
  #score = 0; //private property
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    // console.log('In constructor');
    // this.score = 0;
    // this.numLives = 10;
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw 'Score must be positive!';
    }
    this.#score = newScore;
  }
  set fullName(newName) {
    const [first, last] = newName.split(' ');
    this.first = first;
    this.last = last;
  }

  static randomPlayer() {
    console.log('I AM CREATING!!');
    return new Player('Andy', 'Walsh');
  }

  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log('BOOYAH!');
  }
  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log('THIS IS SECRET!!');
  } //private class method
}

class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, powers) {
    super(first, last); //player constructor
    this.powers = powers;
    console.log('I AM ADMIN');
  }
}

const admin = new AdminPlayer('erhan', 'ertem', [
  'delete',
  'restore world',
  'scorch',
]);
// admin.taunt();
console.log(admin);
// const player1 = new Player('Blue', 'Steele');
// player1.taunt();
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// // player1.#score;
// player1.getScore();
// player1.updateScore(28);
// console.log(player1.numLives);
// console.log(player1);
// console.log(player1.fullName);
// console.log(player1.score);
// player1.score = -100;
// player1.fullName = 'Erhan ERTEM';
// console.log(player1);
// // player1.#secret();
// // console.log(player1.last);
// // const player2 = new Player('Charlie', 'Brown');
// // player2.taunt();
// // console.log(player2);
// // console.log(player2.first);
// console.log(Player.randomPlayer());
