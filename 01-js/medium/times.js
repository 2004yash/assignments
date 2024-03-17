/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function nSum(n) {
    let sum=0;
    for (let i=0; i<n; i++) {
        sum+=i;
    }
    return sum;
  }
  
  
  
  function calculateTime(n) {
    const currentDate = new Date();
    let a = currentDate.getMilliseconds();
    const b = currentDate.getSeconds();
    a+=b*1000;
    
    nSum(n);
    const currentDate2 = new Date(); 
    let a1 = currentDate2.getMilliseconds();
    const b1 = currentDate2.getSeconds();
    a1+=b1*1000;
    return a1-a;
  }
  console.log(calculateTime(100000000000000000));
  