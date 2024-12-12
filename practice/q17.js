// If a is smaller than b, divide a by b
if (a < b) {
    return a / b;
  } 
  // Otherwise, multiply a and b
  else {
    return a * b;
  }
  console.log(myFunction(10, 100));  // Expected: 0.1
  console.log(myFunction(90, 45));   // Expected: 4050
  console.log(myFunction(8, 20));    // Expected: 0.4
  console.log(myFunction(2, 0.5));   // Expected: 1