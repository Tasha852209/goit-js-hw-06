const input = document.getElementById("font-size-control");
const greet = document.getElementById("text");
input.addEventListener("input", onInput);

function onInput(event) {
  const currentValue = event.currentTarget.value;
  greet.style.setProperty("font-size", `${currentValue}px`);
}
