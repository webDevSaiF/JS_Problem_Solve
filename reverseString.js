//REVERSE A STRING
// OUR STRING
let anyString = "This string is going to be reversed";

// FUNCTION THAT RECEIVES A STRING FOR REVERSE A STRING
function reverseString(str) {
  let reverseString = "";
  for (let i = 0; i < str.length; i++) {
    reverseString = str[i] + reverseString;
  }
  return reverseString;
}

let result = reverseString(anyString);
console.log(result); //RESULT => desrever eb ot gniog si gnirts sihT
