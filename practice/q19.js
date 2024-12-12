function myFunction(a) {
    // Split a into its individual digits and return them in an array
    return String(a).split('').map(Number);
  }
  
  console.log(myFunction(10));      // Expected: [1, 0]
  console.log(myFunction(931));     // Expected: [9, 3, 1]
  console.log(myFunction(193278));  // Expected: [1, 9, 3, 2, 7, 8