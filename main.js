const inputBox = document.getElementById("inputBox");
const alertH = document.getElementById("maxAlert");

// inputSize.addEventListener("input", function () {
//   inputSize.style.height = "auto";
//   inputSize.style.height = inputSize.scrollHeight + "px";
// });

inputBox.addEventListener("input", limitText);

function limitText() {
  console.log("Current length:", inputBox.value.length);

  if (inputBox.value.length >= 100) {
    alertH.style.visibility = "visible";
  } else {
    alertH.style.visibility = "hidden";
  }
}

const form = document.getElementById("formList");

let inputValue;

document.getElementById("mySub").onclick = function() {
    inputValue = inputBox.value;
    console.log(inputValue);
}