function largestOfFour(arr) {
  
  var newarr=arr.reduce(function(prev,curr,index,array){
    prev.push(Math.max(... curr));
    return prev;
    
  },[]);
  
  return newarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);