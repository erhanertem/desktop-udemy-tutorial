const partial =
  (f, ...fixedArgs) =>
  (...args) =>
    f(...fixedArgs, ...args);

const compose = (...fns) =>
  fns.reduceRight(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

// DICE GAME CODE:
const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = roll => roll === 6;

const displayResult = (element, message) => {
  element.innerText = message;
};

const createMessage = roll => {
  return checkWin(roll)
    ? `You rolled a ${roll}.  You win!`
    : `You rolled a ${roll}.  Try again`;
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const showResult = partial(
    displayResult,
    document.getElementById(resultDisplayId)
  );
  const playGame = compose(getRandomRoll, createMessage, showResult);
  document.getElementById(rollBtnId).addEventListener('click', playGame);
};

createDiceGame('rollBtn', 'result');
