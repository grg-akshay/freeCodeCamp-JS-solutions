function mod26(num){
  //NOTE: % in JS is remainder operator, not a modulus operator
  // i.e. it doesn't work well with negative numbers !
  return num<0? 26+num: num;
}


//this functions checks the range of number between 65 to 90
function checkRange(num){
    if(num>=65 && num<=90){
      return true;
    }
  return false;
}

function rot13(str) { 
  //Concept : (x-n)%26
  //Step1 : convert string into array of strings split by empty string
  var array = str.split("");
  
  //step2: loop over every element of string
  var temp = array.map(function(current, ind){
    
  //step3: while looping check if number is special character, if yes then don't decode
           let element =str.charCodeAt(ind);
           if (!checkRange(element)){
            return  String.fromCharCode(element);
           } 
  //step4: else decode
           return String.fromCharCode(mod26(element -65-13)+65);
  });
    
  return temp.join("");

  
}

// Change the inputs below to test
rot13("SERR CVMMN!"); //expected output: FREE PIZZA!