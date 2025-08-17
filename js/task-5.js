

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorName.innerText = color;
  bodyElement.style.backgroundColor = color;
});