const name = prompt("Let's create a story together! What's your name?");
const color = prompt("What is your favorite color?");
const hobby = prompt("What is your favorite hobby?");




// 2. Combine the input with other words to create a story.
let story =
    `<p>It all started on a stormy night in April. ${name} was getting a little scared but was doing ${hobby} to stay calm. 
Suddenly, the lights went out for a few seconds. When they came back on, everthing was ${color}!!!</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;

