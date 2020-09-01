const buttonArray = [];
const buttonOne = buttonArray.push(document.getElementsByClassName("one"));
const buttonTwo = buttonArray.push(document.getElementsByClassName("two"));
const buttonThree = buttonArray.push(document.getElementsByClassName("three"));
const buttonFour = buttonArray.push(document.getElementsByClassName("four"));

for (let i = 0; i < buttonArray.length; i++) {
  console.log(buttonArray[i]);
}
