// function curry(fn) {
//   function curriedFn(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...moreArgs) {
//         return curriedFn.apply(this, args.concat(moreArgs));
//       };
//     }
//   }
//   return curriedFn;
// }

function compose(...functions) {
  return function (result) {
    return functions.reduceRight(function (prevResult, fn) {
      return fn(prevResult);
    }, result);
  };
}

const inputText = document.getElementById('input-text');
const uppercaseCheckbox = document.getElementById('uppercase');
const colorPicker = document.getElementById('color-picker');
const applyStylesButton = document.getElementById('apply-styles');
const styledText = document.getElementById('styled-text');
const fontSizeSelector = document.getElementById('font-size');
const fontFamilySelector = document.getElementById('font-family');

function applyUppercase(text) {
  return uppercaseCheckbox.checked ? text.toUpperCase() : text;
}

function applyColor(text) {
  styledText.style.color = colorPicker.value;
  return text;
}

function applyFontSize(text) {
  styledText.style.fontSize = fontSizeSelector.value;
  return text;
}

function applyFontFamily(text) {
  styledText.style.fontFamily = fontFamilySelector.value;
  return text;
}

function updateStyledText(text) {
  styledText.textContent = text;
}

applyStylesButton.addEventListener('click', function () {
  compose(
    updateStyledText,
    applyColor,
    applyUppercase,
    applyFontFamily,
    applyFontSize
  )(inputText.value);
});
