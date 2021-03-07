/* _______________________AGROUP IS BASIC CONCEPTS LEADING UP TO MORE ADVANCED_________________
#1

You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

______________________________ALGO #1________________________________________________

Implement a function likes :: [String] -> String, which must take in input array, 
containing the names of people who like an item. 
It must return the display text as shown in the examples: 


likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"


Sample Tests

describe('example tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
_____________________________________________________________________________________________
*/
/* _________________________________COPY AND PASTE YOUR SOLUTION IN A GROUP SOLUTION FOLDER_______________________________ */
function likes(names) {
    // TODO
}

/* 
/* _______________________CGroup Advanced Concepts_________________
#2



______________________________ALGO # 2________________________________________________
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

_____________________________________________________________________________________________
*/

/* ____________________COPY AND PASTE YOUR SOLUTION IN A GROUP SOLUTION FOLDER_______________________________ */

/*
_______________________________Comment/Suggestions/Refactor___________________________________

________________________________________Coments________________________________________



________________________________________Suggestions______________________________




_____________________________________________________________________________________________

LEAVE SPACE BETWEEN ENTRIES---------------------------------------------------------------------------------------
________________________________________DEAD SPACE__________________________________________ */
/*

/* _______________________CGroup Advanced Concepts_________________
#3



______________________________ALGO #3________________________________________________
Description
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.


_____________________________________________________________________________________________
*/
/* _________________________________COPY AND PASTE YOUR SOLUTION IN A GROUP SOLUTION FOLDER_______________________________ */

/*
_______________________________Comment/Suggestions/Refactor___________________________________


STACK OVERFLOW>>>>>   https://stackoverflow.com/questions/29465214/regex-password-validation-codewars
________________________________________Coments________________________________________



________________________________________Suggestions______________________________





_____________________________________________________________________________________________

LEAVE SPACE BETWEEN ENTRIES---------------------------------------------------------------------------------------
________________________________________DEAD SPACE__________________________________________ 

*/
