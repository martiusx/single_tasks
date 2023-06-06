const isPalindrome = (word) => {
  let arr = [];
  const trimmedWord = word.replace(/\s/g, "");

  arr.push(...trimmedWord);
  arr.reverse();
  const margeArr = arr.join("");

  if (trimmedWord === margeArr) {
    return true;
  } else {
    return false;
  }
};

isPalindrome("anna");
isPalindrome("sanna");
isPalindrome("sannas");
isPalindrome("san  nas");
