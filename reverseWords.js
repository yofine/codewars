//My solution
function reverseSingle(str) {
  var arrstr = str.split('');
  arrstr.reverse();
  return arrstr.join('');
}

function reverseWords(str) {
  var arr = str.split(' ');
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    temp.push(reverseSingle(arr[i]));
  }
  return temp.join(' ');
}


//The better one
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
