/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  npx jest ./tests/anagram.js
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function toLowerCase(str) {
  return str.toLowerCase();
}
function isAnagram(str1, str2) {
  str1 = toLowerCase(str1);
  let a = str1.split("");
  str2 = toLowerCase(str2);
  
  console.log(a);
  let b = str2.split("");
  
  // console.log(a);
  let k=0;
  if (str1.length==str2.length) {

    for(let i=0; i<str1.length; i++) {
      for(let j=0; j<str2.length; j++) {
        if (a[i]==b[j]) {
          k++;
          console.log(k);
          break;
      }

  }

}
if (k==str1.length) {
  return true;
}
else {
  return false;
}
}
else {
  return false;
}
}

isAnagram('fairy tale','tale fairy')

module.exports = isAnagram;
// console.log(a)
