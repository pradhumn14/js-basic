// This is my first Javascript Code!
// console.log('Hello World');

// let name = 'Pradhumn';
// console.log(name);

// cannot be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen
// are case sensitive

// let firstName;
// let FirstName;

// let firstName = 'Pradhumn';
// let lastName = 'Agrawal';

// console.log(firstName + " " + lastName);

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let name = 'Pradhumn';          // String Literal
// let age = 30;                   // Number Literal
// let isApproved = true;          // Boolean Literal

// let firstName = undefined;      // not so common to use undefined
// let selectedColor = null;

// let name = 'Pradhumn';
// let age = 19;

let person = {
    name: 'Pradhumn',
    age: 19
};

console.log(person);

// Dot notation

person.name = 'John';

console.log(person.name);

// Bracket Notation

// person['name'] = 'Mary';

// console.log(person.name);

// both are same

let selection = 'name';

person[selection] = 'Mary';

console.log(person.name);

// Arrays

let selectedColor = ['red', 'blue'];
console.log(selectedColor);
console.log(selectedColor[0]);
selectedColor[2] = 'green';
console.log(selectedColor);
selectedColor[3] = 19;
console.log(selectedColor);
console.log(selectedColor.length);

// functions

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + " " + lastName);
}

greet('John', 'Smith');
// greet('Mary');

// Calculating a value
function square(number) {
    return number * number;
}

// let answer = square(9);
// console.log(answer);

// OR DIRECTLY

console.log(square(7));