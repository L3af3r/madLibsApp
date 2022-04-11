"use strict";

let userInputs = ['Timmie Willie', 'mouse', 'vegetable basket', 'wakes up', 'a party', 'village'];

let originalStory = `${userInputs[0]} is a country ${userInputs[1]} who is accidentally taken to a city in a ${userInputs[2]}. When he ${userInputs[3]}, he finds himself at ${userInputs[4]} and makes a friend. When he is unable to bear the city life, he returns to his home but invites his friend to the ${userInputs[5]}. When his friend visits him, something similar happens.`;

console.log(originalStory);

let questionArray = ['Enter a name', 'Enter an animal', 'Enter an object', 'Enter a social event', 'Enter a place'];

let numberOfQuestions = 4;
let questionCounter = 0;
let questionsLeft = 4;

for(let i = numberOfQuestions; i >= 0; i--){
	console.log(questionArray[questionCounter] + `(${questionsLeft} questions left)`);
	questionCounter++;
	questionsLeft--;
}

//let originalStory = `Timmie Willie is a country mouse who is accidentally taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and makes a friend. When he is unable to bear (tolerate or experience) the city life, he returns to his home but invites his friend to the village. When his friend visits him, something similar happens.`