/*
var firstName = 'John';
// console.log(firstName)

var lastName = 'Smith';
var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job = 'Teacher';
// console.log(job);

//single ling comment
/*
*Multi line comments
*/
/*
console.log(firstName + ' ' + age)

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name? ');
console.log(firstName + ' ' + lastName);
*/

/*
Basic Operators
*/

// var currentYear = 2019;
// var birthYearJohn = currentYear - 28;
// var birthYearMark = currentYear - 33;
// console.log(birthYearJohn);
// console.log(birthYearMark);

// var ageJohn, ageMark;
// ageJohn = 28;
// ageMark = 33

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');


// Operator Precedence

// var now, birthYearJohn, fullAge;
// now  = 2019;
// birthYearJohn = 1989;
// fullAge = 18;

// var isFullAge = now - birthYearJohn >= fullAge;
// console.log(isFullAge);	

// var ageJohn = now - birthYearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average); 

// var x, y;
// x = y = (3 + 5)* 4 - 6; 
// console.log(x, y);

// coding challenge one

// var massJohn, massMark, heightJohn, heightMark;
// massJohn = 60;
// massMark = 50;
// heightJohn = 1.75;
// heightMark = 1.72;

// var johnBMI = massJohn/heightJohn**2;
// var markBMI = massMark/heightMark**2;

// var isMarkHigher = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's? " + isMarkHigher );

// if / else statements

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
// 	console.log(firstName + ' is married!');
// } 
// else {
// 	console.log(firstName + ' will hopefully marry soon.');
// }

// var isMarried = true;

// if (isMarried) {
// 	console.log(firstName + ' is married!');
// } 
// else {
// 	console.log(firstName + ' will hopefully marry soon.');
// }

//  var massJohn, massMark, heightJohn, heightMark;
// massJohn = 60;
// massMark = 150;
// heightJohn = 1.75;
// heightMark = 1.72;

// var johnBMI = massJohn/heightJohn**2;
// var markBMI = massMark/heightMark**2;

// if (markBMI > johnBMI){
// 	console.log("Mark's BMI is higher than John's");
// }
// else{
// 	console.log("John's BMI is higher than Mark's");
// }

// var isMarkHigher = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's? " + isMarkHigher );


// Boolean Logic

// && - and
// || - or
// ! - not


// var firstName, age;
// firstName = 'John';
// age = 21;

// if (age < 13) {
// 	console.log(firstName + ' is a boy.');
// }
// else if (age>=13 && age<20) {
// 	console.log(firstName + ' is a teenager.');
// }
// else if (age >= 20 && age < 30){
// 	console.log(firstName + ' is a young man.');
// }
// else{
// 	console.log(firstName + ' is a man.');
// }

// The Ternary Operator and Switch statements

// Ternary Operator
// var firstName = 'John';
// var age = 31;

// age >= 18 ? console.log(firstName + ' drinks alcohol.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// /*
// if (age >= 18) {
// 	console.log(firstName + ' drinks alcohol.')
// }
// else {
// 	console.log(firstName + ' drinks juice.')
// }*/


// // Switch statement
// var job = 'instructor';
// switch (job) {
// 	case 'teacher':
// 	case 'instructor':
// 		console.log(firstName + ' teaches kids how to code.');
// 		break;
// 	case 'driver':
// 		console.log(firstName + ' drives an uber in Lisbon.');
// 		break;
// 	case 'designer':
// 		console.log(firstName + ' designs beautiful websites.');
// 		break;
// 	default:
// 		console.log(firstName + ' does something else.');
// }

// switch (true) {
// 	case age < 13:
// 		console.log(firstName + ' is a boy.');
// 		break;
// 	case age >= 13 && age < 20:
// 		console.log(firstName + ' is a teenager.');
// 		break;
// 	case age >= 20 && age < 30:
// 		console.log(firstName + ' is a young man.');
// 		break;
// 	default:
// 		console.log(firstName + ' is a man.');
// }


// Truthy and Falsy Values and Equality Operators

// Falsy value: undefined, null, zero, empty strings, and NaN
// Truthy values: NOT falsy values

// var height;
// height = 23;

// if (height || height === 0) {
// 	console.log('The variable is defined.');
// }
// else {
// 	console.log('The variable is undefined.')
// }

// // Equality Operators
// if (height == '23') {
// 	console.log('The == operator does type coercion');
// }

// Coding Challenge Two

// var scoreOneJohn, scoreTwoJohn, scoreThreeJohn, scoreOneMark, scoreTwoMark, scoreThreeMark, scoreOneMary,
// scoreTwoMary, scoreThreeMary averageScoreJohn, averageScoreMark, averageScoreMary;

