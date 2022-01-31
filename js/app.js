'use strict';

// console.log('hey world');

let user = prompt('What\'s up? My name is Liesl, do you have something I can call you by?');

// Below is a template literal syntax. Your string is enclosed with the back-ticks, not quotes: `` (located by the 1 on your keyboard). 
// Insert the variable in the ${} syntax 
alert(`Welcome ${user}! Let\'s play a guessing game about me! Please answer yes or no.`);

// concatenated version:
//alert('Welcome ' + user + '! Let\'s play a guessing game');

let answerOne = prompt('Do I have any siblings?').toLowerCase();
// let answerTwo = prompt('I grew up with only having cats and dogs.').toLowerCase();

//Using the .toLowerCase() without chainging as seen above. 
// .toLowerCase() will lower case everything in the string 
// if you use .toLowerCase, your conditional will check for yes/no or y/n 
// let normalizedAnswerOne = answerOne.toLowerCase();

//Validating user response:

if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('Correct');
  alert('Correct! I am far from an only child with three older brothers.');
} else if (answerOne === 'no' || answerOne === 'n') {
  //console.log('Incorrect');
  alert('Nope!');
} else {
  //console.log('Follow instructions');
  alert('Try again and answer with a yes/no!');
}

let answerTwo = prompt('Did I grow up with only cats and dogs?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n') {
  //console.log('Correct');
  alert('That\'s right! While I did grow up with both cats and dogs, I\'ve also had lizards, birds, and taken care of livestock.');
} else if (answerTwo === 'yes' || answerTwo === 'y') {
  //console.log('Incorrect');
  alert('Close, but not quite!');
} else {
  //console.log('Follow instructions');
  alert('Try again and answer with a yes/no!');
}

let answerThree = prompt('Have I ever dyed my hair?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('Correct');
  alert('Correct! Although only once.');
} else if (answerThree === 'no' || answerThree === 'n') {
  //console.log('Incorrect');
  alert('Good guess, but actually wrong.');
} else {
  //console.log('Follow instructions');
  alert('Try again and answer with a yes/no!');
}

let answerFour = prompt('Do I have a small family?').toLowerCase();

if (answerFour === 'no' || answerFour === 'n') {
  //console.log('Correct');
  alert('That\'s very true! I have over 50 cousins!');
} else if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('Incorrect');
  alert('Far from true! Unless your definition of a small family is one with 50+ cousins.');
} else {
  //console.log('Follow instructions');
  alert('Try again and answer with a yes/no!');
}

let answerFive = prompt('Have I ever been outside the country?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('Correct');
  alert('That\'s true! I even lived in Madrid, Spain for 4 years.');
} else if (answerFive === 'no' || answerFive === 'n') {
  //console.log('Incorrect');
  alert('Incorrect! I have been all over Europe and parts of Canada and South America.');
} else {
  //console.log('Follow instructions');
  alert('Try again and answer with a yes/no!');
}

let correctAnswerSix = 8;
let guesses = 4; 

while(guesses){
  let answerSix = prompt('Guess what number I\'m thinking of (1-10)?');

  if (parseInt(answerSix) === correctAnswerSix) {
    alert('Great job!');
    guesses = 0;
    // break;
  } else if(answerSix > correctAnswerSix) {
    alert('Too high!');
    guesses--;
  } else {
    alert('Too low!');
    guesses--;
  }
  if(guesses === 0) { 
    alert('Sorry, you are out of chances');
  }

}  
// ***********************8


let attempts = 6; 

let myArr = ['january', 'april', 'august','november'];


while (attempts) {
  let answerSeven = prompt('What is one of my favorite months of the year?').toLowerCase;
  
  for(let i=0; i < myArr.length; i++){
    if(answerSeven === myArr[i]) {
    alert(`Yes, ${answerSeven} is one of my favorite months.`)
    attempts = 0;
    break;
    }
  }

  attempts--;

}




alert(`Thanks for playing ${user}!`);
