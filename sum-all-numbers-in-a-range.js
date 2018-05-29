function sumAll(arr) {
  let min=-1;
  let max=-1;
  if(arr[0]<arr[1]){
    min=0;
    max=1;
  }
  else{
    min=1;
    max=0;
  }
  
  var sum=0;
  for(let now=arr[min]; now <=arr[max]; now++){
    sum =sum+now;
  }
  
  
  return sum;
  
}

sumAll([1, 4]);