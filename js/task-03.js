const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(`.gallery`);

const galleryImg = images.reduce((acc, { url, alt }) => {
  acc += `<li><img src=${url} alt=${alt}/></li>`;
  return acc;
}, "");
// const galleryImg = images
//   .map(({ url, alt }) => `<li><img src=${url} alt=${alt}/></li>`)
//   .join("");

galleryList.insertAdjacentHTML("beforeend", galleryImg);

const imgItem = document.querySelectorAll(`img`);
imgItem.forEach((img) => (img.style.width = "200px"));

galleryList.style.display = "flex";
galleryList.style.gap = "40px";
galleryList.style.flexDirection = "row";
