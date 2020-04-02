// Function Constructor
/*
var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function(){
	console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.Create
/*
var personProto = {
	calculateAge: function(){
		console.log(2016 - yearOfBirth);
	}
}


var john = Object.create(personProto);
john.name = 'John';
john.year = 1990;
john.job = 'teacher';

// var jane = Object.create(personProto, {
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1969},
// 	job: {value: 'designer'}
// });

var jane = Object.create(personProto);

*/

// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (var i = 0; i<arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calcAge(el){
	return 2016 - el;
}

function isFullAge(el){
	return el >= 18;
}

function maxHeartRate(el){
	if(el >= 18 && el<= 81){
		return Math.round(206.0 - (0.67 * el));	
	}else{
		return -1
	};
	
};

var ages = arrayCalc(years, calcAge);
var fullAge = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(heartRate);
*/

/*
// Functions returning functions

function interviewQuestion(job){
	if(job === 'designer'){
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
	}else if(job === 'teacher'){
		return function(name){
			console.log('Hello ' + name + ', what do you teach?');
		}
	}else{
		return function(name){
			console.log('Hello ' + name + ', what do you do?');
		}
	}
};

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
*/

// IIFE

/*
// closures

function retirement(retirementAge){
	var a = ' years until retirement.';
	return function (yearOfBirth){
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestions(job){
	return function(name){
		if(job === 'designer'){
			console.log(name + ', can you please explain what UX design is?');
		}else if(job === 'teacher'){
			console.log('Hello ' + name + ', what do you teach?');
		}else{
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}


var teacherQuestion = interviewQuestions('teacher');
teacherQuestion('Mark');
*/

// Bind, Call and Apply
/*
var john = {
	name: 'John',
	age: 25,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if (style === 'formal'){
			console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		}else if (style === 'friendly'){
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}

john.presentation('formal',  'evening');

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
}

john.presentation.call(emily, 'friendly', 'afternoon')

// john.presentation.apply(emily, ['friendly', 'afternoon'])

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');
*/

// Coding Challenge 7
(function () {
	var Question = function (question, options, correctAnswer){
		this.question = question;
		this.options = options;
		this.correctAnswer = correctAnswer;
	}

	// randNum = [];

	var ownerQuestion = new Question('Who owns this device?', ['Joseph', 'Moses', 'John'], 0);
	var mathQuestion = new Question('What is 4 multiplied by 2?', [6, 8, 2], 1);
	var chemQuestion = new Question('What is NaOH?', ['Salt', 'Acid', 'Hydroxide'], 2);

	var questionArray = [ownerQuestion, mathQuestion, chemQuestion];

	// generate a random question
	var num = Math.floor(Math.random() * questionArray.length);
	// console.log(num);
	//add the random number to a list
	// randNum.push(num);
	// console.log(randNum);

	Question.prototype.activeQuestion = function(){
		console.log(this.question);
		for (var i = 0; i < this.options.length; i++) {
			console.log(i + ': ', this.options[i]);
		}
	}

	// show random question with options
	questionArray[num].activeQuestion();

	// use the prompt keyword to ask user for answer
	var answer = prompt('Select a number from the options given (0, 1, or 2)');
	// console.log(answer);

	// Initialize the user score
	score = 0;

	Question.prototype.correctSelection = function(){
		// console.log(num);
		if (answer == this.correctAnswer) {
			console.log('That\'s the correct answer');
			
			score += 1

			// this.displayScore()
			// console.log('Your current score is ' + score);

			// console.log('-------Next Question-------');

		}else{
			console.log('Sorry. That is the wrong answer');
			
			// this.displayScore()
			// console.log('Your current score is ' + score);

			// console.log('-------Next Question-------');
		}
	}

	Question.prototype.displayScore = function(){
		if(gamePlaying){
			console.log('Your current score is ' + score);	
		}else{
			console.log(' ');
			console.log('Your total score is ' + score);
		}
		
	}

	var gamePlaying = true;

	var nextQuestion = function(){
		if (gamePlaying) {
			var num = Math.floor(Math.random() * questionArray.length);
		
			questionArray[num].activeQuestion();

			answer = prompt('Select a number from the options given (0, 1, or 2) OR type Quit');
			
			if (answer == 'Quit'){
				gamePlaying = false;

				questionArray[num].displayScore();

				nextQuestion();
			}else{
				gamePlaying = true;
				questionArray[num].correctSelection(answer);
				questionArray[num].displayScore();

				nextQuestion();
			}			
		}else{
			console.log(' ');
			console.log('Thank you for playing');
			// questionArray[num].correctSelection(answer);
			// questionArray[num].displayScore();

			// console.log('Your total score is ' + score);
		}
		
	};

	questionArray[num].correctSelection(answer);
	questionArray[num].displayScore();
	console.log('-------Next Question-------');
	nextQuestion();
})()
	


