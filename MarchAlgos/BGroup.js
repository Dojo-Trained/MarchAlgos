/* _______________________B GROUP IS MORE ADVANCED THAN BASIC 13 _________________

______________________________ALGO #1________________________________________________

This Algo is designed to test your ability to extend the functionality of built-in ruby classes. 
In this case, we want you to extend the built-in Array class 
with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed
Examples:

var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]




______________________________ALGO # 2________________________________________________
Description
A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid
You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

NOTE: reverse/reverse! have been disabled for String/Array and reverse() for JS.





______________________________ALGO #3________________________________________________
Description
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

STACK OVERFLOW>>>>>   https://stackoverflow.com/questions/29465214/regex-password-validation-codewars_____________________________________________________________________________________________






______________________________________________________________________ALGO #4 ________________________________________________________________________________________

Increment and decrement functions
In the venerable text editor Vim, you can position the cursor over a word and press the key combination Ctrl-A.

Discussion
If the word under the cursor is not a number, this will do nothing. If the word under the cursor is a number, it will be incremented by 1.

If the word also contains characters that are not numbers, you should look for the first number in the word and increment it.

Examples of using Ctrl-A:

"hello"           → Ctrl-A →   "hello"
"1"               → Ctrl-A →   "2"
"199"             → Ctrl-A →   "200"
".44!"            → Ctrl-A →   ".45!"
"TurboCleaner099" → Ctrl-A →   "TurboCleaner100"
"1become1"        → Ctrl-A →   "2become1"
"test009it"       → Ctrl-A →   "test10it"
A similar function can be used when placing the cursor over a word and pressing the key combination Ctrl-X. In this case the number will be decremented by 1.

Examples of using Ctrl-X:

"hello"           → Ctrl-X →   "hello"
"2"               → Ctrl-X →   "1"
"200"             → Ctrl-X →   "199"
".46!"            → Ctrl-X →   ".45!"
"TurboCleaner100" → Ctrl-X →   "TurboCleaner99"
"3become1"        → Ctrl-X →   "2become1"
"test00x"         → Ctrl-X →   "test-1x"
Have a look at sample test cases for more edge cases.

Assignment
Write the functions control_a and control_x: each function takes in a word and returns the result of the incrementation/decrementation.



_____________________________________________________ALGO #5_____________________________________________________________________________________________

This is a coding Challenge I had in a javascript Udemy. 

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).


Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.


















*/



