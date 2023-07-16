const bodyToChange = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

btnChangeColor.addEventListener("click", onBodyColor);

function onBodyColor() {
  bodyToChange.style.backgroundColor = getRandomHexColor();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  spanText.textContent = `${getRandomHexColor()}`;
}
