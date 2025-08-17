const listOfCategories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${listOfCategories.length}`);

Array.from(listOfCategories).forEach(category => {
  console.log(
    `Category: ${category.firstElementChild.textContent}`
  );
  console.log(
    `Elements: ${category.querySelectorAll('ul li').length}`
  );
});