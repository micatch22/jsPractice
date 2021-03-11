// Collect input from a user
let message = '';
let loNum = prompt('Enter your lowest number: ');
loNum = parseInt(loNum);
if (loNum){
    alert(`Your low number is ${loNum}`);
} else {
    loNum = prompt(`You did not enter a number. Please try again and this time enter a number: `);
}

let hiNum = prompt('Enter your high number: ');
hiNum = parseInt(hiNum);
if (hiNum){
    alert(`Your high number is ${hiNum}`);
} else {
    hiNum = prompt(`You did not enter a number. Please try again and this time enter a number: `);
}



// Use Math.random() and the user's number to generate a random number
let luckyNumber = Math.floor(Math.random() * (hiNum - loNum)) + loNum;


// Create a message displaying the random number
const main = document.querySelector('main');

message = `<p>Your lucky number between ${loNum} and ${hiNum} is ${luckyNumber}</p>`

main.innerHTML = message;

