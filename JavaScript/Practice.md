[MDN Link For javascript Documentations](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

L142: 

Java Script is the **actions** that happen on our webpage

### Data Types in JS

[GFG Link](geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/)

Practicing Basic JS in Chrome Console:
(here when you refresh code is gone)
1. Cmd + Shift + J
2. Right click -> insepect -> console

Pop Console Out


JavaScript has only 1 data Type for all types of **Numbers**
```
50
50
7
7
3.874
3.874
0.99
0.99
-45.324
-45.324
1.99999999999999999
2

```
Operators

```
4+8
12
3.5*-9
-31.5
3+1*9
12
//Bodmas is applied
undefined
23%3
2
2^8 //xor
10
2 ** 4   //exponentiation operator
16
7 ** 3
343
```

**NaN** is a numeric value that represents not a number

```
0/0
NaN
1+NaN  //cant do math with NaN
NaN
typeof 4
'number'
typeof 4.45343
'number'
typeof NaN   // operator to find data type
'number'
```

typeof operator
```
typeof undefined;  // "undefined"
typeof true;       // "boolean"
typeof 42;         // "number"
typeof "Hello";    // "string"
typeof Symbol();   // "symbol"
typeof function(){}; // "function"
typeof {};         // "object"
typeof null;       // "object"
```

```
(13%5) **2
9
200 + 0/0
NaN
```



Variables

3 ways to declare

1) let
2) const
3) var

var --> old way of declaring

var variables can be **redeclared** and **reassigned**.
```
var x = 5; // Declare a variable 'x' and assign a value of 5
var y;    // Declare a variable 'y' without assigning a value
```

let variables can be **reassigned**, but they **cannot be redeclared within the same block.**
```
let name = "John"; // Declare a variable 'name' and assign a value
let age;          // Declare a variable 'age' without assigning a value

```


 const variables are block-scoped and **cannot be redeclared or reassigned** once they are defined. *However, for objects and arrays assigned to a const variable, their properties or elements can still be modified.*
```
const PI = 3.14; // Declare a constant variable 'PI' and assign a value of 3.14
const colors = ["red", "blue", "green"]; // Declare a constant variable 'colors' with an array
colors.push("yellow"); // Modifying the array is allowed
```


```
let score = 10;
undefined
score
10
score+=1
11
score-=2
9
score*=4
36
score++
36
score
37
++score
38
score--
38
score
37
--score
36

let i = 5;
5
let result = i++;
5
i
6

let i = 5;
5
let result = ++i;
6
i
6
```


Boolean Data type
```
true //constants
true
false
false
let a = true;
undefined
a
true
a = false;
false
a
false
```

### data type can change during the execution of a program

```
let number = 42;
console.log(number); // Output: 42

number = "forty-two";
console.log(number); // Output: "forty-two"


let text = "true";
console.log(text); // Output: "true"

text = Boolean(text);
console.log(text); // Output: true

let value = 0;
console.log(value); // Output: 0

value = Boolean(value);
console.log(value); // Output: false



```

```
let a = 25;
undefined
a = true;
true
a = "hello world"
'hello world'
```


Variable Naming Rules & Convention:
1. Variable names must start with a **letter (a-z, A-Z) or an underscore (_) character.** They cannot begin with a number.
2. Variable names can contain **letters, numbers, and underscores**. They are case-sensitive, so myVar and myvar are considered different variables.

3. JavaScript reserves certain **keywords** that cannot be used as variable names because they have special meanings in the language. These keywords include let, const, var, if, else, while, for, function, and many more. You cannot use these keywords as variable names.

4. camelCase: It is a good practice to use descriptive and meaningful names for variables to improve code readability. This helps others (including yourself) understand the purpose and content of the variable.



## Strings

- Primitive data type

- In JavaScript, a string is a sequence of characters enclosed in single quotes (''), double quotes ("") or backticks (``).
## With back ticks`` we can give variables/expressions using ${}

```
let message = 'Hello, world!';
let name = "John Doe";
let template = `My name is ${name}.`;

```

Not Allowed:

Dont Use a Combination of both 'HI"


Allowed:
```
let a = 'hello "I am Here" '
let b = = "hi 'wassup' "
```


```
animal = "dumb Tiger"
'dumb Tiger'
animal[0]
'd'


animal[99]
undefined


animal.length
10

"lol".length
3

"lol"[0]
'l'

"lol"+"rofl"
'lolrofl'

let firstName = "Ram"
undefined
let secondName = "kishan"
undefined

firstName + secondName
'Ramkishan'

firstName + " " + secondName
'Ram kishan'

1 + "hi"
'1hi'
typeof(1+"hi")
'string'

```

