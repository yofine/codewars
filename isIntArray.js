//My idea
function isIntArray(arr) {
  var reg = /^(-|\+)?\d+$/ ;
  var temp = arr;
  if (Object.prototype.toString.call(arr) !== '[object Array]') return false;
  if (!arr.length) return true;
  return arr.filter(function(element) {
    return typeof(element) === 'number' && !isNaN(element) && reg.test(element);
  }).length === temp.length;
}

//The better one
function isIntArray(arr) {
  return Array.isArray(arr) &&
    arr.every(function(el) {
    return (typeof el === 'number') && (el % 1 === 0) && parseFloat(el) == parseInt(el, 10);
  });
}

//The other better one
function isIntArray(arr) {
  if(!Array.isArray(arr)) return false;
  console.log('faku');
  return !arr.some(function(e){
    console.log(e);
    return e == null || isNaN(e) || typeof e != 'number' || e % 1 != 0 || e.toString().indexOf('e') != -1;
  });
}
