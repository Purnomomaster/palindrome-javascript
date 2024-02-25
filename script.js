const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const textCustom = "Please input a value";
const textTrue = " is a palindrome";
const textFalse = " is not a palindrome";

button.addEventListener("click", function () {
  isPalindrome(input.value);
});

function isPalindrome(str) {
  if (str.split("")[0] == "_") {
    newStr = str.replace(/[^a-zA-Z0-9]/g, "");
    if (newStr === newStr.split("").reverse().join("")) {
      result.innerText = input.value + textTrue;
    }
    return;
  }
  if (str == " " || str.length == 0) return alert(textCustom);
  const cleanStr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split("")
    .filter(function (a) {
      return a != " ";
    });
  // Compare the original string with its reverse
  if (cleanStr.join("") === cleanStr.reverse().join("")) {
    result.innerText = input.value + textTrue;
  } else {
    result.innerText = input.value + textFalse;
  }
}
