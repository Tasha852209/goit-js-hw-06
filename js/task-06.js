const validInput = document.getElementById("validation-input");
const validLength = validInput.dataset.length;
validInput.addEventListener("blur", onBlur);

function onBlur(event) {
  //   if (event.currentTarget.value.length === Number(validLength)) {
  //     validInput.style.borderColor = "#4caf50";
  //     return;
  //   }
  //   validInput.style.borderColor = "#f44336";
  if (event.currentTarget.value.length === Number(validLength)) {
    validInput.className = "valid";
    return;
  }
  validInput.className = "invalid";
}
