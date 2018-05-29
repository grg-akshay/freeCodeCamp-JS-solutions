function bouncer(arr) {
  
  var newArr= arr.filter(function(curr,index,array){
    if(Boolean(curr)===false){
      return false;
    }
    return true;
    
  });
  
  return newArr;
}

bouncer([7, "ate", "", false, 9]);