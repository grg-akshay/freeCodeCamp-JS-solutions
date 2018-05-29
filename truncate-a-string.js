function truncateString(str, num) {
 if(str.length <= num ){
   return str;
 }
  var threeDots="...";
  var lengthOfAddingDots = 3;
  if(num<=3)
    lengthOfAddingDots=0;
  
  var trunc = str.slice(0,num- lengthOfAddingDots) + threeDots;
  
  return trunc;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11 );