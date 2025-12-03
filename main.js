const inputSize = document.getElementById("inputBox");
const alertH = document.getElementById("maxAlert");

// inputSize.addEventListener("input", function () {
//   inputSize.style.height = "auto";
//   inputSize.style.height = inputSize.scrollHeight + "px";
// });

inputSize.addEventListener("input", limitText);

function limitText() {
  console.log("Current length:", inputSize.value.length);

  if (inputSize.value.length >= 100) {
    alertH.style.visibility = "visible";
  } else {
    alertH.style.visibility = "hidden";
  }
}
