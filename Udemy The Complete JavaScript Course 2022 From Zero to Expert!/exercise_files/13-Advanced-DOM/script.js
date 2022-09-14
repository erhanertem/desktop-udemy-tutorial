'use strict';
// LESSON 186 SELECTING, CREATING, DELETING ELEMENTS

// //-->SELECTING ELEMENTS

// console.log(document.documentElement); //refers to document root element
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header'); //single element selection
// const allSelections = document.querySelectorAll('.section'); //single element selection

// document.getElementById('section--1');
// //NOTE: . or # is only for queryselector methods.
// //VERY IMPORTANT! this returns a node list array. It snapshots the selection of elements at that time. When the DOM gets updated, it doesnt.

// const allButtons = document.getElementsByTagName('button');
// //VERY IMPORTANT! this returns a HTMLCollection array list which gets updated as soon as an element is dropped from the DOM.

// document.getElementsByClassName('btn');

// //-->CREATING AND INSERTING ELEMENTS

// //CREATE ELEMENT
// //#1
// const message = document.createElement('div'); //at this point its no where in the page. We just have created it
// //#2
// message.classList.add('cookie-message'); // we add class name to our element.
// //#3
// message.textContent =
//   'We use cookies for improved fucntionality and analytics.'; // we can add text to our div element
// //#4
// //Alternatingly we can add mesage in ciombination with some other tag elements as a whole with innerHTML as follows:
// message.innerHTML =
//   'We use cookies for improved fucntionality and analytics.<button class="btn btn--close-cookie>Got it!</button>';
// //INSERT ELEMENT
// //#1
// //INSERT AS A WHOLE BLOCK
// //.insertAdjacentHTML --> quick and easy way of inserting HTML elements
// //#2
// //INSERT TOP OR BOTTOM INSIDE A BLOCK
// //#2.1
// header.prepend(message); //Adds the above HTML element/element group inside the top of the header queryselected item
// //#2.2
// header.append(message); //Adds the above HTML element/element group inside the bottom of the header queryselected item
// //VERY IMPORTANT! prepending and appending the same DOM element consecutively moves the element as per the last location. Message could not be in more than one place.
// //#2.3
// //IMPORTANT: In order to copy the message to multiple locations we got to make clones of it.
// header.append(message.cloneNode(true));
// //#3
// //INSERT BEFORE OR AFTER OUTSIDE THE BLOCK
// //3.1
// //Put the new element before the header element
// header.before(message);
// //3.2
// //Put the new element after the header element
// header.after(message);

// //-->DELETING ELEMENTS

// document
//   .querySelector('btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.parentElement.removeChild(message);
//     //IMPORTANT: this is an older way of removing the selection. First we move one up to parent element using DOM traversing and from there we got to remove the child with the reference queryselector
//     //NOTE Now we can do it directly AS FOLLOWS!
//     message.remove();
//   });

// LESSON 187 STYLES, ATTRIBUTES AND CLASSES

// //-->STYLES

// //#1
// //Sets inline styles via JS by media query selection
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.backgroundColor); // would return iline css value
// console.log(message.style.height); //IMPORTANT: would not return a css value unless its inline style css.
// // VERY IMPORTANT! In order to get computed CSS styles, we would a new method
// console.log(getComputedStyle(message).color); //this returns the color value for the message queryselection
// console.log(getComputedStyle(message).height); //this returns the height value for the message queryselection
// //IMPORTANT This method returns a STRING!!!!

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //strips the messageheight value string of 10px and graps 10 only via Number.parsefloat and adds 30 and adds px string --> numer 40px string it becomes

// //#2
// //Sets inline style via setProperty
// //Say we have :root{--color-primary: #5ec576} definitions
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// document.body.style.setProperty(message, '#37383d'); //message.style.backgroundColor = '#37383d'

// //-->ATTRIBUTES

// //#1 GET/SET STANDARD ATTRIBUTES
// const logo = document.querySelector('.nav__logo');
// //#1.1 GET STANDARD ATTRIBUTE
// console.log(logo.alt); //log the "alt" attribute of the query selection --> "Bankist logo"
// console.log(logo.src); //log the ABSOLUTE VALUE OF "src" attribute of the query selection --> "localhost: 127.0.0.0//img/logo.png" --> // IMPORTANT: in order to get just the dir value we got to use getAttribute()
// //#1.2 SET STANDARD ATTRIBUTES
// logo.alt = 'Beautiful minimalist logo';

// //#2 GET/SET NON-STANDARD ATTRIBUTES
// console.log(logo.designer); //NOTE: log the "designer" attribute of the query selection --> undefined since its not a standard attribute
// //#2.1 GET NON-STANDARD ATTRIBUTES
// console.log(logo.getAttribute('designer')); //VERY IMPORTANT! THIS IS THE PROPER WAY OF GETTING non-standard attribute!
// console.log(logo.getAttribute('src')); //VERY IMPORTANT! YIELDS THE RELATIVE DIR PATH STRING OF THE SRC ATTRIBUTE
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); //returns absolute path https://127.0.0.1:8080/#
// console.log(link.getAttribute('href')); //returns relative path /#
// //#2.2 SET NON-STANDARD ATTRIBUTES
// console.log(logo.setAttribute('designer', 'Erhan'));

// //-->DATA ATTRIBUTES
// /* <img>
//   src ="img/logo.png"
//   alt="Bankist logo"
//   class="nav__logo"
//   id="logo"
//   designer="Erhan"
//   data-version-number = "3.0" --> data attribute example
// </img>; */
// console.log(logo.dataset.versionNumber);

// //-->CLASSES

// logo.classList.add('c', 'j', 'b');
// logo.classList.remove('c', 'b');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //VERY IMPORTANT! DO NOT USE className()
// logo.className = 'e'; //it would override every class name on the element withg this classname. AVOID using it!!!!

// LESSON 189 TYPES OF EVENTS AND EVENT HANDLERS

// const h1 = document.querySelector('h1');
// //--> Modern code
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1); // NOTE we terminate the eventlistener - it could be inside the same function block or outside the function or even inside a setTimeout() outside this function block
// };
// h1.addEventListener('mouseenter', alertH1); //we initiate it
// h1.removeEventListener('mouseenter', alertH1); //we can do here
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // or we can even locate inside a settimeout() function

// //--> Alternate code
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// LESSON 191 EVENT PROPAGATION IN PRACTICE

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); //VERY IMPORTANT! currentTarget is actually same as this which points to the node called by the function

//   //-->STOP PROPAGATION
//   e.stopPropagation(); //IMPORTANT! STOPS THE BUBBLE EFFECT
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget); //VERY IMPORTANT! e.target points out the place where click occured
// });

// LESSON 193 DOM TRAVERSING

// const h1 = document.querySelector('h1');

// //-->GOING DOWNWARDS: SELECTING CHILD
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); //this gives every single thing under h1
// console.log(h1.children); //direct children - this gives a HTML collection of the h1 element
// h1.firstElementChild.style.color = 'white'; //direct child first
// h1.lastElementChild.style.color = 'orangered'; //direct child last

// //-->GOING UPWARDS: PARENTS
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //-->GOING SIDEWAYS: SIBLINGS

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children); //scan all the siblings including itself
// //example -->
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// }); //transform scale all the siblings except h1 itself...

// LESSON 202 LIFECYCLE DOM EVENTS

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML Parsed and DOM tree built!', e);
// });
// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
