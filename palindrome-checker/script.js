const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const sample = () => {
  const rawText = textInput.value;
  const inputText = rawText.toLowerCase();
  const regex = /[+\-\/\\()|_:\-=.,\s]/g; 
  const readyText = inputText.replace(regex, '');
  if (inputText == "") {
    alert("Please input a value");
  } else { palinFunc(readyText, rawText);
  };
  
};

const palinFunc = (word, output) => {
  const arr = [...word];
  while (arr.length >= 2) {
    let a = arr.shift();
    let b = arr.pop();
    if (a !== b) return result.innerText = `"${output} is not a palindrome"`;
  };
  
  return result.innerText = `"${output} is a palindrome"`;
};
checkBtn.addEventListener("click", sample);