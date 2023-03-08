let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}
// generateError('An error occured!', 500);

const button = document.querySelector('button')!;
function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked!' + message);
}
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

function add_now(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}
