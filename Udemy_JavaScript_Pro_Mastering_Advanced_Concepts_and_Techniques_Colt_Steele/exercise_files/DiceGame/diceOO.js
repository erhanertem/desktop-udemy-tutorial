class DiceGame {
  constructor(rollBtnId, resultDisplayId) {
    this.rollBtn = document.getElementById(rollBtnId);
    this.resultDisplay = document.getElementById(resultDisplayId);

    this.rollBtn.addEventListener("click", this.rollDice);
  }

  // Generate a random number between 1 and 6 (inclusive)
  getRandomRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Check if the user won
  checkWin(roll) {
    return roll === 6;
  }

  // Bind the rollDice method to the click event
  rollDice = () => {
    const roll = this.getRandomRoll();

    if (this.checkWin(roll)) {
      this.resultDisplay.innerText = `You rolled a ${roll}! You win!`;
    } else {
      this.resultDisplay.innerText = `You rolled a ${roll}. Try again!`;
    }
  };
}

// Start the game by creating a new instance
new DiceGame("rollBtn", "result");
