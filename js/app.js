'use strict'

var timeOfDay = new Date().getHours();
var timeSalutation;
if (timeOfDay < 12) {
    timeSalutation = 'morning';
} else if (timeOfDay >= 12) {
    timeSalutation = 'evening'
}

var nameOfVisitor = prompt("Good " + timeSalutation + ', how should I address you?');
while (!nameOfVisitor) {
    nameOfVisitor = prompt('I\'m sorry, please enter a valid name here.  I don\'t want to just know as null!');
}

var questions = [
    'I\'m glad that you\'re here, ' + nameOfVisitor + '. Are you looking for a new Senior Developer?',
    'Are you intersted in someone who values family, and is driven to succeed at work to help their family?',
    'Would you hire someone who is lazy to do a hard task?  Yes, I realize this is an odd question, but please go with it.',
    'Let\'s make this a little more personal - do you think I have more cats than kids?',
    'The world of web development if full of different approaches to making websites.  Does having a developer who may not be fluent in your preference yet, but willing to learn it entice you?',
    'Try and guess a number between 1 and 10...',
    'As mentioned early, I have 5 children - 3 boys, 2 girls.  Can you guess any of their names?'
]
var correctAnswers = 0;

var question1 = questions[0];
var answer1 = prompt(question1);
if (answer1 && (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes')) {
    alert('Great, then you\'ve come to the right place! I have over 10 years experience.');
    correctAnswers++;
} else if (answer1 && (answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'no')) {
    alert('Well, you\'d be amazing what a set of fresh eyes could do for your company and it\'s products.');
} else {
    alert('Well, I didn\'t quite understand what you meant there.  Let\'s continue, and you can let me know later.')
}

var question2 = questions[1];
var answer2 = prompt(question2);
if (answer2 && (answer2.toLowerCase() === 'y' || answer2.toLowerCase() === 'yes')) {
    alert('Great, because I definitely value both family and work.  Having 5 children, I feel it\'s extremely emportant to set an example in all things I do.');
    correctAnswers++;
} else if (answer2 && (answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no')) {
    alert('Well, then I hope that you\'re willing to give me a chance to work with you and show you the benefits of having someone like me work for you, and hopefully help usher in a new environment for your other staff.');
} else {
    alert('Well, I didn\'t quite understand what you meant there.  Having 5 kids and a hard working wife, we believe it\'s important to set examples in all things we do.  So, we work hard and play hard, so the kids learn the benefits of hard work.')
}

var question3 = questions[2];
var answer3 = prompt(question3);
if (answer3 && (answer3.toLowerCase() === 'y' || answer3.toLowerCase() === 'yes')) {
    alert('Glad to see you think like Bill Gates!  Although I don\'t consider myself a true lazy person, I do not like to repeat myself, or make more work.  I think it\'s extremely important to spend a little more time upfront to automate and simplify your work, so you can spend more time on improving and creating.')
    correctAnswers++;
} else if (answer3 && (answer3.toLowerCase() === 'n' || answer3.toLowerCase() === 'no')) {
    alert('Well, as Bill Gates once said that he would always "hire a lazy person to do a difficult job" at Microsoft. Why? "Because a lazy person will find an easy way to do it."  Remember, lazy doesn\'t always translate to poor work, but may instead mean proficient work.')
} else {
    alert('Well, I didn\'t quite understand what you meant there.  This question comes from a Bill Gates quote, definitely something you should review!  It\'s got a lot of great value in reflection.')
}

var question4 = questions[3];
var answer4 = prompt(question4);
if (answer4 && (answer4.toLowerCase() === 'n' || answer4.toLowerCase() === 'no')) {
    alert('Great job!  Yes, we have one for each kid.  Definitely wasn\'t a plan, but things fell into play that way.  Gives each of the kids a good chore to do everyday, too!')
    correctAnswers++;
} else if (answer4 && (answer4.toLowerCase() === 'y' || answer4.toLowerCase() === 'yes')) {
    alert('That would be incorrect.  Being a cat family, we somehow ended up with one for each of my kids - so a total of 5!  Don\'t worry though, no litter box smell here.')
} else {
    alert('Well, I didn\'t quite understand what you meant there.  We have one cat for each kid, so a total of 5 each!')
}

var question5 = questions[4];
var answer5 = prompt(question5);
if (answer5 && (answer5.toLowerCase() === 'y' || answer5.toLowerCase() === 'yes')) {
    alert('That is great to hear!  I pride myself on my ability to tackle any learning objective put in front of me.  I\'m constantly striving to better my skills, and love the challenges and rewards that come with learning new things.')
    correctAnswers++;
} else if (answer5 && (answer5.toLowerCase() === 'n' || answer5.toLowerCase() === 'no')) {
    alert('Well, with the standards constantly being pushed and new frameworks on the horizon, I\'d be confident in assuming your current staff already has be learn new ways to handle even the current states.  I am always a quick and dedicated student to new and growing stacks, so still feel that you should be willing to take a look.')
} else {
    alert('Well, I didn\'t quite understand what you meant there.  I\'ll continue to work on this, and learn to understand your response better, because I love to learn new things!');
}

var question6 = questions[5];
var answer6 = Number(prompt(question6));
var generatedNumber = Math.floor(Math.random() * 10) + 1;
var guessesLeft = 4;
var isCorrect = false;
for (var x = guessesLeft; x > 0; x--) {
    while (!answer6) {
        answer6 = Number(prompt('Please enter a number only.  You have ' + (guessesLeft + 1) + ' guesses left.'))
    }
    if (answer6 === generatedNumber) {
        alert('Great job!  You guessed it correctly!');
        isCorrect == true;
        correctAnswers++;
        break;
    } else if (answer6 !== generatedNumber && guessesLeft === 1) {
        alert('Oh, I\'m sorry - you didn\'t get it this time.  The correct answer was ' + generatedNumber);
        break;
    } else if (answer6 < generatedNumber) {
        alert('Sorry, too low.  Try again!')
    } else if (answer6 > generatedNumber) {
        alert('Sorry, too high!  Try again!')
    }
    guessesLeft--;
    answer6 = Number(prompt("What's your next guess?"));
}

var question7 = questions[6];
var answer7 = prompt(question7);
var kidsNames = ['Elijah', 'Ethan', 'Makenzi', 'Adalyn', 'Keegan'];
var remainingGuesses = 6;
var correctAnswer = false;
while (remainingGuesses > 0 && !correctAnswer) {
    if (kidsNames.indexOf(answer7) >= 0) {
        correctAnswer = true;
        correctAnswers++;
        break;
    } else {
        answer7 = prompt('Sorry, ' + answer7 + ' is not one of my kids names.  Please try again!');
        remainingGuesses--;
    }
}
if (correctAnswer) {
    var correctResponse = "That's correct!  All my kids names are: ";
    for (var k = 0; k < kidsNames.length; k++) {
        correctResponse += kidsNames[k];
        if (k < kidsNames.length - 1) {
            correctResponse += ', ';
        }
    }
    alert(correctResponse);
} else {
    var incorrectResponse = "Sorry, out of guesses!  All my kids names are: ";
    for (var k = 0; k < kidsNames.length; k++) {
        incorrectResponse += kidsNames[k];
        if (k < kidsNames.length - 1) {
            incorrectResponse += ', ';
        }
    }
    alert(incorrectResponse);
}


alert('Well, ' + nameOfVisitor + ', I\'m glad you are here!  Please check out my digital resume, and get in touch if you have an questions!');
var correctPercent = (correctAnswers / questions.length) * 100;
alert('By the way, you matched my hopeful/expected responsed at ' + correctPercent + '%, getting ' + correctAnswers + '/' + questions.length + ' correct!');