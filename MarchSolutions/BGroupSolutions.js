/* ______________DROP YOUR SOLUTION HERE AS A COMMENT< LEAVE SPACE FOR COMMENTS> */


/* ZM Solution Algo # 1
------------------------------------------------------------------------------------------------------------------------------
function checkArr(arr){
  return Array.isArray(arr) || Object.prototype.toString.call(arr) === '[object Array]';
}

let arrProto = Array.prototype;

arrProto.square = function(){
  if(checkArr(this)){
     return this.map((item) => {
        return Math.pow(item, 2);
     });
  } else {
    throw 'params must be a array';
  }
};

arrProto.cube = function(){
  if(checkArr(this)){
     return this.map((item) => {
        return Math.pow(item, 3);
     });
  } else {
    throw 'params must be a array';
  }
};

arrProto.sum = function(){
  if(checkArr(this)){
     return this.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
     },0);
  } else {
    throw 'params must be a array';
  }
};

arrProto.average = function(){
  if(checkArr(this)){
     return this.sum() / this.length;
  } else {
    throw 'params must be a array';
  }
};

arrProto.even = function(){
   if(checkArr(this)){
     return this.filter((item) => {
        return item % 2 === 0;
     });
  } else {
    throw 'params must be a array';
  }
};

arrProto.odd = function(){
   if(checkArr(this)){
     return this.filter((item) => {
        return item % 2 !== 0;
     });
  } else {
    throw 'params must be a array';
  }
};
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


/* ZM Solution Algo#2
------------------------------------------------------------------------------------------------------------------------------
function palindrome(string) {
  // enter the codes
  let strArr = string.toLowerCase().split('');
  let newArr = string.toLowerCase().split('');

  strArr.reverse();

  let isPalindrome = false;

  strArr = strArr.filter(function(item){
    return /[a-z]/.test(item);
  });

  newArr = newArr.filter(function(item){
    return /[a-z]/.test(item);
  });

  let len = strArr.length;
  let end = len - 1;

  for(let i=0; i < len; i++){
    if(strArr[i] == newArr[end - i]){
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}






------------------------------------------------------------------------------------------------------------------------------
*ANYONE CAN HELP ADD A BETTER WAY*
REFACTOR
------------------------------------------------------------------------------------------------------------------------------





------------------------------------------------------------------------------------------------------------------------------



 _____________________________Comments / Suggestions___________________________________
                    ** thanks for joining the group Post your comments or suggestions Here**





 ________________________________________________________________________________________________

________________________________________DEAD SPACE______________________________________________
 NEW POST AFTER THIS LINE
 __________________________________________________________________________________________________

 */

/* ZM Solution Algo#3
------------------------------------------------------------------------------------------------------------------------------







------------------------------------------------------------------------------------------------------------------------------
*ANYONE CAN HELP ADD A BETTER WAY*
REFACTOR
------------------------------------------------------------------------------------------------------------------------------





------------------------------------------------------------------------------------------------------------------------------



 _____________________________Comments / Suggestions___________________________________
                    ** thanks for joining the group Post your comments or suggestions Here**





 ________________________________________________________________________________________________

________________________________________DEAD SPACE______________________________________________
 NEW POST AFTER THIS LINE
 __________________________________________________________________________________________________

 */























 

