function myFunction(a) {
    return a.slice(0, Math.floor(a.length / 2));
  }
  
  console.log(myFunction('abcdefgh')); 
  console.log(myFunction('1234'));    
  console.log(myFunction('gedcba'));