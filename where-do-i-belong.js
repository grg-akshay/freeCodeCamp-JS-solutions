function getIndexToIns(arr, num) {
  if(arr.length===0){
    return 0;
  }
  // Find my place in this sorted array.
  let newArray=  arr.sort(function(a,b){
    return a-b;
  });
  
  /*let now = newArray.reduce(function(prev,curr,index,array){
    if (num>=prev && num< curr)
      return index;
    
  });*/
  
  var now=-1;
  if(newArray[0]> num ){
    return 0;
  }
  if(newArray[newArray.length-1] < num ){
    return newArray.length;
  }
  
  for(var i=0;i< newArray.length-1; i++){
    if(newArray[i]===num){
      now=i;
      return i; 
    } 
    
  else  if(newArray[i]<= num && newArray[i+1]> num){
      now=i+1;
      return i+1; 
    } 
  }
  
  
  return now;
}

getIndexToIns([2, 5, 10], 1);