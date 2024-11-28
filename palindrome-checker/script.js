const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const sample = () => {
  result.innerText = "";
  const rawText = textInput.value;
  const inputText = rawText.toLowerCase().replace(/[\W_]/g,"");
  inputText == "" ?  alert("Please input a value") : palinFunc(inputText, rawText);
};

const palinFunc = (word, output) => {
  const arr = [...word];
  if (arr.length >= 2) {
    let a = arr.shift(); let b = arr.pop();
    if (a !== b) return result.innerText = `"${output}" is not a palindrome`;
  };
  return result.innerText = `"${output}" is a palindrome`;
};

checkBtn.addEventListener("click", sample);