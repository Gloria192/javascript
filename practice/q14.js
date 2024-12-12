function myFunction(a) {
  // Check if the number is even
  return a % 2 === 0;
}

// Test cases
console.log(myFunction(10));  // Expected: true
console.log(myFunction(-4));  // Expected: true
console.log(myFunction(5));   // Expected: false
console.log(myFunction(-111)); // Expected: false
