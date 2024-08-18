// const userName = 'Erhan';
// userName = 3;
// console.log(userName);

const button = document.querySelector('button')!;

function clickHandler(message: string) {
	console.log('Clicked! ' + message);
}

button.addEventListener('click', clickHandler.bind(null, "You're welcome")); // no this reservation - shortcircuit this as event due to event listener, just the argument
