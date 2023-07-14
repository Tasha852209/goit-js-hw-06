let counterValue = document.querySelector(`#counter`);
counterValue.textContent = 0;

const minusBtn = document.querySelector(`button[data-action="decrement"]`);
const plusBtn = document.querySelector(`button[data-action="increment"]`);

minusBtn.addEventListener("click", removeEl);
plusBtn.addEventListener("click", addEl);

const removeEl = () => (counterValue -= 1);
const addEl = () => (counterValue += 1);
