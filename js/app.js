'use strict'

var timeOfDay = new Date().getHours();
var timeSalutation;
if (timeOfDay < 12) {
    timeSalutation = 'morning';
} else if (timeOfDay >= 12) {
    timeSalutation = 'evening'
}

var nameOfVisitor = prompt("Good " + timeSalutation + ', how should I address you?');

var question1 = 'I\'m glad that you\'re here, ' + nameOfVisitor + '. Are you looking for a new Senior Developer?';
var answer1 = prompt(question1);
if (answer1 && (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes')) {
    alert('Great, then you\'ve come to the right place! I have over 10 years experience.');
} else if (answer1 && (answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'no')) {
    alert('Well, you\'d be amazing what a set of fresh eyes could do for your company and it\'s products.');
} else {
    alert('Well, I didn\'t quite understand what you meant there.  Let\'s continue, and you can let me know later.')
}

var question2 = "Are you intersted in someone who values family, and is driven to succeed at work to help their family?";
var answer2 = prompt(question2);
if (answer2 && (answer2.toLowerCase() === 'y' || answer2.toLowerCase() === 'yes')) {
    alert('Great, because I definitely value both family and work.  Having 5 children, I feel it\'s extremely emportant to set an example in all things I do.');
} else if (answer2 && (answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no')) {
    alert('Well, then I hope that you\'re willing to give me a chance to work with you and show you the benefits of having someone like me work for you, and hopefully help usher in a new environment for your other staff.');
} else {
    alert('Well, I didn\'t quite understand what you meant there.  Having 5 kids and a hard working wife, we believe it\'s important to set examples in all things we do.  So, we work hard and play hard, so the kids learn the benefits of hard work.')
}

var question3 = 'Would you hire someone who is lazy to do a hard task?  Yes, I realize this is an odd question, but please go with it.';
var answer3 = prompt(question3);
if (answer3 && (answer3.toLowerCase() === 'y' || answer3.toLowerCase() === 'yes')) {
    alert('Glad to see you think like Bill Gates!  Although I don\'t consider myself a true lazy person, I do not like to repeat myself, or make more work.  I think it\'s extremely important to spend a little more time upfront to automate and simplify your work, so you can spend more time on improving and creating.')
} else if (answer3 && (answer3.toLowerCase() === 'n' || answer3.toLowerCase() === 'no')) {
    alert('Well, as Bill Gates once said that he would always "hire a lazy person to do a difficult job" at Microsoft. Why? "Because a lazy person will find an easy way to do it."  Remember, lazy doesn\'t always translate to poor work, but may instead mean proficient work.')
} else {
    alert('Well, I didn\'t quite understand what you meant there.  This question comes from a Bill Gates quote, definitely something you should review!  It\'s got a lot of great value in reflection.')
}

var question4 = 'Let\'s make this a little more personal - do you think I have more cats than kids?';
var answer4 = prompt(question4);
if (answer4 && (answer4.toLowerCase() === 'y' || answer4.toLowerCase() === 'yes')) {
    alert('Great job!  Yes, we have one for each kid.  Definitely wasn\'t a plan, but things fell into play that way.  Gives each of the kids a good chore to do everyday, too!')
} else if (answer4 && (answer4.toLowerCase() === 'n' || answer4.toLowerCase() === 'no')) {
    alert('That would be incorrect.  Being a cat family, we somehow ended up with one for each of my kids - so a total of 5!  Don\'t worry though, no litter box smell here.')
} else {
    alert('Well, I didn\'t quite understand what you meant there.  We have one cat for each kid, so a total of 5 each!')
}

alert('Well, ' + nameOfVisitor + ', I\'m glad you are here!  Please check out my digital resume, and get in touch if you have an questions!');