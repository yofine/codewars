//My idea
var str = "     foo      bar            j";
var temp = [];
function trim(str) {
  str.map(function (item) {
    if (item) temp.push(item);
  })
  return temp.join('');
}

String.prototype.trim = function () {
  return trim(this.split(' '));
}

console.log(str.trim().split(' '));

//The correct solution
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
};
