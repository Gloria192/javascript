function myFunction(a, b) {
    // Check if 'a' contains 'b'
    if (a.includes(b)) {
      return b + a;
    } else {
      return a + b;
    }
  }

  console.log(myFunction('cheese', 'cake')); // Expected: 'cheesecake'
  console.log(myFunction('lips', 's'));      // Expected: 'slips'
  console.log(myFunction('Java', 'script')); // Expected: 'Javascript'
  console.log(myFunction(' think, therefore I am', 'I')); // Expected: 'I think, therefore I am'
  