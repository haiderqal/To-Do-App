const inputSize = document.getElementById("inputBox");

inputSize.addEventListener("input", function () {
  inputSize.style.height = "auto";
  inputSize.style.height = inputSize.scrollHeight + "px";
});


function limitText(value) {
  if (inputSize.value.length > 100) {
    
  }
}