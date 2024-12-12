function myFunction(a, b) {
    // Use the `split` method to break `b` into an array using `a` as the delimiter
    // Then subtract 1 from the length of the resulting array to get the count
    return b.split(a).length - 1;
  }
  console.log(myFunction('m', 'how many times does the character occur in this sentence?')); // Expected: 2
console.log(myFunction('h', 'how many times does the character occur in this sentence?')); // Expected: 4
console.log(myFunction('?', 'how many times does the character occur in this sentence?')); // Expected: 1
console.log(myFunction('z', 'how many times does the character occur in this sentence?')); // Expected: 0