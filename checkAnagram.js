function checkAnagram(str1, str2){
var alpha=str1.split("").sort().join("");

  if(alpha===str2.split("").sort().join("");)
console.log("yes, both strings are anagrams !!")
  
    else
console.log("no, strings are not anagrams !!")
  }