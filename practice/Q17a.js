function myFunction(a) {
    // Round a to the 2nd digit after the decimal point
    return Math.round(a * 100) / 100;
  }
  
  // Test cases
  console.log(myFunction(2.12397)); // Expected: 2.12
  console.log(myFunction(3.136));   // Expected: 3.14
  console.log(myFunction(1.12397)); // Expected: 1.12
  console.log(myFunction(26.1379)); // Expected: 26.14