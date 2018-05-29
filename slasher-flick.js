function slasher(arr, chop) {
  
  
  if (arr.length<=chop){
    return [];
  }
  
  arr.splice(0,chop);
  
  
  return arr;
}

slasher([1, 2, 3], 2);