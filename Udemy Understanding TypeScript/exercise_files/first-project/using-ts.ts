const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement; // picked from the list per https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API
// NOTE: If you are not accessing a special property (like value in this case, which is only available on inputs), you can simply write HTMLElement.
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value)); // attribute value function always returns string
});
