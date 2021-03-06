/* ______________DROP YOUR SOLUTION HERE AS A COMMENT< LEAVE SPACE FOR COMMENTS> */


/* ZM Solution 
------------------------------------------------------------------------------------------------------------------------------
//call function that takes in names
//find how many names by finding length of the length of the list
//search the list using the length
//check to see who likes who based on data, check againist the values being 
supplied as likes and a total can determine differnt things
//likes have names attached. Names is a string inside a string, 
which is a list of names, so names.length will search the likes associated with each name....


    function likes (names) {
  let temp = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  let i = Math.min(names.length, 4);

  return temp[i].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}
------------------------------------------------------------------------------------------------------------------------------

*ANYONE CAN HELP ADD A BETTER WAY*
REFACTOR
------------------------------------------------------------------------------------------------------------------------------





------------------------------------------------------------------------------------------------------------------------------

 _____________________________Comments/Suggestions___________________________________
                    ** thanks for joining the group Post your comments or suggestions Here**

 




 ________________________________________________________________________________________________
 
 ________________________________________DEAD SPACE______________________________________________

 +++++++++++++++++++++++++
 ADD NEW POST BELOW
 __________________________________________________________________________________________________
 
 */

