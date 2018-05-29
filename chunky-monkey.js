function chunkArrayInGroups(arr, size) {

  var newArr=[];
  var number =arr.length/size;
  for(var i=0; i<number; i++){
    newArr.push(arr.slice(i*size , i*size + size));
  }

  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);// [[a,b],[c,d]]