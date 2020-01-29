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
    [
        'I\'m glad that you\'re here, ' + nameOfVisitor + '. Are you looking for a new Senior Developer?',
        'Great, then you\'ve come to the right place! I have over 10 years experience.',
        'Well, you\'d be amazing what a set of fresh eyes could do for your company and it\'s products.'
    ],
    [
        'Are you intersted in someone who values family, and is driven to succeed at work to help their family?',
        'Great, because I definitely value both family and work.  Having 5 children, I feel it\'s extremely emportant to set an example in all things I do.',
        'Well, then I hope that you\'re willing to give me a chance to work with you and show you the benefits of having someone like me work for you, and hopefully help usher in a new environment for your other staff.'
    ],
    [
        'Would you hire someone who is lazy to do a hard task?  Yes, I realize this is an odd question, but please go with it.',
        'Glad to see you think like Bill Gates!  Although I don\'t consider myself a true lazy person, I do not like to repeat myself, or make more work.  I think it\'s extremely important to spend a little more time upfront to automate and simplify your work, so you can spend more time on improving and creating.',
        'Well, as Bill Gates once said that he would always "hire a lazy person to do a difficult job" at Microsoft. Why? "Because a lazy person will find an easy way to do it."  Remember, lazy doesn\'t always translate to poor work, but may instead mean proficient work.'
    ],
    [
        'Let\'s make this a little more personal - do you think I have more cats than kids?',
        'That would be incorrect.  Being a cat family, we somehow ended up with one for each of my kids - so a total of 5!  Don\'t worry though, no litter box smell here.',
        'Great job!  Yes, we have one for each kid.  Definitely wasn\'t a plan, but things fell into play that way.  Gives each of the kids a good chore to do everyday, too!'
    ],
    [
        'The world of web development if full of different approaches to making websites.  Does having a developer who may not be fluent in your preference yet, but willing to learn it entice you?',
        'That is great to hear!  I pride myself on my ability to tackle any learning objective put in front of me.  I\'m constantly striving to better my skills, and love the challenges and rewards that come with learning new things.',
        'Well, with the standards constantly being pushed and new frameworks on the horizon, I\'d be confident in assuming your current staff already has be learn new ways to handle even the current states.  I am always a quick and dedicated student to new and growing stacks, so still feel that you should be willing to take a look.'
    ],
    'Try and guess a number between 1 and 10...',
    'As mentioned early, I have 5 children - 3 boys, 2 girls.  Can you guess any of their names?'
]
var correctAnswers = 0;

for (var x = 0; x < questions.length - 2; x++) {
    var question = questions[x][0];
    var answer = prompt(question);
    var parsedAnswer = isCorrectAnswer(answer);
    while (parsedAnswer === null) {
        answer = prompt("Please use a Y/N choice for answering this question.  " + questions[x][0]);
        parsedAnswer = isCorrectAnswer(answer);
    }
    if (parsedAnswer) {
        alert(questions[x][1]);
        correctAnswers++;
    } else {
        alert(questions[x][2]);
    }
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
    if (answer7 && answer7.length > 0) {
        answer7 = answer7.toLowerCase().charAt(0).toUpperCase() + answer7.substr(1);
    } else {
        answer7 = prompt("Please make sure to enter a value.  Please guess again:");
        continue;
    };
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
var correctPercent = Math.floor((correctAnswers / questions.length) * 100);
alert('By the way, you matched my hopeful/expected responsed at ' + correctPercent + '%, getting ' + correctAnswers + '/' + questions.length + ' correct!');


function isCorrectAnswer(userResponse) {
    if (userResponse && (userResponse.toLowerCase() === 'y' || userResponse.toLowerCase() === 'yes')) {
        return true;
    } else if (userResponse && (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no')) {
        return false;
    } else {
        return null;
    }
}