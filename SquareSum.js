//My idea
function squareSum(numbers) {
  return numbers.map(function(x) {
    return Math.pow(x, 2);
  }).reduceRight(function(a, b) {
    return a + b;
  })
}

//The better one
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