// scoreOneJohn = 100;
// scoreTwoJohn = 100;
// scoreThreeJohn = 100;

// scoreOneMark = 100;
// scoreTwoMark = 100;
// scoreThreeMark = 100;

// scoreOneMary = 100;
// scoreTwoMary = 100;
// scoreThreeMary = 100;

// averageScoreJohn = (scoreOneJohn + scoreTwoJohn + scoreThreeJohn)/3;

// averageScoreMark = (scoreOneMark + scoreTwoMark + scoreThreeMark)/3;

// averageScoreMary = (scoreOneMary + scoreTwoMary + scoreThreeMary)/3;

// averageScoreJohn > averageScoreMark ? console.log("John's team won on average") : console.log("Mark's team won on average")

// switch (true) {
// 	case averageScoreJohn > averageScoreMark:
// 		console.log("John's team won on average with " + averageScoreJohn + ' points.');
// 		break;
// 	case averageScoreJohn === averageScoreMark:
// 		console.log("It was a draw. Both teams had " + averageScoreJohn + ' points.');
// 		break;
// 	default:
// 		console.log("Mark's team won on average with " + averageScoreMark + ' points.');
// }

// switch (true) {
// 	case averageScoreJohn > averageScoreMark && averageScoreJohn > averageScoreMary:
// 		console.log("John's team won on average with " + averageScoreJohn + ' points.');
// 		break;
// 	case averageScoreMark > averageScoreJohn && averageScoreMark > averageScoreMary:
// 		console.log("Mark's team won on average with " + averageScoreMark + ' points.');
// 		break;
// 	case averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMark:
// 		console.log("Mary's team won on average with " + averageScoreMary + ' points.');
// 		break;
// 	default:
// 		console.log("It was a draw. All teams had " + averageScoreMark + ' points.');
// }

/******
Functions
*/

// function calculateAge(birthYear){
// 	return 2018 - birthYear;
// }

/*****
Function Statements and Expressions
*/

// Function Declaration
// function whatDoYouDo(job, firstName){

// }
/*
// Function Expression
var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code.';
		case 'driver':
			return firstName + ' drives people around.';
		case 'designer':
			return firstName + ' designs stuff.';
		default:
			return firstName + ' does something else.'
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*********
* Arrays
*/
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Jo';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*****
* Coding Challenge Three
*/
/*
var tips = [];
var finalPayments = [];

function tipCalculator(bill){
	if (bill < 50){
		tip = bill * 0.2;
		finalPayment = bill + tip;
		tips.push(tip);
		finalPayments.push(finalPayment);
	}
	else if (bill >= 50 && bill <200){
		tip = bill * 0.15;
		finalPayment = bill + tip;
		tips.push(tip);
		finalPayments.push(finalPayment);
	}
	else{
		tip = bill * 0.1;
		finalPayment = bill + tip;
		tips.push(tip);
		finalPayments.push(finalPayment);
	}

	// return tips	
	// return finalPayments 

}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

console.log('The tip array is ' + tips);
console.log('The final payment array is ' + finalPayments);
*/

/***********
* Objects and Properties
*/
/*
// Object Literal
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};
console.log(john.birthYear);
console.log(john['birthYear']);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// New Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['birthYear'] = 1969;
console.log(jane);
*/

/******
*Objects and Methods
*/
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calculateAge: function(){
		// return 2018 - this.birthYear;
		this.age = 2018 - this.birthYear;
	}
};

console.log(john.calculateAge());

// john.age = john.calculateAge();
console.log(john)
*/

/******
* Coding Challenge 4
*/
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 55,
	height: 1.75,
	calculateBMI: function(){
		this.BMI = this.mass/this.height**2;
		return this.BMI;
	}
};

var mark = {
	firstName: 'Mark',
	lastName: 'Smith',
	mass: 25,
	height: 1.75,
	calculateBMI: function(){
		this.BMI = this.mass/this.height**2;
		return this.BMI;
	}
};

console.log(john.calculateBMI());
console.log(mark.calculateBMI());

if (john.BMI > mark.BMI) {
	console.log(john.firstName + ' ' + john.lastName + ' has the highest BMI of ' + john.BMI);
}else if (mark.BMI > john.BMI) {
	console.log(mark.firstName + ' ' +mark.lastName + ' has the highest BMI of ' + mark.BMI);
}else{
	console.log('Both ' + john.firstName + ' ' + john.lastName +' & ' + mark.firstName + ' ' + mark.lastName + ' have the same BMI of ' + mark.BMI);
}

