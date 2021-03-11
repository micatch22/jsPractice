/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank = '';

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
   const answer1 = "instead";
const answer2 = "forget it";
const answer3 = "to undo";
const answer4 = "don't worry about it";
const answer5 = "I bet";
*/
const response1 = prompt('en cambio');
if (response1.toUpperCase() === 'INSTEAD'){
    correct += 1;
}
const response2 = prompt('olvidalo');
if (response2.toUpperCase() === 'FORGET IT'){
    correct += 1;
}
const response3 = prompt('deshacer');
if (response3.toUpperCase() === 'TO UNDO'){
    correct += 1;
}
const response4 = prompt('no pasa nada');
if (response4.toUpperCase() === "DON'T WORRY ABOUT IT"){
    correct += 1;
}
const response5 = prompt('apuesto a que');
if (response5.toUpperCase() === "I BET"){
    correct += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct == 5){
    rank = "Gold";
} else if (correct >= 3){
    rank = "Silver";
} else if (correct >= 1){
    rank = "Bronze";
} else {
    rank = "None";
}


// 6. Output results to the <main> element
let results = `<h2>You got ${correct} answers correct.</h2>
<p> Your player rank is <b>${rank}</b></p>`
main.innerHTML = results;