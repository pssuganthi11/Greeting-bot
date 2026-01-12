const textEl = document.getElementById("text");
const btnEl = document.querySelector("button");
const result = document.getElementById("result");

btnEl.addEventListener("click", () => {
  const message = document.createElement("h2");
  const inputvalue = textEl.value;
  // console.log(inputvalue)

  result.innerText = "";
  if (!inputvalue) {
    alert("Please Enter Text");
    return;
  }
  const textregex = /^[a-zA-Z]+$/;

  if (!textregex.test(inputvalue)) {
    alert("please Enter character only");
    return;
  }
  message.innerText = "Hello" + " " + inputvalue +" "+",Welcome to cyberdude 😊";
  // console.log(message);
  result.append(message);
  result.classList.remove("hidden");
  
});

// console.log(textEl);
// console.log(btnEl);