switch (true){
	case john.BMI > mark.BMI:
		console.log(john.firstName + ' ' + john.lastName + ' has the highest BMI of ' + john.BMI);
		break
	case mark.BMI > john.BMI:
		console.log(mark.firstName + ' ' +mark.lastName + ' has the highest BMI of ' + mark.BMI);
		break
	default:
		console.log('Both ' + john.firstName + ' ' + john.lastName +' & ' + mark.firstName + ' ' + mark.lastName + ' have the same BMI of ' + mark.BMI);
}
*/


/*********
*Loops and Iteration
*/

// for (var i = 0; i < 10; i++){
// 	console.log(i);
// }
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

var i = 0;
while(i < john.length){
	console.log(john[i]);
	i++	
}
*/

// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = john.length-1; i >= 0; i--) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = john.length; i >= 0; i--) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}
*/

// Coding Challenge 5

// var johnBills = {
// 	bills: [124, 48, 268, 180, 42],
// 	tips: [],
// 	totalBill: [],
// 	calculateTips: function(){
// 		for (var i = 0; i<this.bills.length;  i++){
// 			var bill = this.bills[i];
// 			if (bill <= 50){
// 				tip = 0.2*bill;
// 				finalBill = bill + tip;
// 				this.tips.push(tip);
// 				this.totalBill.push(finalBill);
// 			}else if (bill > 50 && bill < 200){
// 				tip = 0.15*bill;
// 				finalBill = bill + tip;
// 				this.tips.push(tip);
// 				this.totalBill.push(finalBill);	
// 			}else{
// 				tip = 0.1*bill;
// 				finalBill = bill + tip;
// 				this.tips.push(tip);
// 				this.totalBill.push(finalBill);	
// 			}

// 		}
// 	console.log(this.tips, this.totalBill);
// 	}
// }
// console.log(johnBills.calculateTips());

// var markBills = {
// 	bills: [77, 375, 110, 45],
// 	tips: [],
// 	totalBill: [],
// 	calculateTips: function(){
// 		for (var i = 0; i<this.bills.length;  i++){
// 			var bill = this.bills[i];
// 			if (bill <= 100){
// 				tip = 0.2*bill;
// 				finalBill = bill + tip;
// 				this.tips.push(tip);
// 				this.totalBill.push(finalBill);
// 			}else if (bill > 100 && bill < 300){
// 				tip = 0.1*bill;
// 				finalBill = bill + tip;
// 				this.tips.push(tip);
// 				this.totalBill.push(finalBill);	
// 			}else{
// 				tip = 0.25*bill;
// 				finalBill = bill + tip;
// 				this.tips.push(tip);
// 				this.totalBill.push(finalBill);	
// 			}

// 		}
// 	console.log(this.tips, this.totalBill);
// 	}
// }
// console.log(markBills.calculateTips());

// function averageTips(tipps){
// 	var sum = 0;
// 	for (var i = 0; i<tipps.length; i++){
// 		sum += tipps[i];
// 		// console.log(sum);
// 	}
// 	var averageTip = sum/tipps.length;

// 	return averageTip;
// }

// console.log(averageTips(markBills.tips));
// console.log(averageTips(johnBills.tips));

// if (averageTips(markBills.tips) > averageTips(johnBills.tips)){
// 	console.log("On average Mark's family paid more.");
// }else if (averageTips(markBills.tips) < averageTips(johnBills.tips)){
// 	console.log("On average John's family paid more.");
// }else{
// 	console.log("On average both families paid the same.");
// }

// markBills = [77, 375, 110, 45];
// markTip = [];
// markFinalBill = [];

// function markTips(){
// 	for (var i = 0; i < markBills.length; i++){
// 		if (markBills[i] <= 100){
// 			tip = 0.2 * markBills[i];
// 			totalBill = markBills[i] + tip;
// 			markTip.push(tip);
// 			markFinalBill.push(totalBill);
// 		}else if (markBills[i] > 100 && markBills[i] < 300){
// 			tip = 0.1 * markBills[i];
// 			totalBill = markBills[i] + tip;
// 			markTip.push(tip);
// 			markFinalBill.push(totalBill);
// 		}else{
// 			tip = 0.25 * markBills[i];
// 			totalBill = markBills[i] + tip;
// 			markTip.push(tip);
// 			markFinalBill.push(totalBill);
// 		}
// 	}
// 	console.log(markTip, markFinalBill);
// }

// console.log(markTips());
// // console.log(markTip, markFinalBill);
// 


console.log(this);