**.length is a property not a method**
## String Methods

[w3School Link](https://www.w3schools.com/js/js_string_methods.asp)

- String length
- String slice()
```
let str = 'Hello, world!';
let slicedStr = str.slice(7, 12);  //second index is not included
slicedStr // Output: 'world'


let str = 'Hello, world!';
let slicedStr = str.slice(7);
slicedStr; // Output: 'world!'


let str = 'Hello, world!';
let slicedStr = str.slice(-6);
slicedStr; // Output: 'world!'

//Negative Index signifies from -6 till end
```
- String substring()
```
const str = "Hello, World!";

const substr1 = str.substring(0, 5);
console.log(substr1); // Output: "Hello"

const substr2 = str.substring(7);
console.log(substr2); // Output: "World!"

const substr3 = str.substring(7, 12);
console.log(substr3); // Output: "World"

```
- String substr()
- String replace()
```
let str = 'Hello, world!';
let newStr = str.replace('world', 'universe');
newStr; // Output: 'Hello, universe!'


let str = 'Hello, world! Hello, world!';
let newStr = str.replace(/world/g, 'universe');
newStr; // Output: 'Hello, universe! Hello, universe!'

```

- String replaceAll()
```
outdated
```

- String toUpperCase()
```
//str.toUpperCase does not change the original string but creates a new copy of it


let str = 'Hello, World!';
let uppercaseStr = str.toUpperCase();
uppercaseStr
// Output: HELLO, WORLD!
```
- String toLowerCase()
```
let str = 'Hello, World!';
let lowercaseStr = str.toLowerCase();
lowercaseStr
// Output: hello, world!

```
- String concat()
- String trim()
```
let str = '   Hello, World!   ';
let trimmedStr = str.trim();
trimmedStr;
// Output: 'Hello, World!'

```
- String trimStart()
- String trimEnd()
- String padStart()
- String padEnd()
- String charAt()
- String charCodeAt()
- String split()

```
let str = 'Hello, world!';
let index = str.indexOf('world');
index; // Output: 7

index = str.indexOf('foo');
index; // Output: -1

index = str.indexOf('l');
index; // Output: 2 ----> Returns first Occurence


```
- String repeat()
```
let str = 'Hello!';
let repeatedStr = str.repeat(3);
repeatedStr; // Output: 'Hello!Hello!Hello!'


//If the argument passed to repeat() is negative or zero, an empty string ('') will be returned

```


-----------
Chaining Of Functions/Methods
```
let str = '   Hello, World!   ';

let trimmedAndUpperCase = str.trim().toUpperCase();
trimmedAndUpperCase 
// Output: 'HELLO, WORLD!'
```

-----------

## Template literals
Can write any expression within it

enclosed by backticks `  `
```
let name = 'Alice';
let age = 25;

let message = `Hello, my name is ${name} and I am ${age} years old.`;

message;
```

```
`hello it costs $${1+2+3}`

//Output : hello it costs $6
let a = "world"
`hello ${a.toUpperCase()}`;
```


----------

## Null and Undefined
- null: It is a value that represents the intentional absence of any object value. It is typically used to indicate that a variable or property does not currently have a value assigned to it. It is a primitive value.
```
let myVariable = null;
console.log(myVariable); // Output: null
```

- undefined: It is a value that indicates an uninitialized variable, an absent property, or the absence of a return value from a function. It is also a primitive value.

```
let myVariable;
console.log(myVariable); // Output: undefined
```


------------

## Math Object
[W3 Schools Link](https://www.w3schools.com/js/js_math.asp
)
- Math.E        // returns Euler's number
- Math.PI       // returns PI
- Math.SQRT2    // returns the square root of 2
- Math.SQRT1_2  // returns the square root of 1/2
- Math.LN2      // returns the natural logarithm of 2
- Math.LN10     // returns the natural logarithm of 10
- Math.LOG2E    // returns base 2 logarithm of E
- Math.LOG10E   // returns base 10 logarithm of E

----
- Math.round(x)	Returns x rounded to its nearest integer
- Math.ceil(x)	Returns x rounded up to its nearest integer
- Math.floor(x)	Returns x rounded down to its nearest integer
- Math.trunc(x)	Returns the integer part of x (new in ES6)
- Math.sign(x) 
- Math.pow(x, y)   OR x ** y
- Math.sqrt(x)
- Math.abs(x)
- Math.sin(x)
- Math.cos(x)
- Math.min() and Math.max()  find the lowest or highest value in a list of arguments:
- Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

- Math.log(x) returns the natural logarithm of x.


Q. Generate a random integer from 1 to 5
```
Math.floor(Math.random()*5)+1
```
Q. Generate a random integer from 20 - 23
```
Math.floor(Math.random()*20)+3
```


```




```
---------------
# Comparison Operators
--------
### Always use === and !== 
----------
## 1. == Operator

The == operator in JavaScript performs type coercion, meaning it converts operands to a common type before comparing them. It attempts to make two different types of values comparable by converting them based on a set of rules.

- If the operands have the same type, == performs a strict equality comparison (===) and returns true if the values are equal, and false otherwise.

- If the operands have different types, JavaScript tries to convert them to a common type. The conversion rules vary based on the types involved. For example, when comparing a number and a string, the string is converted to a number. When comparing a boolean and a non-boolean, the boolean is converted to a number (true becomes 1, false becomes 0).
```
console.log(5 == 5);      // Output: true
console.log('5' == 5);    // Output: true (type coercion)
console.log(5 == '5');    // Output: true (type coercion)
console.log(5 == 10);     // Output: false


0 == ''             //true
0 == false          //true
null == undefined   //true
```

## 2. != Operator

```
console.log(5 != 10);     // Output: true
console.log('5' != 5);    // Output: false (type coercion)
console.log(5 != '5');    // Output: false (type coercion)
console.log(5 != 5);      // Output: false
```

## 3. === Operator

```
console.log(5 === 5);     // Output: true
console.log('5' === 5);   // Output: false (different types)
console.log(5 === '5');   // Output: false (different types)
console.log(5 === 10);    // Output: false
```

## 4. !== Operator
```
console.log(5 !== 10);    // Output: true
console.log('5' !== 5);   // Output: true (different types)
console.log(5 !== '5');   // Output: true (different types)
console.log(5 !== 5);     // Output: false
```

## 5. > Operator
```
console.log(10 > 5);      // Output: true
console.log(5 > 10);      // Output: false
console.log(5 > 5);       // Output: false

```

## 6. < Operator
```
console.log(5 < 10);      // Output: true
console.log(10 < 5);      // Output: false
console.log(5 < 5);       // Output: false

```

## 7. >= Operator
```
console.log(10 >= 10);    // Output: true
console.log(10 >= 5);     // Output: true
console.log(5 >= 10);     // Output: false
```

## 3. <= Operator
```
console.log(10 <= 10);    // Output: true
console.log(5 <= 10);     // Output: true
console.log(10 <= 5);     // Output: false

```

### we can compare strings in JavaScript using comparison operators

```
console.log('apple' == 'apple');          // Output: true
console.log('apple' === 'apple');         // Output: true

console.log('apple' != 'orange');         // Output: true
console.log('apple' !== 'orange');        // Output: true

console.log('apple' < 'banana');          // Output: true
console.log('apple' > 'banana');          // Output: false

console.log('apple' <= 'banana');         // Output: true
console.log('apple' >= 'banana');         // Output: false

```


-------------

## Now writing JS from a .js file

Important Functions

1. **console.log()** - function is a built-in function in JavaScript that is commonly used for debugging and displaying messages in the console. It allows you to output information, such as variables, expressions, or custom messages, to the browser's console or the console of the development environment.

```
//synatax
console.log(value1, value2, ..., valueN);


let name = 'Alice';
let age = 25;
console.log('Hello, ' + name + '! You are ' + age + ' years old.');

//Output: Hello, Alice! You are 25 years old.

console.log(5 + 10); // Output: 15

console.log(true, 'Hello', [1, 2, 3], { name: 'John', age: 30 });

//Output: true Hello [1, 2, 3] {name: "John", age: 30}
```


----------
 **alert** and **prompt** are built-in functions in JavaScript that allow you to interact with the user through dialog boxes in a web browser. Here's an explanation of each function:

2. alert:

- The alert function displays a simple message in an alert dialog box.
- It is commonly used to show a notification or provide information to the user.
- The function takes a single argument, which is the message to be displayed.
Example:
```
alert('Hello, world!');
```


3. prompt

prompt:

- The prompt function displays a **dialog box** that allows the user to enter input.
- It is typically used to get user input in the form of a **text string.**
- The function takes two arguments: the **prompt message and an *optional* default value.**
- The user can enter text into an input field and click OK or Cancel.
- If the user clicks OK, the prompt function returns the entered value as a string.
- If the user clicks Cancel, the function returns null.


```
let name = prompt('Please enter your name:');
let name = prompt('Please enter your name:', 'John Doe');
//storing the prompt entered by the user in a string name

```

```
userInput
//Output: "97"
userInput + 1
//Output: "971"  //concats
parseInt(userInput)
//Output: 97

```

4. parseInt

```
parseInt(string, radix);


let num1 = parseInt('42');          // Without radix: decimal base assumed
console.log(num1);                  // Output: 42

let num2 = parseInt('101', 2);      // With radix: binary base
console.log(num2);                  // Output: 5

let num3 = parseInt('FF', 16);      // With radix: hexadecimal base
console.log(num3);                  // Output: 255


let check = parseInt('101asafasd')
undefined
check
101
```

----------------

## File connect html and js

To connect a JavaScript file to an HTML file, you can use the ```<script>``` tag in the HTML file to include the JavaScript code. Here's how you can do it:

Create an HTML file (e.g., index.html) and a JavaScript file (e.g., script.js) in the same directory.

Open the HTML file (index.html) in a text editor and add the following ```<script> tag inside the <head> or <body> section of your HTML file:```
### Preferably inside the ```<body>``` at end
**html**
```
<script src="script.js"></script>
```
This ```<script>``` tag includes the JavaScript file script.js in your HTML file. Make sure to specify the correct file path if your HTML and JavaScript files are in different directories.

Write your JavaScript code inside the JavaScript file (script.js).

**javascript**
```
console.log('Hello, world!');
```
Save both the HTML and JavaScript files.

Open the HTML file (index.html) in a web browser, and you should see the output in the browser's console.

By including the JavaScript file in the HTML using the ```<script>``` tag, the JavaScript code will be executed when the HTML file is loaded in the browser. This allows you to connect your JavaScript code to the HTML file and interact with the HTML elements or perform other tasks based on your requirements.

Note: It's a best practice to place the ```<script>``` tag just before the closing </body> tag to ensure that the HTML content is loaded before executing the JavaScript code. This helps avoid any potential issues related to accessing HTML elements that haven't been loaded yet.



```
<!DOCTYPE html>
<html>
<head>
  <title>Empty HTML Document</title>
  <script src="script.js"></script>
</head>
<body>
  <h1>Welcome to an Empty HTML Document</h1>
</body>
</html>

```

```
console.log('Hello, world!');
let a = 19;  
//these lines wont be in the webpage displayed, but can be accessed using the console of webpage
```


# Conditionals

- DONE IN .js File in Conditionals Folder

1. if-else if-else
2. Nested Constionals


------------------------

## Falsy and Truthy Values


In JavaScript, the following values are considered falsy, meaning they are evaluated as false when used in a Boolean context:

- false: The boolean value false.
- 0: The number zero (0).
- '' (empty string): A string with no characters.
- null: Represents the absence of any object value.
- undefined: Represents an uninitialized or absent value.
- NaN: Stands for "Not-a-Number" and represents an invalid numeric operation.

```
if (false) {
  console.log('false is truthy');
} else {
  console.log('false is falsy');
}

if (0) {
  console.log('0 is truthy');
} else {
  console.log('0 is falsy');
}

if ('') {
  console.log('Empty string is truthy');
} else {
  console.log('Empty string is falsy');
}

if (null) {
  console.log('null is truthy');
} else {
  console.log('null is falsy');
}

if (undefined) {
  console.log('undefined is truthy');
} else {
  console.log('undefined is falsy');
}

if (NaN) {
  console.log('NaN is truthy');
} else {
  console.log('NaN is falsy');
}


```

-----------------
## Logical Operators
Precedence NAO
- !
- &&
- ||

AND , OR
```
let age = prompt("Enter Age to know Amount")
if(age>=0 && age<5 || age>65)
    console.log("Free");
else if(age>=5 && age<=10)
    console.log("$10");
else if(age>10 && age<=65)
    console.log("$20")
else
    console.log("Invalid Age");
```


NOT OPERATOR
```
let isAdmin = false;
let isLoggedIn = true;

if (!isAdmin) {
  console.log("User is not an admin.");
}

if (!isLoggedIn) {
  console.log("User is not logged in.");
}
```

```
console.log(!0);         // Output: true
console.log(!!0);        // Output: false
console.log(!'');        // Output: true
console.log(!!'');       // Output: false
console.log(!null);      // Output: true
console.log(!!null);     // Output: false
console.log(!undefined); // Output: true
console.log(!!undefined);// Output: false

```

-----------
## Switch Case

```
let fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Selected fruit is apple.');
    break;
  case 'banana':
    console.log('Selected fruit is banana.');
    break;
  case 'orange':
    console.log('Selected fruit is orange.');
    break;
  default:
    console.log('Selected fruit is not apple, banana, or orange.');
}

```

-----------

# Arrays

```
let emptyArray = [];


let stringArray = ['apple', 'banana', 'orange'];


let numberArray = [1, 2, 3, 4, 5];


let mixedArray = [1, 'Hello', true, { name: 'John' }, [10, 20, 30]];

//4th Element --> object type

numberArray.length;
//Output : 5

[].length;
//Output : 0

typeOf([]);
//Output : Object

```



```

let stringArray = ['apple', 'banana', 'orange'];

console.log(stringArray[0]);     // Accessing the first element: 'apple'
console.log(stringArray[3]);     // Accessing an out-of-range index: undefined
//We don't get an error --> We get undefined



//----------------
let stringArray = ['apple', 'banana', 'orange'];

console.log(stringArray[0][2]);     
//  'p'



But if it were a string we can not update it, need to save it to a new string
//----------------
let array = ['apple', 'banana', 'orange'];

array[1] = 'grape';

console.log(array);

//['apple', 'grape', 'orange']


//----------------

let array = ['apple', 'banana', 'orange'];

array[5] = 'kiwi';

console.log(array);


//['apple', 'banana', 'orange', undefined, undefined, 'kiwi']


//----------------

let array = ['apple', 'banana', 'orange'];

array[array.length] = 'kiwi';

console.log(array);

//['apple', 'banana', 'orange', 'kiwi']

```




## Function in Array

1. Push

```
let array = ['apple', 'banana', 'orange'];

array.push('kiwi', 'grape');

console.log(array);
//['apple', 'banana', 'orange', 'kiwi', 'grape']

```


2. Pop

```
let array = ['apple', 'banana', 'orange'];

let removedElement = array.pop();  //capturing 
array.pop(); //not capturing 
console.log(array);
console.log(removedElement);


//['apple']
'orange'

```


### *shift()* and *unshift()* functions are used to add and remove elements at the beginning of an array, respectively


3. shift() --> pop at front


```
let array = ['banana', 'orange'];

array.unshift('apple', 'kiwi');

console.log(array);

//['apple', 'kiwi', 'banana', 'orange']

```

4. unshift(x) --> push at front


```
let array = ['apple', 'kiwi', 'banana', 'orange'];

let removedElement = array.shift(); //may or may not capture

console.log(array);
console.log(removedElement);

//['kiwi', 'banana', 'orange']
'apple'

```

-----------
### If you call the pop() function on an empty array, it will also return **undefined** without modifying the array.


### If you call the shift() function on an empty array, it will return **undefined** without modifying the array.

------------


5. concat() 

The concat() function is used to merge two or more arrays, creating a new array as a result. **It does not modify the original arrays.**

```
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let newArray = array1.concat(array2);

console.log(newArray);

//[1, 2, 3, 4, 5, 6]

```

6. includes()

The includes() function is used to check if an array contains a specific element. It returns a boolean value indicating whether the element is found in the array.

```
let array = ['apple', 'banana', 'orange'];

console.log(array.includes('banana'));     // Output: true
console.log(array.includes('grape'));      // Output: false
```

7. indexOf()

The indexOf() function is used to find the index of a specific element in an array. It returns the first index at which the element is found, or -1 if the element is not present.


```
let array = ['apple', 'banana', 'orange'];

console.log(array.indexOf('banana'));     // Output: 1
console.log(array.indexOf('grape'));      // Output: -1

```


8. reverse()

The reverse() function is used to reverse the order of elements in an array. **It modifies the original array.**


```
let array = ['apple', 'banana', 'orange'];

array.reverse();

console.log(array);

//['orange', 'banana', 'apple']
```


9. join() 

The join() function is used to **concatenate all the elements of an array into a single string.** By default, it joins the elements using a comma (,), but you can specify a custom separator as an argument.

```
let array = ['apple', 'banana', 'orange'];

let joinedString = array.join();

console.log(joinedString);     // Output: "apple,banana,orange"




let array = ['apple', 'banana', 'orange'];

let joinedString = array.join(' | ');

console.log(joinedString);     // Output: "apple | banana | orange"

```


10. slice() 

The slice() function is used to extract a portion of an array and create a new array with the selected elements. It does not modify the original array.


```

let array = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

let slicedArray = array.slice(1, 4);

console.log(slicedArray);

// ['banana', 'orange', 'kiwi']





let array = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

let slicedArray = array.slice(2);

console.log(slicedArray);

//['orange', 'kiwi', 'grape']




let array = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

let slicedArray = array.slice(-3); //last 3 elements

console.log(slicedArray);

//['orange', 'kiwi', 'grape']

```


11. splice() 

Return Value --> Set of elements Deleted

Array --> Updated with Inserted/Deleted Values

The splice() function is used to **add, remove, or replace elements in an array**. It **modifies the original array** and can be used to insert elements at a specific index, remove elements from an index, or replace elements.

```
array.splice(start, deleteCount, item1, item2, ...);
```


- start: The index at which to start modifying the array. It can be a positive or negative integer. If start is negative, it counts from the end of the array. If start is greater than the length of the array, it is set to the length of the array. If start is omitted, the modification starts from index 0.

- deleteCount: The number of elements to remove from the array. If deleteCount is omitted or is greater than the number of elements from start to the end of the array, all elements starting from start will be removed.

- item1, item2, ...: - **Optional**.The elements to insert into the array at the start index. If no elements are specified, splice() only removes elements from the array.



```
let array = [1, 2, 3, 4, 5];

// Removing elements starting from index 2
let removedElements = array.splice(2);
console.log(array);             // Output: [1, 2]
console.log(removedElements);   // Output: [3, 4, 5]




array = [1, 2, 3, 4, 5];

// Removing 2 elements starting from index 1 and adding 'a' and 'b'
let removedElements = array.splice(1, 2, 'a', 'b');
console.log(array);             // Output: [1, 'a', 'b', 4, 5]
console.log(removedElements);   // Output: [2, 3]




// Adding 'x' at index 2 without removing any elements
let removedElements = array.splice(2, 0, 'x');
console.log(array);             // Output: [1, 2, 'x', 3, 4, 5]
console.log(removedElements);   // Output: []



// Removing 1 element starting from index -2 
array = [1,2,3,4,5];
//[1, 2, 3, 4, 5]
array.splice(-2,1,'x','y');
//[4]  //returns removed elements
array
//[1, 2, 3, 'x', 'y', 5]

```


12. sort()
(can have mixed arrays so it does not make sense directly)
Sorts the function Based on Utf Code not logically
```
let scores = [1,70,100,2500,9,-12,0,34];
//undefined
scores.sort();
//[-12, 0, 1, 100, 2500, 34, 70, 9]
```
- so we need to write explicit sort functions


## == and === in arrays

They dont compare if they same values stored in the array

they compare if both the arrays point to the same memory location or not

```
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(array1 == array2);  
// Output: false
```


```
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(array1 === array2);  
// Output: false
```


BUT 
```
let array1 = [1,2,3];
//undefined
let array2 = array1;
//undefined
array1==array2
//true
array1===array2
//true
array1.push(4);
//4
array1
//[1, 2, 3, 4]
array2
//[1, 2, 3, 4]
```



-----------

## Const and Arrays
In JavaScript, the const keyword is used to declare constants, which are variables that cannot be reassigned once they are initialized. When using const with arrays, 
- **it means that the variable holding the array cannot be reassigned to a different array. However, the elements within the array can still be modified.**

- ### i.e. the reference or the container of array can not be changed but inside the array we can change anything

```
const array = [1, 2, 3];
array.push(4);  
// Modifying the array by adding an element

console.log(array);  
// Output: [1, 2, 3, 4]
```


BUT
```
const array = [1, 2, 3];
array = [1, 2, 3];  
// Error: Assignment to constant variable

```

----------
### Multi Dimension Arrays
can have 3,4... dimensions
```
// Creating a 2-dimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in the array
console.log(matrix[0][0]);  // Output: 1
console.log(matrix[1][2]);  // Output: 6
console.log(matrix[2][1]);  // Output: 8

// Modifying elements in the array
matrix[1][1] = 10;
console.log(matrix);  // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]
```

--------------

# Objects in JS


- Objects are one of the fundamental data types and are used to store and manipulate data in a structured way. Objects consist of **key-value pairs,** where each key is a **unique** identifier and each value can be of any data type, including **other objects.**

```
// Creating an object
let person = {
  name: "John",
  age: 30,
  city: "New York",
  ar: [1,2,3,4]
};

// Accessing object properties
console.log(person.name);  // Output: "John"
console.log(person.age);   // Output: 30
console.log(person.city);  // Output: "New York"
console.log(person.ar);  // Output: [1,2,3,4]

// Modifying object properties
//-------------
//Even if the object is declared using const we can still modify/add values inside it. What shouldn't change is the reference of the object just like arrays
//-------------
person.age = 35;
console.log(person.age);   // Output: 35

// Adding new properties
person.gender = "Male";
console.log(person.gender);  // Output: "Male"

// Nested objects
let address = {
  street: "123 Main St",
  city: "New York"
};

let person = {
  name: "John",
  age: 30,
  address: address
};

console.log(person.address.street);  // Output: "123 Main St"

```


## Every Key is converted to **strings** (except Symbols)

```
const years = {1999: 'Good', 2020: 'Bad', true: 'gd'}
undefined
years
{1999: 'Good', 2020: 'Bad', true: 'gd'}
years['1999']
'Good'
years[1999]   /////First its coerces to a string then accessed
'Good'
years['true']
'gd'
```

1. Dot Notation

```
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Output: "John"
console.log(person.age);   // Output: 30
console.log(person.city);  // Output: "New York"

```


2. Bracket Notations

```
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person["name"]);  // Output: "John"
console.log(person["age"]);   // Output: 30
console.log(person["city"]);  // Output: "New York"

```

- Benefit of Square bracket notations

1. We can put expressions inside the square bracket

```
let person = {
  firstname: "John",
  age: 30,
  city: "New York"
};

console.log(person['first'+'name']) 
//output : "John"
```

2. We can use variables to access 

```
const years = {1999: 'Good', 2020: 'Bad'}
//undefined
years
//{1999: 'Good', 2020: 'Bad'}
let birthyear = 1999;


years.birthyear; -----> NOT ALLOWED


years[birthyear]; /// Allowed --> expression is evaluated that is value of birthyear is substituted
//'Good'

```



## Array of Objects 

```
// Creating an array of objects
let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

// Accessing object properties in the array
console.log(people[0].name);  // Output: "John"
console.log(people[1].age);   // Output: 25

// Modifying object properties in the array
people[2].name = "Charlie";
console.log(people[2].name);  // Output: "Charlie"

// Adding new objects to the array
people.push({ name: "Eve", age: 28 });
console.log(people.length);  // Output: 4

// Iterating over the array of objects
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

```



# Looping


1. For loop

```
for (initialization; condition; increment) {
  // Code to be executed
}
```

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

```
a = ['Tiger', 'Lion', 'Bear'];

for(let i = 0;i<a.length;i++)
{
    console.log(i,a[i]);      ////--> Can pass multiple parameters here
}

```

- Infinite For Loop

//Hangs the WEBPAGE 
```
for(let i=0;i>=0;i++)
{
    console.log(i); 
}
```


### Nested For Loop

```
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}


//Output:
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1
i: 2, j: 2
i: 2, j: 3
i: 3, j: 1
i: 3, j: 2
i: 3, j: 3

```


2. While Loop

```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

Output:
0
1
2
3
4
```


```
const pass = "BabyHippo";

guess = prompt("Enter Password");
while(guess!==pass)
{
    guess = prompt("Enter Password");
}
console.log("You got it right");
```


### Break Keyword

```
const predefinedValue = "OpenAI";
let userInput;

while (true) {
  userInput = prompt("Enter a value:"); // Prompt the user for input

  if (userInput === predefinedValue) {
    console.log("Match found! Exiting the loop.");
    break;
  }
}

console.log("Loop ended.");

```



-----------
# Guessing Number Game
-----------

## For of Loop

Can work on any iterable in Js such as array, string,  Maps (objects are not directly iterable)
```
for (variable of iterable) {
  // Code to be executed for each element
}
```

```
const subreddits = ['cringe','books', 'chickens','funny','pics','soccer']
for(let i =0; i<subreddits.length; i++)
{
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}


//-------------------
for(let sub of subreddits)
{
    console.log(sub);
}


JUST LIKE AUTO 
//------------
for(let row of seatingChart)
{
    for(let student of row)
    {
        console.log(student);
    }
}
```



## For In Loop 

- For iterating over objects

```
testScores = {
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nada: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

//Prints only the keys
// for(let person in testScores)
// {
//     console.log(person);
// }


// for(let person in testScores)
// {
//     console.log(`${person} scored ${testScores[person]}`);
// }

console.log(Object.keys(testScores));  //returns an array containing all the keys

console.log(Object.values(testScores));  //returns an array containing all the values

console.log(Object.entries(testScores));//returns an array containing all the key value pairs


let sum = 0;
for(let scores of Object.values(testScores))
{
    console.log(scores);
    sum+=scores;

}
console.log(`Total is ${sum}`);
console.log(`Average of marks is ${sum/Object.values(testScores).length}`);  //can store it before hand as an array
```



## Task List Project JS


-------------

# Function in JS

```
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// Calling the function and storing the result in a variable
let result = addNumbers(3, 5);
console.log(result); // Output: 8


```
- Return stops the execution of the function if any lines are written after it


```
function add(x,y)
{
    if(typeof(x)!=='number' || typeof(y)!=='number')
        return false;

    return x+y;
}

///////
add(3,5)
8
add('hello',5)
false

```



## Scope of a function

```
let animal = "Giant Pacific Octopus";
function observe(){
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();


//"Pajama Squid"
```

```
const creature = "Common Sea Dragon";
 
function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
 
scubaDive();

///"Spanish Dancer"
```

```
let deadlyAnimal = "Blue-Ringed Octopus";
 
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
 
handleAnimal();
console.log(deadlyAnimal)

///"Scorpionfish"
///"Blue-Ringed Octopus"
```

### Block Scope 
```
function exampleFunction() {
  let outsideVariable = "Outside";

  if (true) {
    let insideVariable = "Inside";
    console.log(outsideVariable); // Output: "Outside"
    console.log(insideVariable); // Output: "Inside"
  }

  console.log(outsideVariable); // Output: "Outside"
  console.log(insideVariable); // Error: ReferenceError: insideVariable is not defined
}

exampleFunction();

```

## In JavaScript, the ***var*** keyword does not have block scope like let and const. Instead, var has function scope or global scope. This means that variables declared with var are accessible throughout the entire function in which they are declared, regardless of block boundaries. 


```
function exampleFunction() {
  var outsideVariable = "Outside";

  if (true) {
    var insideVariable = "Inside";
    console.log(outsideVariable); // Output: "Outside"
    console.log(insideVariable); // Output: "Inside"
  }

  console.log(outsideVariable); // Output: "Outside"
  console.log(insideVariable); // Output: "Inside"
}

exampleFunction();

```

## Lexical Scope

Lexical scope, also known as static scope, is a concept in programming that determines how variable names are resolved at compile time based on their location in the source code.

###  nested functions.
```
function outerFunction() {
  let outerVariable = "Outer";

  function innerFunction() {
    let innerVariable = "Inner";
    console.log(outerVariable); // Output: "Outer"
    console.log(innerVariable); // Output: "Inner"
  }

  innerFunction();
}

outerFunction();

```
- In other words, variables defined in outer functions or global scope are accessible within inner functions, but variables defined in inner functions are not accessible in outer functions.


## Function Expressions

- A function expression in JavaScript is a way to define a function by **assigning it to a variable**. It allows functions to be **treated as values** that can be ***assigned, passed as arguments to other functions, or returned from other functions.***

```
const greeting = function(name) 
{
  console.log(`Hello, ${name}!`);
};

greeting("John"); // Output: Hello, John!

```

- It's important to note that **function expressions are evaluated at runtime**, which means they are not hoisted like function declarations. Therefore, **you must define the function expression before you can use it in your code.**



## Higher Order Functions

### Pass Function As Arguments

```
function callTwice(func)
{
    func();
    func();
}

function callTenTimes(f)
{
    for(let i=0;i<10;i++)
    {
        f();
    }
}

function rollDie()
{
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

callTwice(rollDie);
console.log("----");
callTenTimes(rollDie); //make sure dont add () as function becuase we consider functions as value
```


## Return A Function

```
//Showing Factory Function

function isBetween(min,max)
{
    return function(num)
    {
        return num>=min && num<=max;
    };
}



//all these are functions generated by the factory function
const isChild = isBetween(0,18);
const isAdult = isBetween(19,64);
const isSenior = isBetween(65,120);


console.log(isChild(14));  //true
console.log(isAdult(30));  //true
console.log(isSenior(33));  //false

```


## Method in JS

Every Method is A function but Vice versa not true

**Methods Are functions that are added as properties to Objects** 

eg. Math.random()  --> Object Math 
str.toUpperCase()

```
const myMath = {
    PI: 3.14,
    square: function(num)
    {
        return num*num;
    },
    cube: function(num)
    {
        return num ** 3;
    }
};

myMath.square(2); //4
myMath.cube(3);   //27
```


### New Syntax --> Direct name
```
const myMath = {
    PI: 3.14,
    square(num)
    {
        return num*num;
    },
    cube(num)
    {
        return num ** 3;
    }
};

myMath.square(2); //4
myMath.cube(3);   //27
```


## this keyword

```
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
  }
};

person.greet(); // Output: Hello, my name is John. I am 30 years old.

```


## But we create another variable in which we store the function then this variable wont work normally

```
const cat = person.greet();
````
## try running above code
-------



## Try Catch

```
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divide by zero error");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Divide by zero error
```


```
function sumNumbers(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Both parameters must be numbers");
    }
    return a + b;
  } catch (error) {
    console.log(error.name + ": " + error.message);
  }
}

console.log(sumNumbers(5, 10)); // Output: 15
console.log(sumNumbers(5, "10")); // Output: TypeError: Both parameters must be numbers
```