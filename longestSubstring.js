let longestString = "pwwkew";
let longestLength = 0;

var lengthOfLongestSubstring = function (s) {
  for (let i = 0; i < s.length; i++) {
    let currentSubstring = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (currentSubstring.includes(s[j])) {
        break;
      }
      currentSubstring = currentSubstring + s[j];
    }
    console.log("currentSubstring", currentSubstring);
    if (longestLength < currentSubstring.length) {
      longestLength = currentSubstring.length;
    }
  }
  return longestLength;
};

// lengthOfLongestSubstring(longestString);
console.log(
  "lengthOfLongestSubstring",
  lengthOfLongestSubstring(longestString)
);

// "pw"
// "pww"
// "pwk"
// "pwke"
