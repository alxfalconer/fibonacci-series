function fibonacci(num) {
  // type your code here
  let index = num - 1;
  let value = 0;
  let fib = [0, 1];

  if (num < 1) return 0;

  while (index > 0) {
    value = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(value);
    index--;
  }
  return fib[fib.length - 1];
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
