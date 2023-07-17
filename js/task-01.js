const categoriesEl = document.getElementById(`categories`);
const elItems = [...categoriesEl.children];
const countEl = elItems.length;

console.log("Number of categories: ", countEl);

elItems.forEach((element) => {
  const elTitle = element.firstElementChild;
  const countElItems = elTitle.nextElementSibling.children;
  console.log("Category: ", elTitle.textContent);
  console.log("Elements: ", countElItems.length);
});
