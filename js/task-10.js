const input = document.querySelector("input");
const boxes = document.getElementById("boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

const newElements = [];

function createBoxes() {
  const amount = input.value;

  let widthPerBox = 30;

  for (let i = 1; i <= amount; i += 1) {
    widthPerBox += 10;
    const createEl = document.createElement("div");
    createEl.style.backgroundColor = getRandomHexColor();
    createEl.style.width = `${widthPerBox}px`;
    createEl.style.height = `${widthPerBox}px`;
    newElements.push(createEl);
  }
  boxes.append(...newElements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  input.value = "";
  boxes.remove([...newElements]);
}
