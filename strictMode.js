/*

The main purpose of the scrict mode is to enforce stricter parsing and error 
handling in your code. So you get an error and can fix the code right away to
keep your code on best practice.
** some examples:
	1- Prevents the use of global variables
	2- Prevent same name arguments and parameters
	3- Delete properties on objects that are not deletable
*/

// 1
'use strict'

city = "london";
console.log(city);

// for case 1 using strict mode ('use strict') prevents the code to have global
// variables, if you assign a variable without the use of var-let-const js creates
// that as a global variable, using strict mode that would be avoided protecting the
// code from future hard to solve buggs.

// 2
'use strict'

function myFunc(a, a, b) {
	console.log(a, a, b);
}

myFunc(1, 2, 3);

// in this casa using strict mode would return an error. But if we didn't the
// return value from myFunc =>  2, 2, 3
// probably not what you would expect, this happens because js interpreter takes
// the second value of "a" as a reassignment.

// 3- 
// 'use strict'

delete Object.prototype;

// in this case with or without 'use strict' would not delete Object.prototype but
// using strict would throw an error and that is good to know from the begining
// that this code won't work.


// if the code bellow was using 'use strict' an error alert would have apeared to
// keep the code on best practice and declaring a variable with out the var-let
// or const keywork is not best practice. It creates a global variable that can be 
// hard to control.

(function() {
  var x = y = 200;
})();

console.log('y: ', y); // => y: 200
console.log('x: ', x); // => ReferenceError: x is not defined

// the interpreter will read this code like so:
var y;

(function() {
  var x;
  x = y;
  y = 200;
})();

// The js compailer hoists and creates the variable x at the top of the IIFE scope
// and y sisnce is not declated with the var keyword becames a global variable.
// Therefor when the interpreter runs this code y is associated to the value 200 
// and since its a global scope the console.log statement can access it but x is a
// inner variable of the IIFE scope not available out side of its scope.




