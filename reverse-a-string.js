function reverseString(str) {
  var rev="";
  for(var i=str.length -1 ; i>=0; i--){
    rev= rev + str.charAt(i);
  }
  return rev;
}

reverseString("hello");