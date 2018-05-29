function diffArray(arr1, arr2) {
var newArr= arr1.concat(arr2);
  
  var result= newArr.filter(function(item){
    return !arr1.includes(item) || !arr2.includes(item); 
  }); 
  
  return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);