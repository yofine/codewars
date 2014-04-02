var str = 'sasfdafaf';
var ending = 'fsma';

function solution(str, ending) {
  var a= str.split('');
  var b= ending.split('');
  var temp = [];

  a.sort();
  b.sort();

  var indexA = 0;
  var indexB = 0;
  var lenA = a.length;
  var lenB = b.length;

  for(indexA=0, indexB=0; indexA<lenA && indexB<lenB;) {
    if(a[indexA] == b[indexB]) {
      temp.push(a[indexA]);
      indexA++;
      indexB++;
    }
    else if (a[indexA] < b[indexB]) {
      indexA++;
    }
    else {
      indexB++;
    }
  }

  if (temp.length == b.length) {
    return true;
  } else {
    return false;
  }
}

if (solution(str, ending)) console.log(1);
