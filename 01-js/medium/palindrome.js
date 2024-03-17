/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str == "") {
    return true;
  } else {
    str = str.toLowerCase();
    let newstr = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) < 97 + 26) {
        newstr += str[i];
      }
    }
    str = newstr;
    let rev = str[str.length - 1];
    for (let i = str.length - 2; i >= 0; i--) {
      rev += str[i];
    }
    if (rev == str) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = isPalindrome;
