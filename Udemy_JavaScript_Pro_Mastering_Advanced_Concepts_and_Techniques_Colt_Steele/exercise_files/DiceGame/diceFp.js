const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = roll => roll === 6;

const displayResult = (element, message) => {
  element.innerText = message;
};

const rollDiceAndDisplayResult = resultDisplay => () => {
  const roll = getRandomRoll();
  const message = checkWin(roll)
    ? `You rolled a ${roll}.  You win!`
    : `You rolled a ${roll}.  Try again`;
  displayResult(resultDisplay, message);
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const rollBtn = document.getElementById(rollBtnId);
  const resultDisplay = document.getElementById(resultDisplayId);

  rollBtn.addEventListener('click', rollDiceAndDisplayResult(resultDisplay));
};

createDiceGame('rollBtn', 'result');
