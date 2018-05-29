function repeatStringNumTimes(str, num) {
  if (num <0){
    return "";
  }
  var temp= str;
  for(var now=0; now <num-1; now++){
    temp = temp + str;
    
  }
  
  return temp;
}

repeatStringNumTimes("abc", 3);