// * Built in constants
// * null
/**
 * null is used for representing the intentional absence of an object value and is a primitive value.
 * Unlike undefined , it is not a property of the global object.
 * It is equal to undefined but not identical to it.
 */

null == undefined;
null === undefined;
var a = null;
a == null;
a === null;
// strict equality operator

// * Testing for NaN using NaN();
// global function -> window.NaN()
// Checks if the value is a number
//if not tries to convert it
// check if the resolting value is NaN
//this testing method may cause confusion

isNaN(NaN);
isNaN(1);
isNaN(2e-4);
isNaN(Infinity);
isNaN(true);
isNaN(false);
isNaN(null);
isNaN('');
isNaN(' ');
isNaN('45.3');
isNaN('1.2e3');
isNaN('Infinity');
isNaN(new Date());
isNaN('10$');
isNaN('hello');
isNaN(undefined);
isNaN();

isNaN(function () {}); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number

// * Number.isNaN
/**
 * In ECMAScript 6, the Number.isNaN ()
 * function has been implemented primarily to avoid the problem of window.isNaN ()
 * of forcefully converting the parameter to a number.
 */
/**
 *
 * Number.isNaN () , indeed, doesn't try to convert the value to a number before testing.
 * This also means that only values of the type number, that are also NaN ,
 * return true (which basically means only Number.isNaN ( NaN ) ).
 */

/**
 * When the Number.isNaN is called with one argument number, the following steps are taken:
   1. If Type(number) is not Number, return false . 
   2. If number is NaN , return true .
   3. Otherwise, return false .
 */

//Examples:
Number.isNaN(NaN);

//numbers
Number.isNaN(1);
Number.isNaN(2e-4);
Number.isNaN(Infinity);

//values not of type number
Number.isNaN(true); //
Number.isNaN(false); //
Number.isNaN(null); //
Number.isNaN(''); //
Number.isNaN(' '); //
Number.isNaN('45.3'); //
Number.isNaN('1.2e3'); //

Number.isNaN('Infinity'); //
Number.isNaN(new Date()); //
Number.isNaN('10$'); //
Number.isNaN('hello'); //
Number.isNaN(undefined); //
Number.isNaN(); //
Number.isNaN(function () {}); //
Number.isNaN({}); //
Number.isNaN([]); //
Number.isNaN([1]); //
Number.isNaN([1, 2]); //
Number.isNaN([true]); //

typeof isNaN;
typeof Number.isNaN;

//* undefined and null

/* At first glance it may appear that null and undefined are basically the same, however there are subtle but important differences.
undefined is the absence of a value in the compiler, because where it should be a value, there hasn't been put one, like the case of an unassigned variable.
undefined is a global value that represents the absence of an assigned value. `;*/
typeof undefined === 'undefined';
// null is an object that indicates that a variable has been explicitly assigned "no value".
typeof null === 'object';

//examples
let foo;
console.log('is foo undefined?', foo === undefined);

let foo2 = { a: 'a' };
console.log('is undefined?', foo2.b === undefined); // is undefined? true

function fooFunc() {
  return;
}
console.log('is undefined?', fooFunc() === undefined);

function another(param) {
  console.log('is undefined?', param === undefined);
}
another('a');
another();

// * Infinity and -Infinity
1 / 0; // Infinity
// Wait! WHAAAT?
/*Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. 
It is a reference to Number.POSITIVE_INFINITY
It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression 
of a number that's so big that overflows. This actually means there is no division by 0 errors in JavaScript, 
there is Infinity! There is also - Infinity which is mathematical negative infinity, and it's lower than any other value.
To get - Infinity you negate Infinity , or get a reference to it in Number.NEGATIVE_INFINITY .
( Infinity );
Now let's have some fun with examples:
*/
Infinity > 123192310293;
-Infinity < 123192310293;
1 / 0;
Math.pow(123123123, 9123192391023);
23 / Infinity;
-Infinity;
-Infinity === Number.NEGATIVE_INFINITY;
-0; // -0 , yes there is a negative 0 in the language 0 === 0 ; // true 1 / 0 ; // -Infinity
1 / 0 === 1 / 0;
Infinity + Infinity;
var a = 0,
  b = 0;
a === b;
1 / a === 1 / b;

// *Number Constant
Number.MAX_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_VALUE;
Number.MIN_SAFE_INTEGER;
Number.EPSILON;
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;
Number.NaN;

// Operations that return NaN

'b' * (3)[(1, 2, 3)] * 2;
[2] * [3]; // Returns 6
'a' + 'b'; // Returns "ab"
0 / 0;
