/**
 * How to get random number, digit in javascript
 */


//If the digit 0 is not included (1-9):
 function randInt() {
    returnMath.floor((Math.random()*9)+1);
}

//If the digit 0 is included (0-9):
function randIntWithZero() {
    returnMath.floor((Math.random()*10));
}