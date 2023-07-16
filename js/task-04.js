const value = document.querySelector(`#value`);
const minusBtn = document.querySelector(`button[data-action="decrement"]`);
const plusBtn = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

function addEl() {
  counterValue += 1;
  value.textContent = counterValue;
}

function removeEl() {
  counterValue -= 1;
  value.textContent = counterValue;
}

minusBtn.addEventListener("click", removeEl);
plusBtn.addEventListener("click", addEl);
