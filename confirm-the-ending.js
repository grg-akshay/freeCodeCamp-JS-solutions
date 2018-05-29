
function confirmEnding(str, target) {
  
 return str.substring(str.length - target.length, str.length)=== target;
  
}

confirmEnding("He has to give me a new name", "name");