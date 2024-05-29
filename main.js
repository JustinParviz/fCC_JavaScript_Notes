
// ***** fCC JAVASCRIPT NOTES ***** // 


// - Developers use HTML and CSS to control the content and styling of a page. And they use JavaScript to make that page interactive.

// - JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, 
// along with HTML and CSS. All modern browsers support JavaScript.

// - Primitive data types can only hold one value at a time.
// - JavaScript has seven primitive data types: String, Number, 

// - Non-primitive data types can hold more complex data.
// - JavaScript non-primitive data types: Array,


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ** VARIABLES **


// - JavaScript is the programming language that powers the web. It is most commonly used to write logic instead of markup.

// - One of the most important concepts in programming is variables. A variable points to a specific memory adress that stores a value.
// - Variables are given a name which can be used throughout your code to access that value.

// - Declaring a variable means giving it a name. In JavaScript, this is often done with the (let) keyword.
// - Here is how you would declare a hello variable:
//      EXAMPLE: let hello;

// - Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and  
// must not begin with a number.

// NOTE: It is common practice to end statements in JavaScript with a semicolon. (;)

// - You can assign a value by using the ASSIGNMENT OPERATOR (=).
//      EXAMPLE: let hello = "Hello";

// - Assigning a value to a variable at the moment of its declaration is known as INITIALIZATION.

// - When a variable is declared with the let keyword, you can REASSIGN (or change the value of) that variable later on.

// - In the following example, the value of programmer is changed from "Naomi" to "CamperChan".
//      EXAMPLE: let programmer = "Naomi";
//               programmer = "CamperChan";

// NOTE: When reassigning a variable, you do NOT use the let keyword again.

// - When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript,
// the convention to use is CAMEL CASE.

// - Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased.
//      EXAMPLES: let variableOne;
//                let secondVariable;
//                let yetAnotherVariable;
//                let thisIsAnAbsurdlyLongName;

// - When you declare a variable without initializing it, it is considered UNINITIALIZED.
//      EXAMPLE: let secondCharacter;

// - The default value of an uninitialized variable is UNDEFINED. This is a special data type that represents a value that does
// not have a definition yet.

// - You can still assign a value to an uninitialized variable.
//      EXAMPLE: let uninitialized;
//               uninitialized = "assigned"; 

// - You can also assign the value of a variable to another variable. 
//      EXAMPLE: let first = "One";
//               let second = "Two";
//               second = first;
// - In the above example, the second variable would now have the value "One". 


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ** NUMBERS **


// - When using a number value, you do not use quotes.
//      EXAMPLE: let money = 100;

// - With the NUMBER data type, you can perform mathematical operations, like addition (+).
//      EXAMPLE: let count = 8;
//               console.log(count + 1);

// - You can also perform subtraction (-), multiplication (*), and division (/). 
//      EXAMPLE: let count = 8;
//               console.log(count * 5);


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ** STRINGS **


// - JavaScript has seven primitive data types, with String being one of them.

// - In JavaScript, a string represents a sequence of characters and can be enclosed in either single (') or double (") quotes.

// NOTE: Strings are IMMUTABLE, which means that once they are created, they cannot be changed.


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ** CONSOLE **


// - The console allows you to print and view JavaScript output.

// - You can send information to the console using console.log().
// - The following code will print "Naomi" to the console:
//      EXAMPLE: let developer = "Naomi";
//               console.log(developer);

// - The code above accesses the developer variable with its name in the console.log().

// NOTE: The value between the parenthesis is the value that will be printed.


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ** ARRAYS **


// - In programming, you will often need to work with lots of data. There are many data structures that can help you organize 
// and manage your data. One of the most basic data structures is an array.

// - An ARRAY is a non-primitive data type that can hold a series of values.

// - Non-primitive data types differ from primitive data types in that they can hold more complex data. 
// - Primitive data types like strings and numbers can only hold one value at a time.

// - Arrays are denoted using square brackets ([]).
// - The following is an example of a variable with the value of an empty array:
//      EXAMPLE: let array = [];

// - When an array holds values, or ELEMENTS, those values are separated by commas.
// - Here is an array that holds two strings:
//      EXAMPLE: let array = ["first", "second"];

// - The order of values in an array is important.

// - You can access the values inside an array using the INDEX of the value. 
// - An index is a number representing the position of the value in the array, starting from 0 for the first value.
// - You can access the value using BRACKET NOTATION, such as array[0].

// - Arrays are special in that they are considered MUTABLE. This means that you can change the value at an index directly.
















