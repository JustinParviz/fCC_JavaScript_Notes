
// ***** fCC JAVASCRIPT NOTES ***** // 


// - Developers use HTML and CSS to control the content and styling of a page. And they use JavaScript to make that page interactive.

// - JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, 
// along with HTML and CSS. All modern browsers support JavaScript.

// - Primitive data types can only hold one value at a time.
//      -> JavaScript has seven primitive data types: String, Number, 

// - Non-primitive data types can hold more complex data.
//      -> JavaScript non-primitive data types: Array,

// MUTABLE vs IMMUTABLE:

// - A MUTABLE Data Structure is one where you can change the value at an index directly.
//      EXAMPLES: Arrays,

// - An IMMUTABLE Data Structure is
//      EXAMPLES: 


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

// NOTE: It is common practice to end statements in JavaScript with a semicolon (;).

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

// - Declaring a variable with the let keyword allows it to be reassigned. 
// - This means that you could change your variable later to have a completely different value.
// - If you do not want to change the values of your variables, you should use const to declare them. const variables are special.

// - A const variable cannot be reassigned like a let variable. The following code would throw an error:
//      EXAMPLE: const firstName = "Naomi";
//               firstName = "Jessica";
// - A const variable also cannot be uninitialized. The following code would also throw an error:
//      EXAMPLE: const firstName;


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

// - An empty string is represented by quotation marks with nothing between them, such as "".
//      EXAMPLE: let result = "";


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
// - Remember that strings are case-sensitive.

// - You can access the values inside an array using the INDEX of the value. 
// - An index is a number representing the position of the value in the array, starting from 0 for the first value.
// - You can access the value using BRACKET NOTATION, such as array[0].

// NOTE: Arrays are special in that they are considered MUTABLE. This means that you can change the value at an index directly.
// - The code in the following example would assign the number 25 to the second element in the array:
//      EXAMPLE: let array = [1, 2, 3];
//               array[1] = 25;
//               console.log(array); // prints [1, 25, 3]

// - When the value inside an array has been changed directly, it is called MUTATION.

// - You may not know how many elements are in an array when you want the last one. 
// - In this case, you can make use of the .length property of an array - this returns the number of elements in the array.
// - To get the last element of any array, you can use the following syntax:
//      EXAMPLE: array[array.length - 1]
// - array.length returns the number of elements in the array.
// - By subtracting 1, you dynamically get the index of the last element in the array.

// - A METHOD in JavaScript is a function that's associated with certain values or objects.
// - An example of this is the .log() method, which is part of the console object.

// - Arrays have their own methods, such as the .push() method. This allows you to "push" a value to the end of an array.
// - The following example adds the number 12 to the end of an array:
//      EXAMPLE: array.push(12);

// - Another essential method is the .pop() method. It removes the last element from an array and returns that element.
// - When a method returns a value, you can think of it as giving the value back to you, making it available for use 
// in other parts of your code.
//      EXAMPLE: let rows = ["Naomi", "Quincy", "CamperChan"];
//               rows.push("Jason");
//               let popped = rows.pop();
//               console.log(popped); // prints Jason
// - In the above example, "Jason" is printed to the console. This is because .pop() returns the value that was removed 
// from the array - and "Jason" was pushed to the end of the array earlier.

// - .push() also returns the new length of an array, after adding the value you give it.
//      EXAMPLE: let rows = ["Naomi", "Quincy", "CamperChan"];
//               let pushed = rows.push("Jason");
//               console.log(pushed); // This would print 4 in the console


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// ** LOOPS **


// - When you have to perform a task repeatedly until a condition is met, you will use a loop. 
// - There are many ways to write a loop.

// - A basic for loop uses the following syntax:
//      EXAMPLE: for (iterator; condition; iteration) {
//                  logic;
//               }
// - The "iterator", "condition", and "iteration" are the three components.
// - The loop body is the section within the curly braces {}.

// - The ITERATOR is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.
// - It is a common convention to use i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). 
// - In the following example, here is a for loop that declares an index variable and assigns it the value 100:
//      EXAMPLE: for (let index = 100; "second"; "third") {
//    
//               }

// - The CONDITION of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

// - In JavaScript, a Boolean value can be either true or false. These are not strings.

// - The less than operator (<) allows you to check if the value on the left is less than the value on the right.
//      EXAMPLE: count < 3 would evaluate to true if count is 2, and false if count is 4.

// - The ITERATION statement will tell your loop what to do with the iterator after each run.

// - When you reassign a variable, you can use the variable to reference the previous value before the reassignment.
// - This allows you to do things like add three to an existing number.
//      EXAMPLE: bees = bees + 3; would increase the value of bees by three.
// - In the following example, the loop should run eight times:
//      EXAMPLE: const count = 8;
//               for (let i = 0; i < count; i = i + 1) {
//                   console.log(i)
//                   }                  // In the Console, this would print 0
//                                                                          1
//                                                                          2
//                                                                          3
//                                                                          4
//                                                                          5
//                                                                          6
//                                                                          7























