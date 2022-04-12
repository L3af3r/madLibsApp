"use strict";

//let userInputs = ['Timmie Willie', 'mouse', 'vegetable basket', 'wakes up', 'a party', 'village'];
let userInputs = [];

let questionArray = ['Enter a name', 'Enter an animal', 'Enter a container object', 'Enter an action', 'Enter a social event', 'Enter a place'];

let numberOfQuestions = 5;
let questionCounter = 0;
let questionsLeft = 5;

for(let i = numberOfQuestions; i >= 0; i--){
	let input = prompt(questionArray[questionCounter] + `... (${questionsLeft} questions left)`);
	console.log(input);
	if(input === ""){
		console.log(`In '${questionArray[questionCounter]}...' question, the user didn't write anything`);
		input = "???";
	}
	userInputs.push(input);
	questionCounter++;
	questionsLeft--;
}

let originalStory = `<h2>${userInputs[0]} is a country ${userInputs[1]} who is accidentally taken to a city in a ${userInputs[2]}. When he ${userInputs[3]}, he finds himself at ${userInputs[4]} and makes a friend. When he is unable to bear the city life, he returns to his home but invites his friend to the ${userInputs[5]}. When his friend visits him, something similar happens.</h2>`;

console.log(originalStory);
document.write(originalStory);

alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

//let originalStory = `Timmie Willie is a country mouse who is accidentally taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and makes a friend. When he is unable to bear (tolerate or experience) the city life, he returns to his home but invites his friend to the village. When his friend visits him, something similar happens.`