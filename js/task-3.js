const inputName = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputName.addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    outputField.innerText = "Anonymous";
    return;
  }
  outputField.innerText = e.target.value.trim();
});