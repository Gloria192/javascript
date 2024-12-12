function myFunction(a) {
    // Check if the number `a` is an integer
    return Number.isInteger(a);
  }
console.log(myFunction(4));      // Expected: true
console.log(myFunction(1.123));  // Expected: false
console.log(myFunction(1048));   // Expected: true
console.log(myFunction(10.48));  // Expected: false