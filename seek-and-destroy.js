function destroyer(arr) {
  
  var numberOfDestroyers =arguments.length -1;
  //arguments is Array-like but not array
  var destroyerArray= Array.from(arguments).slice(1, numberOfDestroyers+1);
  
  
  var newArr= arr.filter(function(curr){
    
    if(destroyerArray.includes(curr)  ){
      return false;
    }
    return true;
    //return
  });
  
  
  return newArr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);