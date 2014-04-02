function foo() {
  return Array.prototype.slice.call(arguments, 0);
}

console.log(foo(1, 2, 3));
