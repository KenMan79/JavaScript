// Function Declarations

// Functions in JavaScript are pieces of code you can write and reuse over and over again. 
// Other programming languages may call them subroutines or procedures, but the concept is the same.
// There are multiple ways to create functions. In JavaScript, the function declaration is the oldest way.
// To write a function declaration, you first use the function keyword, followed by a function name unique in the scope. You will need this name to call the function later.


function sayHello() {
    console.log("Hello World");
}
sayHello();

function Holidays() {
    console.log("Happy Holiday's");
}
Holidays();

// Notice that after the function name, a set of parentheses is always required. This is where you will pass any data into the function, if you need to. If you don't need to pass in any data, then you will still include a set of empty parentheses.
// After the parentheses is a set of curly braces that surround the code block to be executed when the function is called. You do not need a semicolon following the ending curly brace.
// If you save and run this (if you have Autosave turned on in the Settings, it should automatically save and run for you), you should notice that nothing gets logged to the console. Why?
// You have created the function, but you have not called it. Functions do not do anything until they are called.


// The Parameter List and Arguments

// Next, we will review passing data into the function from outside of it.
// You can pass either literal values or variables into a function via the parameter list.
// Whatever you pass in are called the arguments. 
// The function will take the arguments you pass in then store them inside the parameters, which are the variable names that were defined in the parameter list, separated by commas.

function sayHello(userName) {
    console.log("Hello " + userName);
}
sayHello("Jane");

// The above code set a parameter list containing one parameter, userName, and used it inside the function body.
// Then it called the function, passing in the string literal "Jane" as an argument into the parameter "userName". 
// The function then took that string literal and created a locally scoped variable named userName that holds the value of "Jane". 
// Notice you did not need to use a variable declaration keyword (var, let, or const) to create the userName variable. The variable declaration happens for you automatically via the parameter list. 
// When the function is finished, that variable is automatically deleted as well. It only exists inside the function, and must have a unique name inside the function.

// Below the code you have already entered, without deleting it, type this into your Codepen:

function sayGoodbye(userName) {
    console.log("Goodbye " + userName);
}
sayGoodbye("Simon");

// Save and run this code. 
// You should see that both functions worked without any errors. It does not matter that they both used the same variable name, userName. Each variable has local scope and there is no conflict. 
// Next, we will look at parameter lists with more than one parameter.
// Let's pretend we are coding a web app for a pizzeria, and we need to write a function that calculates the price of a pizza. Enter the following

function getPizzaCost(size, nToppings) {
    let cost = 10; // base cost for a small pizza;
    if (size === 'medium') {
        cost += 4;
    } else if (size === 'large') {
        cost += 8;
    }
    cost += nToppings;
    console.log('The cost of this pizza is: ', cost);
}

// A  basic small cheese pizza costs $10, a medium costs $14, and a large costs $18. For each extra topping, a $1 is added to the total cost, and the cost is logged to the console.
// Notice that a local variable was declared using the let keyword inside this function, cost. Like the variables that were created via the parameter list, this variable is locally scoped and will only exist inside of this function. 
// Call this function now by adding this function call below to your code, below the function, and verify that it works by checking your Console, which should print a pizza price of $17:

getPizzaCost('medium', 3);

// Next, we will try passing in variables instead of literals. Declare and initialize two variables outside of the function. above your function call. 

let pizzaSize = 'large';
let numToppings = 2;

// Then replace the function call with this one:

getPizzaCost(pizzaSize, numToppings);

// This should work. Note that it did not matter that the variables being passed in were named differently from the arguments. The arguments being passed into the parameter list are the values that were stored in pizzaSize and numToppings, not the variables themselves. 
// So what actually matters is the order of the arguments you pass in. Whatever argument you passed in first in the function call, is stored inside the first parameter name. Whatever you passed in as the second argument in the function call is stored inside the second parameter name. 


// The Return Statement

// A function will always return a value.
// If there is no value explicitly specified by a return statement, the function will return undefined as its value.
// A function will always exit wherever it encounters the return statement. So the return statement is similar to a break statement in this way.
// If you use the return statement on its own, simply as: 

// =>   return;

// Then the value returned from the function would be undefined.
// It is very often useful to return an actual value. 
// Update your code as below:

function getPizzaCost(size, nToppings) {
    let cost = 10; // base cost for a small pizza
    if (size === 'medium') {
        cost += 4;
    } else if (size === 'large') {
        cost += 8;
    }
    cost += nToppings;
    return cost;
}

let cost = getPizzaCost('small', 4);

// This way, the value of the cost variable is returned to the main program execution after the function ends, rather than only being logged to the console then deleted. That means you are able to reuse it -- you could add it to a database, you could calculate tax to it... you can access it now outside of the function.
// Note that the variable name outside of the function is not required to match the variable name inside the function. You could write the function call like this, for example:

let pCost = getPizzaCost('small', 4);

// Often, it will make sense to have the variable name be the same, but be aware that it is not a requirement.


// Function Hoisting
// Function declarations are hoisted.
// This means that before any JavaScript is executed, the code is first scanned for function declarations and any that are found are "hoisted" to the top of their scope. 
// Practically speaking, that means you can use functions that were created with function declarations before you get to them in the code. 
// For an example of this, take the last function call you wrote and place it above the function declaration and run the code. It should run the same. 
// This is not always necessarily a good thing, but you should be aware of this behavior. 

// Summary
// In this lesson, we reviewed the syntax of a function declaration, making function calls, how arguments are passed into parameters, passing in literals and variables, the scope of variables created via the parameter list or declared inside of functions, hoisting, and more. 

























//