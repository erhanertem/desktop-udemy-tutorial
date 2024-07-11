console.log(20, 'Hello', true);
const x = 100;
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({ name: 'Ernie', email: 'brad@gmail.com' });

console.group('Gropped Logging');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color:white; color;green;';
console.log('%cHello World', styles);
